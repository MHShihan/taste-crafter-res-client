import { useForm } from "react-hook-form";
import signUpBg from "../../assets/others/authentication.png";
import signUpImg from "../../assets/others/authentication2.png";
import { Link } from "react-router-dom";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
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
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password")}
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control mt-6">
                <input
                  type="submit"
                  className="btn bg-[#D1A054B3] text-white font-medium font-inter text-xl hover:bg-[#d19f54cc] hover:scale-105"
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
