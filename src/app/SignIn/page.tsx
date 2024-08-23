import React from "react";
import Image from "next/image";
import Lady from "@/_assert/africanLady.jpg";
import SignInForm from "@/components/SignInForm";

const page = () => {
  return (
    <div className="w-full flex justify-center items-center overflow-hidden p-3">
      <div className="w-full flex flex-col lg:flex-row  h-screen  overflow-hiddenjustify-center items-center">
        <div className=" w:full overflow-hidden lg:w-1/2">
          <SignInForm />
        </div>
        <div className="hidden lg:flex w-2/3">
          <Image
            src={Lady}
            alt="sign up image"
            width={850}
            height={100}
            className=" rounded-s-full"
          />
        </div>
      </div>
    </div>
  );
};

export default page;
