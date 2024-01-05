import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { GiWallet } from "react-icons/gi";
import { FaTruck, FaUsers } from "react-icons/fa";
import { GiChefToque } from "react-icons/gi";
import Lottie from "lottie-react";
import loadingAnimation from "../../assets/animation/loadingAnimation.json";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";

const AdminHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: stats = {}, isLoading } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    },
  });

  const { data: chartData = [] } = useQuery({
    queryKey: ["order-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/order-stats");
      return res.data;
    },
  });

  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

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
      <div className="flex bg-white mt-10 mx-10 ">
        <div className="w-1/2">
          <BarChart
            width={500}
            height={300}
            data={chartData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Bar
              dataKey="quantity"
              fill="#8884d8"
              shape={<TriangleBar />}
              label={{ position: "top" }}
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % 6]} />
              ))}
            </Bar>
          </BarChart>
        </div>
        <div className="w-1/2"></div>
      </div>
    </div>
  );
};

export default AdminHome;
