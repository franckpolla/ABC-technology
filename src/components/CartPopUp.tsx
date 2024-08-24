"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

function CartPopUp({ handleClose, show }: any) {
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const showHideClassName = show ? "translate-x-0" : "translate-x-full";

  useEffect(() => {
    const updateCartData = () => {
      // we getting the array of cart items from the local storage
      const storedCartItems =
        JSON.parse(localStorage.getItem("CartItems") as string) || [];
      setCartItems(storedCartItems);

      let quantity = storedCartItems.length;
      let cost = storedCartItems.reduce(
        (total: number, item: any) => total + item.price,
        0
      );

      setTotalQuantity(quantity);
      setTotalCost(cost);
    };

    updateCartData();
    // every 3s it update the total
    const interval = setInterval(updateCartData, 3000);

    return () => clearInterval(interval);
  }, []);
  // if we remove an item from the cart then we update the local storage
  const removeItem = (index: number) => {
    const updatedItems = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedItems);
    localStorage.setItem("CartItems", JSON.stringify(updatedItems));

    // Recalculate total quantity and cost
    setTotalQuantity(updatedItems.length);
    setTotalCost(
      updatedItems.reduce((total: number, item: any) => total + item.price, 0)
    );
  };

  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${showHideClassName}`}
    >
      <div className="flex items-center justify-between p-4 border-b">
        <h6 className="text-lg font-medium">Your Cart ({totalQuantity})</h6>
        <button
          onClick={handleClose}
          className="text-gray-500 hover:text-gray-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <ul className="overflow-y-auto h-[calc(100%-200px)]">
        {cartItems.map((item: any, index) => (
          <li key={index} className="flex items-center p-4 border-b">
            <div className="w-20 h-20 flex-shrink-0">
              <Image
                width={60}
                height={60}
                src={item.productImage}
                alt={item.productTitle}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="ml-4 flex-grow">
              <h3 className="text-sm font-medium">{item.productTitle}</h3>
              <span className="text-sm text-gray-500">
                Unit Price: ${Number(item.price).toFixed(2)}
              </span>
            </div>
            <button
              onClick={() => removeItem(index)}
              className="text-red-500 hover:text-red-700 ml-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </li>
        ))}
      </ul>
      <div className="absolute bottom-0 left-0 right-0 bg-gray-100 p-4">
        <div className="flex justify-between items-center mb-4">
          <span className="text-lg font-medium">Subtotal:</span>
          <span className="text-lg font-bold">${totalCost.toFixed(2)}</span>
        </div>
        <div className="flex flex-col space-y-2">
          <Link
            href="/Cart"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300 text-center"
            onClick={handleClose}
          >
            View Cart
          </Link>
          <Link
            href="/Checkout"
            className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300 text-center"
            onClick={handleClose}
          >
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CartPopUp;
