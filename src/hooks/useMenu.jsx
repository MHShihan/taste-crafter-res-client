import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useMenu = () => {
  const axiosPubic = useAxiosPublic();

  const getAllMenu = async () => {
    const res = await axiosPubic.get("/menu");
    return res.data;
  };

  const {
    data: allMenu,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["allMenu"],
    queryFn: getAllMenu,
  });

  return [allMenu, refetch, isLoading];
};

export default useMenu;
