import { Route, Routes } from "react-router-dom";
import { AuthPage } from "../../AuthPage/AuthPage";

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="login" element={<AuthPage />} />
    </Routes>
  );
};
