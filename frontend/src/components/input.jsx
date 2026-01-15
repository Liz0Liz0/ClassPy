import React from 'react';

const Input = ({ label, type, value, onChange, placeholder }) => {
  return (
    <div className="mb-6">
      <label className="block text-gray-700 font-semibold mb-1">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
         className="
          w-full
          px-4 py-3
          border border-blue-300
          rounded-xl
          focus:outline-none
          focus:ring-2 focus:ring-blue-400
          focus:border-blue-500
          placeholder-gray-400
          shadow-sm
          transition
          duration-200
          hover:border-blue-300
        "
      />
    </div>
  );
};

export default Input;
