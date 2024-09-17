import Product from "@/components/product";
import { ProductList } from "@/components/productArray";
import { HandRaisedIcon } from "@heroicons/react/24/outline";
import CalendarDaysIcon from "@heroicons/react/24/outline/CalendarDaysIcon";
import Link from "next/link";
import React from "react";
import { FaSquareWebAwesome } from "react-icons/fa6";
import "@/components/product.css";
import Image from "next/image";

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex mb-28 bg-cyan-700 w-full p-4 justify-center items-center">
        <h1 className="text-7xl text-white"> Product Grid </h1>
      </div>
      <section className="product_section layout_padding ">
        <div className="container">
          <div className="row flex flex-wrap justify-center items-center ">
            {ProductList.map((product, index) => {
              return (
                <Product
                  key={index}
                  productTitle={product.name}
                  price={product.price}
                  productImage={product.image}
                />
              );
            })}
          </div>
        </div>
      </section>

      <div className="relative isolate bg-sky-900 w-full  overflow-hidden p:4 sm:py-8  mt-24 mb-16">
        <div className="mx-auto max-w-full px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:w-full ">
            <div className="max-w-2xl lg:w-full">
              <div className="flex justify-between items-center">
                <FaSquareWebAwesome className="w-16 text-white h-16  md:w-24 md:h-24" />
                <h2 className=" p-4 text-3xl w-full font-bold tracking-tight text-white sm:text-4xl">
                  Website and mobile App development
                </h2>
              </div>
              <p className="mt-4 text-lg leading-8 text-gray-300">
                In today &apos;s digital age, having a strong online presence is
                essential for success. Whether you&apos;re looking to create a
                dynamic website or a seamless mobile app, our development
                services are designed to bring your vision to life. We build
                websites according to the unique demands of each customer,
                ensuring that every project is tailored to meet specific needs
                and objectives. By blending innovative design with cutting-edge
                technology, we deliver solutions that not only look great but
                also perform exceptionally. Our team is committed to crafting
                user-friendly experiences that keep your audience engaged and
                coming back for more. Let us help you transform your ideas into
                powerful digital platforms.
              </p>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          />
        </div>
      </div>
      <Website />
    </div>
  );
};

export default page;

const Website = () => {
  return (
    <div className="w-full flex justify-center items-center min-w-64 ">
      <div className=" w-full m-16 ">
        <div className="flex w-full justify-center items-center">
          <h2 className="text-4xl text-center flex justify-center items-center  lg:text-6xl pb-8">
            See the websites
          </h2>
        </div>

        <div className="flex flex-col  justify-center items-center gap-4">
          <div className="img-box ">
            <Link
              href="https://halodental.com/halo-digital-mirror"
              target="_blank"
              rel="noopener noreferrer"
              passHref
            >
              <Image
                src="https://assets.awwwards.com/awards/submissions/2024/08/66ba2e7254cbd563504115.jpg" // Replace with the actual image URL from the page
                alt="Halo Digital Mirror"
                width={1000} // Adjust the width as needed
                height={600} // Adjust the height as needed
                className="cursor-pointer"
              />
            </Link>
          </div>
          <div className="img-box ">
            <Link
              href="https://burek.intexagency.com/en/"
              target="_blank"
              rel="noopener noreferrer"
              passHref
            >
              <Image
                src="https://assets.awwwards.com/awards/submissions/2024/07/668d105bf206f554415480.jpg" // Replace with the actual image URL from the page
                alt="Halo Digital Mirror"
                width={1000} // Adjust the width as needed
                height={600} // Adjust the height as needed
                className="cursor-pointer"
              />
            </Link>
          </div>
          <div className="img-box ">
            <Link
              href="https://www.leflairstudios.com/"
              target="_blank"
              rel="noopener noreferrer"
              passHref
            >
              <Image
                src="https://assets.awwwards.com/awards/submissions/2024/08/66b6a5537b750204689273.jpg" // Replace with the actual image URL from the page
                alt="Halo Digital Mirror"
                width={1000} // Adjust the width as needed
                height={600} // Adjust the height as needed
                className="cursor-pointer"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
