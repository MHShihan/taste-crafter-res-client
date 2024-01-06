import axios from "axios";

const instance = axios.create({
  baseURL: "https://bistro-boss-server-mu-ten.vercel.app/api/v1",
});
const useAxiosPublic = () => {
  return instance;
};

export default useAxiosPublic;
