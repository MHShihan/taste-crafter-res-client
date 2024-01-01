import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useUsers = () => {
  const axiosSecure = useAxiosSecure();
  const getAllUsers = async () => {
    const res = await axiosSecure("/users");
    return res.data;
  };

  const { refetch, data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: getAllUsers,
  });
  return [users, refetch];
};

export default useUsers;
