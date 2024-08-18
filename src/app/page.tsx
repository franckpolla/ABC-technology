import Image from "next/image";
import BgImage from "../_assert/pexels-burst-374103.jpg";
import { Button } from "@/components/ui/button";
import SectionProduct from "@/components/SectionProduct";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <div className="relative w-full h-screen mb-10">
        <Image
          src={BgImage}
          layout="fill"
          objectFit="cover"
          quality={100}
          alt="camera img"
        />
        <div className=" flex items-center relative z-10">
          <div className=" mt-32 text-white mx-20">
            <h1 className="font-serif text-6xl  ">
              welcome to <br />
              <span className="text-blue-400 animate-pulse mx-2  text-8xl font-semibold">
                ABC
              </span>
              Technology
            </h1>
            <p className=" mt-5 text-gray-200 font-sans text-xl max-w-[650px]">
              we empower your world—whether it's securing your space with our
              advanced CCTV systems or bringing your digital vision to life with
              innovative web development.
            </p>

            <div className="mx-10 mt-10">
              <Button
                className="w-72 h-14 text-xl  text-white  bg-cyan-600"
                variant="secondary"
              >
                Get started
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <SectionProduct />
      </div>
    </main>
  );
}
