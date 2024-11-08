import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleSignIn } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  console.log(from);

  const handleGoogleSignIn = () => {
    googleSignIn().then(async (result) => {
      console.log(result.user);
      const userInfo = {
        name: result.user?.displayName,
        email: result.user?.email,
      };
      const res = await axiosPublic.post("/users", userInfo);
      if (res.data) {
        console.log(res.data);
        Swal.fire({
          title: "Good job!",
          text: " Login successful!",
          icon: "success",
        });
        navigate(from, { replace: true });
      }
    });
  };
  return (
    <div className="pb-8 px-8">
      <div className="divider">OR</div>
      <button
        onClick={handleGoogleSignIn}
        className="btn btn-block  text-white text-xl bg-[#D1A054B3] hover:scale-105"
      >
        <FaGoogle />
        Google
      </button>
    </div>
  );
};

export default SocialLogin;
