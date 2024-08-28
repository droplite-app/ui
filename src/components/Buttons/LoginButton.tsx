import React from "react";

interface ButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}

const Button = ({ onClick, children }: ButtonProps) => { 
  return (
    <button
      onClick={onClick}
      className="bg-sky-900 text-white font-bold py-2 px-4 rounded hover:bg-sky-800 transition duration-300"
    >
      {children} 
    </button>
  );
};

export default Button;
