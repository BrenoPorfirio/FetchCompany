import { Suspense } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Companies } from "../pages/Companies/Companies";
import { Locations } from "../pages/Locations/Locations";

const App = () => {
  return (
    <div>
      <Suspense fallback={<h1>loading...</h1>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export const protectedRoutes = [
  {
    path: "/app/*",
    element: <App />,
    children: [
      {
        path: "",
        element: <Companies />,
      },
      {
        path: "locations",
        element: <Locations />,
      },
      {
        path: "*",
        element: <Navigate to="." />,
      },
    ],
  },
];
