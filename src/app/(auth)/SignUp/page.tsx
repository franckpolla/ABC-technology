import SignUpForm from "@/components/SignUpForm";
import React from "react";
import Image from "next/image";
import Lady from "@/_assert/africanLady.jpg";

const page = () => {
  return (
    <div className="w-full flex justify-center items-center overflow-hidden">
      <div className="w-full flex flex-col lg:flex-row h-screen overflow-hiddenjustify-center items-center">
        <div className="hidden lg:flex w-2/3">
          <Image
            src={Lady}
            alt="sign up image"
            width={850}
            height={100}
            className=" rounded-e-full"
          />
        </div>
        <div className=" w:full overflow-hidden lg:w-1/2">
          <SignUpForm />
        </div>
      </div>
    </div>
  );
};

export default page;
