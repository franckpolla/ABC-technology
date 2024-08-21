import React from "react";
import { CarouselSize } from "./Slider";

const OurServices = () => {
  return (
    <section>
      <h2 className="text-4xl font-bold md:text-6xl text-center pb-10">
        Our <span className="text-blue-500 ">Websites</span>
      </h2>
      <div className="flex flex-col items-center justify-center lg:flex-row lg:flex-wrap">
        <CarouselSize />
      </div>
    </section>
  );
};

export default OurServices;
