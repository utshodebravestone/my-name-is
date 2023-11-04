/* eslint-disable react/prop-types */

const Button = ({ label, onClick }) => {
  return (
    <button
      className="py-3 w-full text-center text-xl font-bold bg-blue-500 text-white hover:bg-transparent hover:text-blue-500 transition-colors duration-200 rounded border border-blue-500"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
