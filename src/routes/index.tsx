import { useContext } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { AuthPage } from "../pages/AuthPage/AuthPage";
import { protectedRoutes } from "./protected";
import { publicRoutes } from "./public";

export const AppRoutes = () => {
  const { user } = useContext(AuthContext);

  const commonRoutes = [
    { path: "/", element: <AuthPage /> },
    { path: "*", element: <Navigate to="." /> },
  ];

  const routes = user ? protectedRoutes : publicRoutes;

  const element = useRoutes([...routes, ...commonRoutes]);

  return <>{element}</>;
};
