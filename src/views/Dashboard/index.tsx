import MobileNavigation from "@/Compoents/common/Header/MobileNavigation";

export default function Dashboard() {
  return (
    <div className="dashboard-container h-screen bg-gray-500 flex flex-col justify-end">
      <div className="navbar flex justify-end items-end">
        <MobileNavigation />
      </div>
    </div>
  );
}
