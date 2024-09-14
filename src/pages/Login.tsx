import Mountain from "../assets/Pictures/iStock-1174987674.jpg";
import TextInput from "../components/Inputs/TextInput";
import Button from "../components/Buttons/LoginButton";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLoginClick = async (e: React.FormEvent) => {
    e.preventDefault();

    //validation
    if (!email || !password) {
      alert("Please fill in all the fields");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      if (response.ok) {
        const data = await response.json();
        sessionStorage.setItem("token", data.token);
        sessionStorage.setItem("userId", data.userId);

        alert("Login successful, Redirecting to your dashboard...");
        navigate("/dashboard");
      } else {
        const data = await response.json();
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      alert("Error Logging in");
      console.log(error);
    }
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
          <h5 className="text-3xl font-bold text-sky-900 mb-8 text-center">
            Log in to your account
          </h5>
          <form className="space-y-4">
            {/* mail area */}
            <TextInput
              label="E-mail Address"
              type="email"
              placeholder="Enter your email"
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />

            {/* Password */}
            <TextInput
              label="Password"
              type="password"
              placeholder="Enter your password"
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
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
