import React from "react";
import Image from "next/image";
import "./responsive.css";
// import Product1 from "@/_assert/pexels-atypeek-5966513.jpg";
import "./product.css";
import Product from "./product";
import { ProductList } from "./productArray";
import Link from "next/link";
const SectionProduct = () => {
  return (
    <section className="product_section layout_padding">
      <div className="container">
        <div className="text-5xl mb-10 heading_container heading_center">
          <h2>
            Our <span className="text-blue-500 ">CCTV</span> Products
          </h2>
        </div>
        <div className="row flex flex-wrap ">
          {ProductList.map((product) => {
            return (
              <Product
                key={product.id}
                productTitle={product.name}
                Price={product.price}
                productImage={product.image}
              />
            );
          })}
        </div>
        <Link
          href=""
          className="flex center justify-center underline text-2xl items-center mt-10"
        >
          See More{" "}
        </Link>
      </div>
    </section>
  );
};

export default SectionProduct;
