import { useForm } from "react-hook-form";
import signUpBg from "../../assets/others/authentication.png";
import signUpImg from "../../assets/others/authentication2.png";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SocialLogin from "../../components/socialLogin/SocialLogin";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

const SignUp = () => {
  const axiosPublic = useAxiosPublic();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { createUser, updateUser } = useAuth();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then((res) => {
        const loggedUser = res.user;
        console.log(loggedUser);

        updateUser(data.name, data.photo)
          .then(() => {
            const userInfo = {
              name: data.name,
              email: data.email,
            };
            axiosPublic.post("/users", userInfo).then((res) => {
              if (res.data.insertedId) {
                // console.log("User added into data base");
                Swal.fire({
                  title: "Good job!",
                  text: "Sign Up successful!",
                  icon: "success",
                });
              }
            });

            reset();
            navigate("/login");
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <Helmet>
        <title>Taste Crafter | Sign Up</title>
      </Helmet>
      <div
        className="max-w-7xl mx-auto p-1 "
        style={{ backgroundImage: `url(${signUpBg}` }}
      >
        <div className="hero min-h-screen ">
          <div className="hero-content gap-10 flex-col lg:flex-row-reverse justify-around">
            <div className="text-center md:w-1/2 ">
              <h1 className="text-5xl font-bold mb-6 text-gray-900">
                Sign Up now!
              </h1>
              <img src={signUpImg} alt="" />
            </div>
            <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    {...register("name", { required: true })}
                    name="name"
                    placeholder="name"
                    className="input input-bordered"
                    required
                  />
                  {errors.name && (
                    <span className="text-red-500">Name is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    type="text"
                    {...register("photo", { required: true })}
                    name="photo"
                    placeholder="photo url"
                    className="input input-bordered"
                    required
                  />
                  {errors.photo && (
                    <span className="text-red-500">Photo url is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    {...register("email")}
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
                  <input
                    type={showPassword ? "text" : "password"}
                    {...register("password", {
                      required: true,
                      minLength: 8,
                      maxLength: 20,
                      pattern:
                        /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
                    })}
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
                  {errors.password?.type === "minLength" && (
                    <span className="text-red-500">
                      Password must be at least 8 characters
                    </span>
                  )}
                  {errors.password?.type === "maxLength" && (
                    <span className="text-red-500">
                      Password must be at less than 20 characters
                    </span>
                  )}
                  {errors.password?.type === "pattern" && (
                    <span className="text-red-500">
                      Password must be at least one uppercase letter, one
                      lowercase letter, one digit and one special character
                    </span>
                  )}
                </div>

                <div className="form-control mt-6">
                  <input
                    type="submit"
                    className="btn bg-[#D1A054B3] text-white font-medium font-inter text-xl hover:bg-[#d19f54cc] "
                    value="Sign Up"
                  />
                </div>
                <p className="text-[#D1A054] text-center ">
                  Already Registered?
                  <span className=" font-medium">
                    <Link to="/login"> Go to Login</Link>
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

export default SignUp;
