import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaTwitch,
} from "react-icons/fa";
import Logo from "../_assert/ABC.png";
import Image from "next/image";
import Link from "next/link";

const sections = [
  {
    title: "Contacts",
    items: ["+90-533-836-5434", "+237-654-544-542", "fpolla@gmail.com"],
  },
  {
    title: "Support",
    items: ["Pricing", "Documentation", "Guides", "API Status"],
  },
  {
    title: "Company",
    items: ["About", "Blog", "Jobs", "Press", "Partners"],
  },
  {
    title: "Legal",
    items: ["Claims", "Privacy", "Terms", "Policies", "Conditions"],
  },
];

const items = [
  { name: "Facebook", icon: FaFacebook, link: "https://www.facebook.com/" },
  { name: "Instagram", icon: FaInstagram, link: "https://www.instagram.com/" },
  { name: "Twitter", icon: FaTwitter, link: "https://twitter.com/" },
  { name: "Twitch", icon: FaTwitch, link: "https://www.twitch.tv/" },
  { name: "Github", icon: FaGithub, link: "https://github.com/franckpolla" },
];

const Footer = () => {
  return (
    <div className="w-full mt-24 bg-white-900 text-cyan-800 py-y px-2">
      <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8">
        <div className="col-span-2 pt-8 md:pt-2">
          <Image src={Logo} width={150} height={124} alt="Logo" />
        </div>
        {sections.map((section, index) => (
          <div key={index}>
            <h6 className="font-bold uppercase text-blue-900 pt-2">
              {section.title}
            </h6>
            <ul>
              {section.items.map((item, i) => (
                <li key={i} className="py-1 text-gray-500 hover:text-sky-500">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500">
        <p className="py-4">2024 FranckPolla, LLC. All rights reserved</p>
        <div className="flex justify-between sm:w-[300px] pt-4 text-2xl">
          {items.map((x, index) => {
            return (
              <Link href={x.link}>
                <x.icon key={index} className="hover:text-sky-500" />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
