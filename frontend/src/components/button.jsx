import React from 'react';

const Button = ({ children, onClick, type = 'button', className = '' }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className=  {`
        w-full
        py-3
        rounded-xl
        bg-green-600
        text-white
        font-bold
        shadow-md
        hover:bg-green-700
        hover:shadow-lg
        active:ring-2 active:ring-green-300
        transition-all
        duration-200
        focus:outline-none
        focus:ring-2 focus:ring-green-400
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;
