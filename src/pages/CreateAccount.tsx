import Mountain from "../assets//Pictures/iStock-1174987674.jpg";
import TextInput from "../components/Inputs/TextInput";
import Button from "../components/Buttons/LoginButton";
import { Link } from "react-router-dom";
import { useState } from "react";

const CreateAccount = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRetry, setPasswordRetry] = useState("");

  const handleCreateClick = async (e: React.FormEvent) => {
    e.preventDefault();  // Formun yeniden yüklenmesini engelleme

    // Email ve şifre boş mu kontrol etme
    if (!email || !password || !passwordRetry) {
      alert("Please fill in all fields");
      return;
    }

    // Şifreler aynı mı kontrol etme
    if (password !== passwordRetry) {
      alert("Passwords do not match");
      return;
    }

    // Email ve şifrenin doğru ayarlandığını konsola yazdır
    console.log('Email:', email);
    console.log('Password:', password);

    // API'ye istek gönderme
    try {
      const response = await fetch("http://localhost:3000/users", {
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
        alert("Account created successfully");
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
      {/**Left Side: Picture */}
      <div className="hidden md:flex w-1/2 bg-blue-50 items-center justify-center">
        <img
          src={Mountain}
          alt="Login"
          className="w-full h-full object-cover"
        />
      </div>

      {/**Right Side : text input and form */}
      <div className="flex w-full md:w-1/2 h-screen items-center justify-center overflow-y-auto bg-sky-75">
        <div className="w-full max-w-md p-8">
          <h5 className="text-3xl font-bold text-sky-900 mb-8 text-center">
            Create a new account
          </h5>
          <form className="space-y-4" onSubmit={handleCreateClick}>
            <TextInput
              label="E-mail Address"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextInput
              label="Password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <TextInput
              label="Password (Retry)"
              type="password"
              placeholder="Enter your password again"
              value={passwordRetry}
              onChange={(e) => setPasswordRetry(e.target.value)}
            />
            <div className="mt-4 flex justify-center w-full">
              <Button type="submit"> 
                Create Account
              </Button>
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
