import React from 'react';

interface AvatarProps {
  onClick?: () => void;
  size?: number;
}

const Avatar: React.FC<AvatarProps> = ({ onClick, size = 40 }) => {
  return (
    <div
      className="cursor-pointer"
      onClick={onClick}
      style={{
        width: size,
        height: size,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          width: size,
          height: size,
          borderRadius: '50%',
          overflow: 'hidden',
        }}
      >
        <img
          src="https://via.placeholder.com/100"
          alt="User Avatar"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </div>
    </div>
  );
};

export default Avatar;
