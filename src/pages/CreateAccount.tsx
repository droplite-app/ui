import Mountain from "../assets//Pictures/iStock-1174987674.jpg";
import TextInput from "../components/Inputs/TextInput";
import Button from "../components/Buttons/LoginButton";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL;

const CreateAccount = () => {
  const [full_name, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRetry, setPasswordRetry] = useState("");
  const navigate = useNavigate();

  const handleCreateClick = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!full_name || !email || !password || !passwordRetry) {
      alert("Please fill in all fields");
      return;
    }

    if (password !== passwordRetry) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await fetch(`${API_URL}/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          full_name,
          email,
          password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        sessionStorage.setItem("token", data.token);
        sessionStorage.setItem("userId", data.userId);

        alert("Account created successfully, Redirecting to your space...");
        navigate("/");
      } else {
        const data = await response.json();
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      alert("Error creating account");
      console.error(error);
    }
  };

  return (
    <div className="flex h-screen md:overflow-hidden">
      <div className="hidden md:flex w-1/2 bg-blue-50 items-center justify-center">
        <img
          src={Mountain}
          alt="Login"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex w-full md:w-1/2 h-screen items-center justify-center overflow-y-auto bg-sky-75">
        <div className="w-full max-w-md p-8">
          <h5 className="text-3xl font-bold text-sky-900 mb-8 text-center">
            Create a new account
          </h5>
          <form className="space-y-4" onSubmit={handleCreateClick}>
            <TextInput
              label="Full Name"
              type="text"
              name="full-name"
              placeholder="Enter your full name"
              value={full_name}
              onChange={(e) => setFullName(e.target.value)}
            />
            <TextInput
              label="E-mail Address"
              type="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextInput
              label="Password"
              type="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <TextInput
              label="Password (Retry)"
              type="password"
              name="password-retry"
              placeholder="Enter your password again"
              value={passwordRetry}
              onChange={(e) => setPasswordRetry(e.target.value)}
            />
            <div className="mt-4 flex justify-center w-full">
              <Button type="submit">Create Account</Button>
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

export default CreateAccount;
