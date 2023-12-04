import GlobalStyle from "./styles/global";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthPage } from "./pages/AuthPage/AuthPage";
import { AppRoutes } from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthPage />,
  },
]);

function App() {
  return (
    <>
      <ToastContainer />
      <GlobalStyle />
      <AppRoutes />
    </>
  );
}

export default App;
