import { Link } from "react-router-dom";
import Logo from "../assets/images/Logo Rounded.svg";

const Login = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-5">
      <div>
        <img src={Logo} alt="" className="w-[80px] h-[80px]" />
      </div>

      <div className="w-[350px] sm:w-[400px] h-[380px] p-10 bg-white shadow-xl rounded-lg border-2 border-t-4 border-t-primary space-y-5">
        <div className="space-y-2">
          <h1 className="text-[30px] font-semibold">Login</h1>
          <p className="text-[18px] font-medium">
            <span className="text-primary">Welcome</span> back!
          </p>
        </div>

        <div>
          <form className="space-y-5">
            <div className="flex flex-col">
              <label htmlFor="username" className="font-medium">
                Username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="john doe"
                className="border py-3 px-3 rounded-md focus:outline-primary"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="password" className="font-medium">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="your password"
                className="border py-3 px-3 rounded-md focus:outline-primary"
              />
            </div>

            <div>
              <button
                type="submit"
                className="bg-primary w-full h-full py-3 text-white rounded-md font-medium hover:bg-opacity-90"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>

      <div>
        <p className="text-[18px]">
          Don't have an account?{" "}
          <Link to="/register" className="text-primary">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};
export default Login;
