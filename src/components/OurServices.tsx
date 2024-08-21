import React from "react";
import CardServices from "./CardServices";
import { FaSquareWebAwesome } from "react-icons/fa6";
import { BiSolidCctv } from "react-icons/bi";
import { GrHostMaintenance } from "react-icons/gr";
const OurServices = () => {
  return (
    <section>
      <h2 className="text-4xl font-bold md:text-6xl text-center pb-10">
        What we <span className="text-blue-500 ">Offer</span>
      </h2>
      <div className="flex flex-col items-center justify-center lg:flex-row lg:flex-wrap">
        <CardServices
          serviceTitle="Web App development"
          icon={<FaSquareWebAwesome className="w-16 h-16  md:w-24 md:h-24" />}
          description="we build the right software for your business."
        />
        <CardServices
          serviceTitle="CCTV Materials"
          icon={<BiSolidCctv className="w-16 h-16    md:w-24 md:h-24" />}
          description="Providing top-quality CCTV products to secure your premises."
        />
        <CardServices
          serviceTitle="Maintenance and installation of product"
          icon={<GrHostMaintenance className="w-16 h-16    md:w-24 md:h-24" />}
          description="Expert installation and maintenance services for all your products(Websites or CCtv)."
        />
      </div>
    </section>
  );
};

export default OurServices;
