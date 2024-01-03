import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useMenu = () => {
  const axiosPubic = useAxiosPublic();

  const getAllMenu = async () => {
    const res = await axiosPubic.get("/menu");
    return res.data;
  };

  const {
    data: allMenu = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["menu"],
    queryFn: getAllMenu,
  });
  // console.log(allMenu);

  return [allMenu, refetch, isLoading];
};

export default useMenu;
