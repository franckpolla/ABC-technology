"use client";

import { Calendar } from "@/components/ui/calendar";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const page = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className=" w-full">
      <div className="w-auto flex justify-center mb-20 items-center ">
        <form
          action="#"
          className="bg-cyan-800 lg:min-w-[450px]  w-96 p-10 rounded-2xl"
        >
          <h1 className="text-2xl font-bold text-white">
            Get In touch with Us
          </h1>
          <div className="p-4 text-white">
            <Label htmlFor="email">Your email address</Label>

            <Input
              type="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="text-white"
              placeholder="Email"
            />
          </div>
          <div className="p-4 text-white">
            <Label htmlFor="name">Your Name</Label>

            <Input
              id="name"
              type="name"
              required
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="p-4 text-white">
            <Label htmlFor="message" className="text-white">
              Your Message
            </Label>
            <Textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              placeholder="Send us a message"
            />
          </div>

          <Button
            type="submit"
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="bg-cyan-600"
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
