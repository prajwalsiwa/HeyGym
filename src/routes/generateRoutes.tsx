import { Route, Routes } from "react-router-dom";
import { IRoute } from "./types";

interface generateRoutesProps {
  routes: IRoute[];
}

function generateRoutes({ routes }: generateRoutesProps) {
  return (
    <Routes>
      {routes?.map((route) => (
        <Route
          key={route.name}
          path={route.path}
          element={<route.component />}
        />
      ))}
    </Routes>
  );
}

export default generateRoutes;
