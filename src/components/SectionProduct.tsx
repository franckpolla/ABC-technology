import React from "react";
import Image from "next/image";
import Product1 from "@/_assert/pexels-atypeek-5966513.jpg";
import "./product.css";
import Product from "./product";
const SectionProduct = () => {
  return (
    <section className="product_section layout_padding">
      <div className="container">
        <div className="text-5xl mb-10 heading_container heading_center">
          <h2>
            What we <span className="text-blue-500 ">Offer</span>
          </h2>
        </div>
        <div className="row flex flex-wrap ">
          <Product
            productTitle="HiLook 3Mp"
            Price="40$ "
            productImage={Product1}
          />
          <Product
            productTitle="HiLook 3Mp"
            Price="40$ "
            productImage={Product1}
          />
          <Product
            productTitle="HiLook 3Mp"
            Price="40$ "
            productImage={Product1}
          />
          <Product
            productTitle="HiLook 3Mp"
            Price="40$ "
            productImage={Product1}
          />
          <Product
            productTitle="HiLook 3Mp"
            Price="40$ "
            productImage={Product1}
          />
          <Product
            productTitle="HiLook 3Mp"
            Price="40$ "
            productImage={Product1}
          />
          <Product
            productTitle="HiLook 3Mp"
            Price="40$ "
            productImage={Product1}
          />
          <Product
            productTitle="HiLook 3Mp"
            Price="40$ "
            productImage={Product1}
          />
          <Product
            productTitle="HiLook 3Mp"
            Price="40$ "
            productImage={Product1}
          />
          <Product
            productTitle="HiLook 3Mp"
            Price="40$ "
            productImage={Product1}
          />
          <Product
            productTitle="HiLook 3Mp"
            Price="40$ "
            productImage={Product1}
          />
        </div>
      </div>
    </section>
  );
};

export default SectionProduct;
