import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-row text-gray-700 justify-center items-center fixed bottom-0">
      Made by
      <span className="m-1 font-satoshi font-medium text-black">MMR</span>
      with
      <div className=" flex flex-row justify-center items-center gap-2 m-2">
        <a href="http://react.dev" target="_blank" rel="noopener noreferrer">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
            alt="react"
            width={25}
            height={25}
          />
        </a>

        <a
          href="https://tailwindcss.com/docs"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
            alt="tailwind css"
            width={25}
            height={25}
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
