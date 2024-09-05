import React from "react";

const NewBtn = ({ label, icon, scale, rounded, bgRed, iconURL }) => {
 

  return (
    <div className="flex" >
      <button
        className={`border items-center w-full gap-2 flex justify-center border-red-400 shadow-xl px-5 py-3 text-lg font-semibold text-red-600 ml-auto mr-auto  uppercase font-palanquin ${
          scale
            ? "hover:scale-[1.02] transition-transform duration-500"
            : "hover:bg-slate-50 duration-200"
        }   max-sm:justify-center  max-md:justify-center max-lg:justify-center max-xl:justify-center ${
          rounded
            ? "rounded-full leading-normal px-8 py-2 mt-[2rem]"
            : "rounded-xl mt-3"
        } ${bgRed ? "bgRed" : ""}`}
      >
        {label}
        <div className="text-3xl">
          {icon}
          {iconURL ? (
            <img className="ml-2 rounded-full w-5 h-5" src={iconURL} alt="" />
          ) : (
            ""
          )}
        </div>
      </button>
    </div>
  );
};

export default NewBtn;