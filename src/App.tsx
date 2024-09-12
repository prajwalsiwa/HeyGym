import { useLocation } from "react-router-dom";
import "./App.css";
import MobileNavigation from "./Components/common/Header/MobileNavigation";
import appRoutes from "./routes/appRoutes";
import generateRoutes from "./routes/generateRoutes";

function App() {
  const { pathname } = useLocation();

  return (
    <div className="dashboard-container relative  bg-white flex flex-col overflow-hidden justify-between h-screen">
      <div className={`flex  ${
          pathname === "/login" ? "block" : "h-full overflow-y-auto "
        }`}>
        {generateRoutes({ routes: appRoutes })}
      </div>
      <div
        className={`navbar h-[4.4rem]  ${
          pathname === "/login" ? "hidden" : "block"
        }`}
      >
        <MobileNavigation />
      </div>
    </div>
  );
}

export default App;
