"use client";
import { useState, useRef, useEffect } from "react";
import React from "react";
import {
  PaperAirplaneIcon,
  MoonIcon,
  SunIcon,
  Bars3Icon,
  XMarkIcon,
  UserCircleIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";

import Link from "next/link";

import Image from "next/image";
import Logo from "../_assert/ABC.png";
import { usePathname } from "next/navigation";
import { DropdownMenuDemo } from "./DropDownMenu";
import { Button } from "./ui/button";
import CartPopUp from "./CartPopUp";

const NavigationLink = ({ href, children }: any) => {
  const router = usePathname();

  const isActive = router === href;
  return (
    <div>
      <Link
        href={href}
        className={
          isActive
            ? "text-xl text-blue-500 font-bold"
            : "text-xl text-blue-500 hover:font-bold"
        }
      >
        {children}
      </Link>
    </div>
  );
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [showCartPopUp, setShowCartPopUp] = useState(false);
  const menuRef = useRef(null);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  // to close the mobile menu when the user clicks on the navigation bar or somewhere else on the screen
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setToggleMenu(false); // Close the menu when clicking outside
      }
    };

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  // useEffect(() => {
  //   setIsUserLoggedIn(sessionStorage.getItem("user") !== null);
  // }, []);

  useEffect(() => {
    const checkUserLoggedIn = () => {
      const user = sessionStorage.getItem("user");
      setIsUserLoggedIn(user !== null);
    };

    checkUserLoggedIn();

    // Add an interval to check periodically
    const interval = setInterval(checkUserLoggedIn, 1000);
    // Add an event listener for storage changes
    window.addEventListener("storage", checkUserLoggedIn);

    return () => {
      window.removeEventListener("storage", checkUserLoggedIn);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="app">
      <nav>
        <div className="max-w-7xl mx-auto">
          <div className="flex mx-auto justify-between px-14">
            {/* Primary menu and logo */}
            <div className="flex items-center gap-x-32 justify-evenly w-full ">
              {/* logo */}
              <div>
                <Link
                  href="/"
                  className="flex font-bold text-gray-700 items-center "
                >
                  <Image src={Logo} alt="ABC logo" width={140} height={60} />
                </Link>
              </div>
              {/* primary */}
              <div className="hidden lg:flex  gap-8 px-16 ">
                <NavigationLink href="/">Home</NavigationLink>
                <NavigationLink href="/Product">Product</NavigationLink>
                <NavigationLink href="/ContactUs">Contact us</NavigationLink>
              </div>
              <div className="hidden lg:flex gap-4">
                <Link href="#">
                  <DropdownMenuDemo />
                </Link>
                <Button
                  className="bg-neutral-50 border-none hover:bg-gray-100 "
                  onClick={() => setShowCartPopUp(true)}
                >
                  <ShoppingCartIcon className="h-8 w-8 text-gray-500" />
                </Button>
              </div>
            </div>
            {/* secondary */}
            <div className="flex gap-6">
              <div className="hidden xs:flex items-center gap-10">
                <div className="hidden lg:flex items-center gap-2">
                  <MoonIcon className="h-6 w-6" />
                  <SunIcon className="h-6 w-6" />
                </div>
                <div>
                  <button className="rounded-full border-solid border-2 border-gray-300 py-2 px-4 hover:bg-gray-700 hover:text-gray-100">
                    Free Trial
                  </button>
                </div>
              </div>
              {/* Mobile navigation toggle */}
              <div className="lg:hidden flex justify-center mx-10  items-center">
                <button onClick={() => setToggleMenu(!toggleMenu)}>
                  <Bars3Icon className="h-10" />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* mobile navigation */}
        <div
          ref={menuRef}
          className={`fixed z-20 w-full  bg-gray-100 overflow-hidden flex flex-col lg:hidden gap-12  origin-top duration-700 ${
            !toggleMenu ? "h-0" : "h-96"
          }`}
        >
          <div className="px-8">
            <div className="flex mb-8 flex-col gap-8 font-bold tracking-wider">
              <Link
                href="/"
                className="hover:border-l-4 hover: border-gray-600"
              >
                Home
              </Link>
              <Link
                href="/Product"
                className="hover:border-l-4 hover: border-gray-600"
              >
                Products
              </Link>

              <Link
                href="/ContactUs"
                className="hover:border-l-4 hover: border-gray-600"
              >
                Contact us
              </Link>
            </div>
            <div className="flex flex-col  justify-center gap-4">
              <Link href="#">
                <DropdownMenuDemo />
              </Link>
              {isUserLoggedIn ? (
                <Link
                  href="/Cart"
                  className="bg-neutral-50 rounded-sm w-16 hover:bg-gray-100 "
                >
                  <ShoppingCartIcon className="h-8 w-8 mx-4 text-gray-500" />
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      </nav>
      {showCartPopUp && isUserLoggedIn && (
        <CartPopUp
          show={showCartPopUp}
          handleClose={() => setShowCartPopUp(false)}
        />
      )}
    </div>
  );
};

export default Navbar;
