import axios from "axios";
import { parseCookies, destroyCookie } from "nookies";
import { toast } from "react-toastify";

let cookies = parseCookies();

export const api = axios.create({
  baseURL: "http://localhost:3000",

  headers: {
    Authorization: `Bearer ${cookies["hubLocalAuth.token"]}`,
  },
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  function (error) {
    if (error.response !== null) {
      if (error.response.status === 401) {
        destroyCookie(null, "hubLocalAuth.token");
        toast.error("Você não está autenticado!");
        window.location.href = "/";
        return;
      }
    }

    console.log(error);
    return Promise.reject(error);
  }
);
