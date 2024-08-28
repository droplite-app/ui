import PropTypes from "prop-types";

interface TextInputProps {
  label: string;
  type: string;
  placeholder: string;
}

const TextInput: React.FC<TextInputProps> = ({ label, type, placeholder }) => {
  return (
    <div className="mb-6">
      <label className="block text-sky-700 text-sm font-bold mb-2">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-sky-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
  );
};

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default TextInput;
