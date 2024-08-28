import Mountain from "../assets//Pictures/iStock-1174987674.jpg";
import TextInput from "../components/Inputs/TextInput";
import Button from "../components/Buttons/LoginButton";
import { Link } from "react-router-dom";

const Login = () => {
  const handleCreateClick = () => {};
  return (
    <div className="flex h-screen md:overflow-hidden">
      {/* Left Side: Picture */}
      <div className="hidden md:flex w-1/2 bg-blue-50 items-center justify-center">
        <img
          src={Mountain}
          alt="Login"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Side : Texts */}
      <div className="flex w-full md:w-1/2 h-screen items-center justify-center overflow-y-auto bg-sky-75">
        <div className="w-full max-w-md p-8">
          <h5 className="text-3xl font-bold text-sky-900 mb-8 text-center">
            Create a new account
          </h5>
          <form className="space-y-4 ">
            <TextInput
              label="E-mail Address"
              type="email"
              placeholder="Enter your email"
            />
            <TextInput
              label="Password"
              type="password"
              placeholder="Enter your password"
            />
            <TextInput
              label="Password (Retry)"
              type="password"
              placeholder="Enter your password"
            />
            <div className="mt-4 flex justify-center w-full">
              <Button onClick={handleCreateClick}>Create Account</Button>
            </div>
          </form>
          <div className="mt-4 text-center">
            <Link to="/login" className="text-sky-700 underline">
              Login in to your account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
