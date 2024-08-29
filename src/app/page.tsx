"use client";

import Image from "next/image";
import BgImage from "../_assert/pexels-burst-374103.jpg";
import { Button } from "@/components/ui/button";
import SectionProduct from "@/components/SectionProduct";
import OurServices from "@/components/OurServices";
import OurWebsites from "@/components/OurWebsites";
import Example from "@/components/NewsLetter";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebaseConfig";
import { useRouter } from "next/navigation";
import LoadingPage from "./loading";
import { useEffect, useState } from "react";
import Link from "next/link";

// if the user is logged in , we will display the home page with all the components else we will display a login page
export default function Home() {
  // here we are checking if the user is logged in , if not we send send him to the loggin page
  const [user] = useAuthState(auth);
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  const [userSession, setUserSession] = useState(false);
  // const userSession = sessionStorage.getItem("user");

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    setUserSession(sessionStorage.getItem("user") !== null);
  }, []);

  console.log(user);
  if (!user && !userSession) {
    router.push("/SignUp");
  }

  if (loading) {
    return <LoadingPage />;
  }

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
        <div className=" flex items-center relative z-10 overflow-hidden">
          <div className=" mt-32 text-white  mx-4 md:mx-20">
            <h1 className="font-serif text-6xl   ">
              welcome to <br />
              <span className="text-blue-400 animate-pulse mx-2  text-8xl font-semibold">
                ABC
              </span>
              Technology
            </h1>
            <p className=" mt-5 text-gray-200 font-sans text-xl w-[250px] lg:w-[650px]">
              we empower your world—whether it's securing your space with our
              advanced CCTV systems or bringing your digital vision to life with
              innovative web development.
            </p>

            <div className="mx-10 mt-10">
              <Link href="/Product" passHref>
                <Button className="w-72 h-14 text-xl text-white bg-cyan-600">
                  Get started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div>
        <OurServices />
        <SectionProduct />
        <OurWebsites />
      </div>
      <Example />
    </main>
  );
}
