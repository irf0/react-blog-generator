import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="h-16 bg-blue-500 items-center flex flex-col">
        <h1
          style={{ fontFamily: "Carter One" }}
          className="text-3xl ml-4 text-white"
        >
          BlogGen.ai
        </h1>
        <p className="-mt-2 ml-12 italic text-gray-200">
          generate any blog instantly!
        </p>
      </div>
    </div>
  );
};

export default Navbar;
