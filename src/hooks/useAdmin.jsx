import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();

  const getAdmin = async () => {
    const res = await axiosSecure.get(`/admin/${user?.email}`);
    console.log(res.data);
    return res.data?.admin;
  };

  const { data: isAdmin, isPending: isAdminLoading } = useQuery({
    queryKey: [user?.email, "isAdmin"],
    enabled: !loading,
    queryFn: getAdmin,
  });

  return [isAdmin, isAdminLoading];
};

export default useAdmin;
