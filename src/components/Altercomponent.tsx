import { RocketIcon } from "@radix-ui/react-icons";
import React from "react";

function AddedProductPopUp({ isOpen, title }: any) {
  return (
    <>
      {isOpen && (
        <div
          className=" flex justify-center items-center text-center"
          style={{
            position: "fixed",
            top: "200px",
            right: "550px",
            width: "400px",
            zIndex: "999",
          }}
        >
          <div className="electio-notifications-area">
            <div
              className="toast electio-notification bg-green-500 border-0 rounded-lg w-100 fade hide"
              role="alert"
              aria-live="assertive"
              aria-atomic="true"
              style={{
                opacity: "100",
                display: "flex",
                justifyItems: "center",
                alignItems: "center",
                color: "white",
                transition: "opacity 0.3s ease-in-out",
                flexDirection: "column",
              }}
            >
              <div className="flex justify-center items-center text-center">
                <RocketIcon className="h-4 w-4 text-center" />
                <strong className="mr-auto p-3">{title}</strong>
              </div>
              <div className="p-2">
                has been added the item to your shopping cart!
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AddedProductPopUp;
