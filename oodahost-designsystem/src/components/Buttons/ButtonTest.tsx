import React from "react";

export const ButtonTest = () => {
  return (
    <button
      className="
        px-4 py-2 
        bg-primary-400 text-black 
        rounded-full 
        focus:outline-none 
        focus:ring-2 
        focus:ring-offset-2 
        focus:ring-primary-600
        transition-all
      "
      autoFocus
    >
      Botón con focus ring
    </button>
  );
};