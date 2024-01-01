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

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        const userInfo = {
          name: result.user?.displayName,
          email: result.user?.email,
        };
        axiosPublic.post("/users", userInfo).then((res) => {
          console.log(res.data);
          Swal.fire({
            title: "Good job!",
            text: " Login successful!",
            icon: "success",
          });
          navigate(from, { replace: true });
        });
      })
      .catch((error) => console.log(error.message));
  };
  return (
    <div className="pb-8 px-8">
      <div className="divider">OR</div>
      <button
        onClick={handleGoogleSignIn}
        className="btn btn-block text-xl bg-gray-300 hover:scale-105"
      >
        <FaGoogle />
        Google
      </button>
    </div>
  );
};

export default SocialLogin;
