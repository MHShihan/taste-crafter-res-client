import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useUsers = () => {
  const axiosSecure = useAxiosSecure();
  const getAllUsers = async () => {
    const res = await axiosSecure("/uses");
    return res.data;
  };

  const { refetch, data } = useQuery({
    queryKey: ["users"],
    queryFn: getAllUsers,
  });
  return [data, refetch];
};

export default useUsers;
