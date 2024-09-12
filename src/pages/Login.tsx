import Mountain from "../assets/Pictures/iStock-1174987674.jpg";
import TextInput from "../components/Inputs/TextInput";
import Button from "../components/Buttons/LoginButton";
import { Link } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  // State'ler ile e-posta ve şifre verilerini tutma
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginClick = () => {
    // Giriş işlemleri burada yapılacak
    console.log("Email:", email);
    console.log("Password:", password);
  };

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
          <h5 className="text-3xl font-bold text-sky-900 mb-8">
            Log in to your account
          </h5>
          <form className="space-y-4">
            {/* E-posta alanı */}
            <TextInput
              label="E-mail Address"
              type="email"
              placeholder="Enter your email"
              value={email} // State'e bağlanıyor
              onChange={(e) => setEmail(e.target.value)} // State güncelleniyor
            />
            
            {/* Şifre alanı */}
            <TextInput
              label="Password"
              type="password"
              placeholder="Enter your password"
              value={password} // State'e bağlanıyor
              onChange={(e) => setPassword(e.target.value)} // State güncelleniyor
            />
            
            <div className="mt-4 flex justify-center w-full ">
              <Button onClick={handleLoginClick}>Login</Button>
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
