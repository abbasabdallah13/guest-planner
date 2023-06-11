import React from "react";

const GetStartedButton = ({extraClassNames, setRegisterForm}) => {
  return (
    <button 
        className={`${extraClassNames} border-none irish-grover text-white bg-[#EA2b48] rounded-xl py-2 px-4 uppercase text-lg cursor-pointer hover:bg-[#FFAEAE] hover:text-white duration-300`} 
        onClick={() => setRegisterForm(true)}
    >
       Get Started
    </button>
  )
};

export default GetStartedButton;
