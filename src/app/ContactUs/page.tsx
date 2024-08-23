"use client";

import { Calendar } from "@/components/ui/calendar";
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const page = () => {
  return (
    <div className=" w-full">
      <div className="w-auto flex justify-center mb-20 items-center ">
        <form
          action=""
          className="bg-gray-600 lg:min-w-[450px]  w-auto p-10 rounded-2xl"
        >
          <h1 className="text-2xl font-bold text-white">
            Get In touch with Us
          </h1>
          <div className="p-4 text-white">
            <Label htmlFor="email">Your email address</Label>

            <Input type="email" className="text-white" placeholder="Email" />
          </div>
          <div className="p-4 text-white">
            <Label htmlFor="email">Your Name</Label>

            <Input type="name" placeholder="Name" />
          </div>
          <div className="p-4 text-white">
            <Textarea />
          </div>

          <Button
            className="bg-cyan-600"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            Submit
          </Button>
        </form>
      </div>
      <div className="hidden  lg:flex float-right px-4  mb-20">
        <Calendar className="bg-cyan-800 text-white" />
      </div>
    </div>
  );
};

export default page;
