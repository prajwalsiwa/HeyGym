import "./App.css";
import MobileNavigation from "./Components/common/Header/MobileNavigation";
import appRoutes from "./routes/appRoutes";
import generateRoutes from "./routes/generateRoutes";

function App() {
  return (
    <div className="dashboard-container  bg-gray-500 flex flex-col overflow-hidden justify-end h-screen">
      <div className=" flex overflow-auto ">
        {generateRoutes({ routes: appRoutes })}
      </div>
      <div className="navbar h-[4.4rem]">
        <MobileNavigation />
      </div>
    </div>
  );
}

export default App;
