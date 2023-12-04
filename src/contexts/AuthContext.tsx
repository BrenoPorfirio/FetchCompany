import { setCookie, destroyCookie } from "nookies";
import { createContext, ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";

interface SignInCredentials {
  email: string;
  password: string;
}

type User = {
  id: number;
  email: string;
  name: string;
};

type AuthContextData = {
  signIn(credentials: SignInCredentials): Promise<void>;
  user: User;
  isAuthenticated: boolean;
  signOut: () => void;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>();
  const navigate = useNavigate();
  const isAuthenticated = !!user;

  useEffect(() => {
    const loggedInUser = localStorage.getItem("@hubLocal-user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
      navigate("/app");
    } else {
      setUser(null);
      navigate("/");
    }
  }, []);

  async function signIn({ email, password }: SignInCredentials) {
    try {
      const response = await api.post(`/auth/signin`, {
        email: email,
        password: password,
      });

      const userId = response.data.userId;
      const userData = await api.get(`/users/${userId}`);

      const token = response.data.access_token;

      localStorage.setItem("@hubLocal-user", JSON.stringify(user));

      setCookie(undefined, "hubLocalAuth.token", token, {
        maxAge: 60 * 60 * 24 * 30,
        path: "/",
      });
      /* setCookie(undefined, "hubLocalAuth.refreshToken", refreshToken, {
        maxAge: 60 * 60 * 24 * 30,
        path: "/",
      }); */

      api.defaults.headers["Authorization"] = `Bearer ${token}`;

      setUser(userData.data);
      toast.success("Autenticado com sucesso!");
      navigate("/app");
    } catch (err) {
      toast.error("Credenciais inválidas");
      setUser(null);
      navigate("/");
      console.log(err);
    }
  }

  function signOut() {
    destroyCookie(undefined, "hubLocalAuth.token");
    destroyCookie(undefined, "hubLocalAuth.refreshToken");
    localStorage.removeItem("@hubLocal-user");

    navigate("/");
  }
  return (
    <AuthContext.Provider value={{ signIn, isAuthenticated, user, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}
