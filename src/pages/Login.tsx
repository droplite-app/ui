import Mountain from "../assets/mountain.jpg";
import TextInput from "../components/Login/TextInput";
import Button from "../components/Login/Button";
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sol taraf: Resim kısmı */}
      <div className="hidden md:flex w-1/2 bg-blue-50 items-center justify-center">
        <img src={Mountain} alt="Login" className="max-w-full max-h-full" />
      </div>

      {/* Sağ taraf: Yazı kısmı */}
      <div className="flex w-full md:w-1/2 items-center justify-center bg-sky-75">
        <div className="w-full max-w-md p-8">
          <h5 className="text-3xl font-bold text-sky-900 mb-8">
            Login in to your account
          </h5>
          <form className="space-y-4">
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
            <div className="mt-4 flex justify-center w-full">
              <Button />
            </div>
          </form>
          <div className="mt-4 text-center">
            <Link to="/create-account" className="text-sky-700 underline">
              Create a new account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;