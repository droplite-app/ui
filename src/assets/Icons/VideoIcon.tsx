import React from "react";

interface IconProps {
  className?: string;
}

const VideoIcon: React.FC<IconProps> = ({ className }) => {
  return (
    <svg
      width="46"
      height="32"
      viewBox="0 0 46 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className} // className prop'u buraya iletiliyor
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.25 0.25C5.45979 0.25 3.7429 0.961159 2.47703 2.22703C1.21116 3.4929 0.5 5.20979 0.5 7V25C0.5 26.7902 1.21116 28.5071 2.47703 29.773C3.7429 31.0388 5.45979 31.75 7.25 31.75H29.75C31.5402 31.75 33.2571 31.0388 34.523 29.773C35.7888 28.5071 36.5 26.7902 36.5 25V21.4315L41.6592 26.5908C41.9739 26.9053 42.3748 27.1195 42.8112 27.2063C43.2476 27.2931 43.6999 27.2485 44.111 27.0783C44.522 26.908 44.8734 26.6197 45.1207 26.2498C45.3679 25.8799 45.4999 25.4449 45.5 25V7C45.4999 6.55506 45.3679 6.12014 45.1207 5.75022C44.8734 5.3803 44.522 5.09198 44.111 4.92172C43.6999 4.75147 43.2476 4.70691 42.8112 4.79369C42.3748 4.88046 41.9739 5.09468 41.6592 5.40925L36.5 10.5685V7C36.5 5.20979 35.7888 3.4929 34.523 2.22703C33.2571 0.961159 31.5402 0.25 29.75 0.25H7.25Z"
        fill="#C084FC"
      />
    </svg>
  );
};

export default VideoIcon;
