import { Outlet } from "react-router-dom";
import DashboardLinks from "../pages/dashboard/DashboardLinks";
import { Toaster } from "react-hot-toast";

const Dashboard = () => {
  return (
    <div className="max-w-7xl mx-auto  grid grid-cols-12  ">
      <Toaster />
      <div className=" col-span-3 lg:col-span-2 bg-[#D1A054] min-h-screen pt-10 ">
        <div className="ml-6  text-[#151515] font-cinzel">
          <h2 className="font-extrabold text-2xl  ">Taste Crafter</h2>
          <h3 className="tracking-[.16em] font-[700]  text-xl">Restaurant</h3>
        </div>
        <ul className="menu  font-inter mt-6">
          <DashboardLinks></DashboardLinks>
        </ul>
      </div>
      <div className="col-span-9 lg:col-span-10 ">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
