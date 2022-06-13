import React from "react";
import Logo from "../img/molten-logo.png";

const Header = () => {
  return (
    <>
      <div className="w-full bg-green-700 lg:h-60 sm:h-36 flex shadow-2xl justify-center header">
        <div className="my-auto flex flex-row">
          <img src={Logo} alt="molten" className="w-20" />
          <div className="my-auto">
            <h1 className="font-extrabold text-amber-300 sm:text-5xl lg:text-7xl xl:text-8xl 2xl:text-9xl drop-shadow-lg ">
              Molten Football Club
            </h1>
            <h1 className="drop-shadow-lg text-white text-lg heater-text lg:text-2xl ">
              Welcome to the{" "}
              <span className="font-bold text-gray-900">Official</span> website
              of the{" "}
              <span className="italic font-mono text-xl text-gray-900 font-bold">
                HEATERS
              </span>{" "}
            </h1>
          </div>
          <img src={Logo} alt="molten" className="w-20 " />
        </div>
      </div>
    </>
  );
};

export default Header;
