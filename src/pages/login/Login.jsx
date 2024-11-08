import { useEffect, useState } from "react";
import loginBg from "../../assets/others/authentication.png";
import loginImg from "../../assets/others/authentication2.png";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import useAuth from "../../hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import SocialLogin from "../../components/socialLogin/SocialLogin";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [disabled, setDisabled] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const from = location.state?.from?.pathname || "/";
  // console.log("state inside the login page", location.state);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log({ email, password });
    // form.reset();
    setDisabled(true);
    signIn(email, password)
      .then((res) => {
        console.log(res.user);
        Swal.fire({
          title: "Success",
          text: "Login successfully",
          icon: "success",
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        Swal.fire({
          title: "Something Went Wrong",
          text: "Username or Password is wrong!",
          icon: "error",
        });
        console.log(error);
      });
  };

  const handleValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    console.log(user_captcha_value);

    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <Helmet>
        <title>Taste Crafter | Login</title>
      </Helmet>
      <div
        className="max-w-7xl mx-auto p-1 "
        style={{ backgroundImage: `url(${loginBg}` }}
      >
        <div className="hero min-h-screen ">
          <div className="hero-content gap-10 flex-col lg:flex-row justify-around">
            <div className="text-center md:w-1/2 ">
              <h1 className="text-5xl font-bold mb-6 text-gray-900">
                Login now!
              </h1>
              <img src={loginImg} alt="" />
            </div>
            <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handleLogin} className="card-body">
                <div className="form-control relative">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>

                <div className="relative">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <div></div>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="password"
                    className="input input-bordered w-full"
                    required
                  />
                  {showPassword ? (
                    <span
                      onClick={handleShowPassword}
                      className="absolute right-2 top-12 cursor-pointer"
                    >
                      <FaEyeSlash />
                    </span>
                  ) : (
                    <span
                      onClick={handleShowPassword}
                      className="absolute right-2 top-12 cursor-pointer"
                    >
                      <FaEye />
                    </span>
                  )}
                </div>

                <div className="form-control">
                  <label className="label">
                    <LoadCanvasTemplate />
                  </label>
                  <input
                    onBlur={handleValidateCaptcha}
                    type="text"
                    name="captcha"
                    placeholder="type the captcha above"
                    className="input input-bordered"
                    // required
                  />

                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  {/* TODO: disabled the  re captcha */}
                  <input
                    disabled={disabled}
                    type="submit"
                    className="btn bg-[#D1A054B3] text-white font-medium font-inter text-xl hover:bg-[#d19f54cc] hover:scale-105"
                    value="Login"
                  />
                </div>
                <p className="text-[#D1A054] text-center ">
                  New Here?
                  <span className=" font-medium">
                    <Link to="/signUp"> Create a New Account</Link>
                  </span>
                </p>
              </form>
              <SocialLogin></SocialLogin>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
