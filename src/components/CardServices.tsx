import React from "react";
const CardServices = ({ serviceTitle, icon, description }: any) => {
  return (
    <div className="flex  justify-center rounded-lg items-center overflow-hidden  p-4">
      <div className=" flex flex-col border bg-cyan-800 sm:h-96 sm:w-96 h-54 w-54 p-4 rounded-lg justify-center items-center text-white sm:p-12">
        {icon}
        <h3 className=" md:text-3xl text-center font-bold pb-4">
          {serviceTitle}
        </h3>
        <p className="text-gray-400 flex w-72 sm:w-auto"> {description}</p>
      </div>
    </div>
  );
};

export default CardServices;
