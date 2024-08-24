"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { RocketIcon } from "@radix-ui/react-icons";
import AddedProductPopUp from "./Altercomponent";

import { useToast } from "@/components/ui/use-toast";
type Product = {
  productTitle: string;
  productImage: string;
  price: number;
};

function Product({ productTitle, productImage, price }: Product) {
  const [item, setItem] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (item) {
      setItem(false);
    }
  }, [item]);

  const HandleClick = () => {
    const newItem = { productTitle, productImage, price };
    const existingItems = JSON.parse(localStorage.getItem("CartItems") || "[]");
    const updatedItems = [...existingItems, newItem];
    localStorage.setItem("CartItems", JSON.stringify(updatedItems));
    setItem(true);
    setIsOpen(true);
    console.log(updatedItems);
  };
  useEffect(() => {
    if (isOpen) {
      const timeout = setTimeout(() => {
        setIsOpen(false);
      }, 3000); // Adjust this value to control how long the popup stays visible

      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  return (
    <div className="w-full flex justify-center items-center min-w-64  sm:w-1/2 md:w-full lg:w-1/4">
      <div className="box  w-72 max-w-72 h-96 max-h-96 m-1 ">
        <div className="option_container">
          <div className="options">
            <Button className="option2" onClick={HandleClick}>
              Add To Cart
            </Button>
          </div>
        </div>

        <div className="img-box">
          <Image
            src={productImage}
            width={160}
            height={140}
            alt="cctv camera"
          />
        </div>
        <div className="detail-box">
          <h5>{productTitle}</h5>
          <h6>{price} $</h6>
        </div>
        <AddedProductPopUp isOpen={isOpen} title={productTitle} />
      </div>
    </div>
  );
}

export default Product;
