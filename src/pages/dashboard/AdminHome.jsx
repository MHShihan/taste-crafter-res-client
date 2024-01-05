import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { GiWallet } from "react-icons/gi";
import { FaTruck, FaUsers } from "react-icons/fa";
import { GiChefToque } from "react-icons/gi";
import Lottie from "lottie-react";
import loadingAnimation from "../../assets/animation/loadingAnimation.json";

const AdminHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: stats = {}, isLoading } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure("/admin-stats");
      return res.data;
    },
  });
  return (
    <div className="bg-[#F6F6F6] min-h-screen">
      <div className="mx-10">
        <h2 className="text-3xl pt-10 pb-6">
          <span>Hi, Welcome </span>
          <span className="font-medium">
            {user?.displayName ? user?.displayName : "Back!"}
          </span>
        </h2>

        <div className="stats grid grid-cols-4 gap-6 bg-[#F6F6F6]">
          {/* Revenue */}
          <div className="stat h-[150px] bg-gradient-to-r from-[#BB34F5] from-0% to-[#FCDBFF] to-100% rounded-2xl">
            <div className="flex justify-center items-center gap-4 text-white">
              <div className="text-5xl">
                <GiWallet />
              </div>
              <div>
                <h2 className="stat-value">${stats.roundedRevenue}</h2>
                {isLoading && (
                  <Lottie animationData={loadingAnimation}></Lottie>
                )}
                <h3 className="text-2xl">Revenue</h3>
              </div>
            </div>
          </div>
          {/* Users */}
          <div className="stat bg-gradient-to-r from-[#D3A256] from-0% to-[#FDE8C0] to-100% rounded-2xl">
            <div className="flex justify-center items-center gap-4 text-white">
              <div className="text-5xl">
                <FaUsers />
              </div>
              <div>
                <h2 className="stat-value">{stats.users}</h2>
                {isLoading && (
                  <Lottie animationData={loadingAnimation}></Lottie>
                )}
                <h3 className="text-2xl">Users</h3>
              </div>
            </div>
          </div>
          {/* Menu Items */}
          <div className="stat bg-gradient-to-r from-[#FE4880] from-0% to-[#FECDE9] to-100% rounded-2xl">
            <div className="flex justify-center items-center gap-4 text-white">
              <div className="text-5xl">
                <GiChefToque />
              </div>
              <div>
                {isLoading && (
                  <Lottie animationData={loadingAnimation}></Lottie>
                )}
                <h2 className="stat-value">{stats.menuItems}</h2>
                <h3 className="text-2xl">Menu Item</h3>
              </div>
            </div>
          </div>
          <div className="stat bg-gradient-to-r from-[#6AAEFF] from-0% to-[#B6F7FF] to-100% rounded-2xl">
            <div className="flex justify-center items-center gap-4 text-white">
              <div className="text-5xl">
                <FaTruck />
              </div>
              <div>
                {isLoading && (
                  <Lottie animationData={loadingAnimation}></Lottie>
                )}
                <h2 className="stat-value">{stats.orders}</h2>
                <h3 className="text-2xl">Orders</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
