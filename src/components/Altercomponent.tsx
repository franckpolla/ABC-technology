import { RocketIcon } from "@radix-ui/react-icons";
import React from "react";

function AddedProductPopUp({ isOpen, title }: any) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-green-500 text-white rounded-lg shadow-lg max-w-sm w-full mx-4">
        <div className="p-4">
          <div className="flex items-center justify-center mb-2">
            <RocketIcon className="h-6 w-6 mr-2" />
            <strong className="text-lg">{title}</strong>
          </div>
          <p className="text-center">has been added to your shopping cart!</p>
        </div>
      </div>
    </div>
  );
}

export default AddedProductPopUp;
