import React from "react";

interface AvatarProps {
  onClick?: () => void;
  size?: "small" | "medium" | "large" | number;
}

const Avatar: React.FC<AvatarProps> = ({ onClick, size = "large" }) => {
  let sizeClasses = "";
  let customSizeStyle = {};

  if (typeof size === "number") {
    customSizeStyle = {
      width: `${size}px`,
      height: `${size}px`,
    };
  } else {
    switch (size) {
      case "small":
        sizeClasses = "w-8 h-8";
        break;
      case "medium":
        sizeClasses = "w-12 h-12";
        break;
      case "large":
        sizeClasses = "w-16 h-16";
        break;
      default:
        sizeClasses = "w-16 h-16";
    }
  }

  return (
    <div
      className={`cursor-pointer flex justify-center items-center ${sizeClasses}`}
      onClick={onClick}
      style={customSizeStyle}
    >
      <div
        className={`rounded-full overflow-hidden ${sizeClasses}`}
        style={customSizeStyle}
      >
        <img
          src="https://via.placeholder.com/100"
          alt="User Avatar"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Avatar;
