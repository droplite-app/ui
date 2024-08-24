import React from 'react';

interface AvatarProps {
  onClick?: () => void;
  size?: 'small' | 'medium' | 'large';
}

const Avatar: React.FC<AvatarProps> = ({ onClick, size = 'medium' }) => {
  let sizeClasses = '';

  switch (size) {
    case 'small':
      sizeClasses = 'w-12 h-12'; // 64px
      break;
    case 'medium':
      sizeClasses = 'w-24 h-24'; // 96px
      break;
    case 'large':
      sizeClasses = 'w-32 h-32'; // 128px
      break;
    default:
      sizeClasses = 'w-32 h-32'; // Varsayılan olarak medium boyut
  }

  return (
    <div
      className={`cursor-pointer flex justify-center items-center ${sizeClasses}`}
      onClick={onClick}
    >
      <div className={`rounded-full overflow-hidden ${sizeClasses}`}>
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
