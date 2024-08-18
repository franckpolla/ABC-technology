import React from "react";
import Image from "next/image";
import Link from "next/link";
function product({ productTitle, productImage, Price }: any) {
  return (
    <div className="min-w-64  sm:w-1/2 md:w-1/3 lg:w-1/4">
      <div className="box">
        <div className="option_container">
          <div className="options">
            <Link href="" className="option2 ">
              Add To Cart
            </Link>
          </div>
        </div>
        <div className="img-box">
          <Image src={productImage} alt="cctv camera" />
        </div>
        <div className="detail-box">
          <h5>{productTitle}</h5>
          <h6>{Price}</h6>
        </div>
      </div>
    </div>
  );
}

export default product;
