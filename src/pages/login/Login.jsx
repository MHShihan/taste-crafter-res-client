import { useEffect, useRef, useState } from "react";
import loginBg from "../../assets/others/authentication.png";
import loginImg from "../../assets/others/authentication2.png";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";

const Login = () => {
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const captchaRef = useRef(null);
  const [disabled, setDisabled] = useState(true);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log({ email, password });
    // form.reset();
    // setDisabled(true);
  };

  const handleValidateCaptcha = () => {
    const user_captcha_value = captchaRef.current.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };
  return (
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
              <div className="form-control">
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
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  type="text"
                  ref={captchaRef}
                  name="captcha"
                  placeholder="type the captcha above"
                  className="input input-bordered"
                  required
                />
                <button
                  onClick={handleValidateCaptcha}
                  className="btn btn-outline btn-xs my-2"
                >
                  Validate
                </button>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  disabled={disabled}
                  type="submit"
                  className="btn bg-[#D1A054B3] text-white font-medium font-inter text-xl hover:bg-[#d19f54cc] hover:scale-105"
                  value="Login"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
