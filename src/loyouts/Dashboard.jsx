import { Outlet } from "react-router-dom";
import DashboardLinks from "../pages/dashboard/DashboardLinks";

const Dashboard = () => {
  return (
    <div className="max-w-7xl mx-auto  grid grid-cols-12  ">
      <div className=" col-span-3 lg:col-span-2 bg-[#D1A054] min-h-screen pt-10 ">
        <div className="ml-6  text-[#151515] font-cinzel">
          <h2 className="font-extrabold text-2xl  ">Bistro Boss</h2>
          <h3 className="tracking-[.16em] font-[700]  text-xl">Restaurant</h3>
        </div>
        <ul className="menu  font-inter">
          <DashboardLinks></DashboardLinks>
        </ul>
      </div>
      <div className="col-span-9 lg:col-span-10 py-10 bg-[#F6F6F6]">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
