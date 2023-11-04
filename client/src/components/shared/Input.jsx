/* eslint-disable react/prop-types */

const Input = ({ type, label, value, onChange }) => {
  return (
    <div className="w-full flex flex-col items-center">
      <label className="text-xl w-full">{label}</label>
      <input
        className="bg-slate-50 w-full p-2 rounded border border-slate-100 text-xl"
        type={type || "text"}
        required
        onChange={(e) => {
          onChange(e.target.value);
        }}
        value={value}
      />
    </div>
  );
};

export default Input;
