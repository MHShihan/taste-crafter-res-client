import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";

const SocialLogin = () => {
  const { googleSignIn } = useAuth();
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
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
