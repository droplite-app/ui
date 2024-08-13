import PropTypes from "prop-types";

interface ButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
const Button: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-sky-900 text-white font-bold py-2 px-4 rounded hover:bg-sky-800 transition duration-300"
    >
      Login
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
};

export default Button;
