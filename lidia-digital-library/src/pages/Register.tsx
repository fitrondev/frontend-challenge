import { Link } from "react-router-dom";
import Logo from "../assets/images/Logo Rounded.svg";
import RegisterInput from "../components/RegisterInput";

const Register = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-5 py-5">
      <div>
        <img src={Logo} alt="" className="w-[80px] h-[80px]" />
      </div>

      <div className="w-[350px] sm:w-[730px] p-10 bg-white shadow-xl rounded-lg border-2 border-t-4 border-t-primary space-y-5">
        <div className="space-y-2">
          <h1 className="text-[30px] font-semibold">Register</h1>
          <p className="text-[18px] font-medium">
            <span className="text-primary">Make</span> an account!
          </p>
        </div>

        <div className="space-y-5">
          <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <RegisterInput
              label="Full Name"
              type="text"
              id="fullname"
              placeholder="John Doe"
            />

            <RegisterInput
              label="NIK"
              type="text"
              id="nik"
              placeholder="e.g. 1234567890123456"
            />

            <RegisterInput
              label="Username"
              type="text"
              id="username"
              placeholder="johndoe"
            />

            <RegisterInput
              label="Email"
              type="email"
              id="email"
              placeholder="e.g. johndoe@gmail.com"
            />

            <RegisterInput
              label="Phone"
              type="number"
              id="phone"
              placeholder="e.g. 081234567890"
            />

            <RegisterInput label="Born" type="date" id="born" />

            <RegisterInput
              label="Adress"
              type="text"
              id="address"
              placeholder="e.g. Jl. Jendral Sudirman No. 1"
            />

            <RegisterInput
              label="Gender"
              type="text"
              id="gender"
              placeholder="male | female"
            />

            <RegisterInput
              label="Password"
              type="password"
              id="password"
              placeholder="your password"
            />

            <RegisterInput
              label="Confirm Password"
              type="password"
              id="confirmpassword"
              placeholder="your password"
            />
          </form>

          <div>
            <button
              type="submit"
              className="bg-primary w-full h-full py-3 text-white rounded-md font-medium hover:bg-opacity-90"
            >
              Register
            </button>
          </div>
        </div>
      </div>

      <div>
        <p className="text-[18px]">
          Already have an account?{" "}
          <Link to="/login" className="text-primary">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};
export default Register;
