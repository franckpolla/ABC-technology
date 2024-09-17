"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { db } from "@/app/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { IoIosThumbsUp } from "react-icons/io";

function CheckOut({ fetchedData }: any) {
  //   const be_base_url = process.env.REACT_APP_BACKEND_BASE_URL;
  const [totalCost, setTotalCost] = useState(0);
  const [orderSent, setOrderSent] = useState(false);
  // const [selectedOption, setSelectedOption] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    company: "",
    region: "",
    city: "",
    street: "",
    apartment: "",
    zipcode: "",
    phone: "",
    mail: "",
    notes: "",
    selectedOption: "",
    amount: "",
  });

  const handleRadioChange = (event: any) => {
    const selectedValue = event.target.value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      selectedOption: selectedValue,
      amount: (totalCost * 1.15).toFixed(2),
    }));
  };
  const handleInputChange = (fieldName: any, value: any) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [fieldName]: value,
    }));
  };

  //   setShowPreFillPopup(false);
  //   if (shouldPreFill) {
  //     setFormData(JSON.parse(localStorage.getItem("formData") as string));
  //   } else {
  //     setFormData({
  //       fname: "",
  //       lname: "",
  //       company: "",
  //       region: "",
  //       city: "",
  //       street: "",
  //       apartment: "",
  //       zipcode: "",
  //       phone: "",
  //       mail: "",
  //       notes: "",
  //       selectedOption: "",
  //       amount: "",
  //     });
  //   }
  // };

  useEffect(() => {
    const storedCartItems =
      JSON.parse(localStorage.getItem("CartItems") as string) || [];
    setCartItems(storedCartItems);

    if (storedCartItems.length === 0) {
      alert("Your cart is empty. Please add items to proceed.");
      window.location.href = "/Product";
      return;
    }

    let cost = 0;
    storedCartItems.forEach((item: any) => {
      cost += item.price;
    });
    setTotalCost(cost);

    const savedFormData = JSON.parse(
      localStorage.getItem("formData") as string
    );
    console.log(savedFormData);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const savedFormData = JSON.parse(
      localStorage.getItem("formData") as string
    );
    const { mail, ...deliveryInfo } = formData;

    const isDeliveryInfoEmpty = Object.entries(deliveryInfo).some(
      ([key, value]) =>
        key !== "notes" && key !== "company" && value.trim() === ""
    );

    if (isDeliveryInfoEmpty) {
      alert("Please fill out all required fields before submitting.");
      return;
    }

    const cartItems =
      JSON.parse(localStorage.getItem("CartItems") as string) || [];

    const orderItems = cartItems.map(({ id, productTitle, price }: any) => ({
      id,
      productTitle,
      price,
    }));

    const orderData = {
      deliveryIformations: deliveryInfo,
      orderItems,
      orderStatus: "Active",
      userEmail: mail,
    };

    // fetch(`${be_base_url}/create-order`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(orderData),
    // })
    //   .then((response) => {
    //     if (!response.ok) {
    //       throw new Error("Network response was not ok");
    //     }
    //     return response.json();
    //   })
    //   .then((data) => {
    //     setOrderSent(true);
    //     setTimeout(() => {
    //       setOrderSent(false);
    //       localStorage.removeItem("cartItems");
    //       window.Location.reload();
    //     }, 3000);
    //   }
    //   .catch((error) => {
    //     console.error("Error creating order:", error);
    //   });

    //
    addDataToFirestore(savedFormData, cartItems);
    storeFormData(deliveryInfo);
  };

  function storeFormData(dataObject: any) {
    localStorage.setItem("formData", JSON.stringify(dataObject));
    // console.log(JSON.parse(localStorage.getItem("formData")));
  }

  // when information is saved prompt wether the user wants to save details for future transaction or not if yes save else don't

  // use a useEffect to see if the user has saved billing infos when the page or component mounts
  // if yes use those infos for billing and hide billing form else show billing form
  // if we have the details we need to ask the user if he wants to use those or update to new details

  const addDataToFirestore = async (orderData: any, cartItems: any[]) => {
    try {
      // Add order to Firestore
      const docRef = await addDoc(collection(db, "orders"), orderData);
      console.log("Order document written with ID: ", docRef.id);
      setOrderSent(true);
      localStorage.removeItem("CartItems");
      setTimeout(() => {
        setOrderSent(false);
        // Consider using React Router or state management instead of reload
        // window.location.reload();
      }, 3000);
    } catch (error: any) {
      console.error(error.message);
    }
  };

  return (
    <>
      {orderSent && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-green-500 text-white rounded-lg shadow-lg max-w-sm w-full mx-4">
            <div className="p-4">
              <div className="flex items-center justify-center mb-2">
                <IoIosThumbsUp />
              </div>
              <p className="text-center">your order has been received </p>
            </div>
          </div>
        </div>
      )}
      <main
        id="primary"
        className="site-main lg:w-full lg:flex justify-center items-center overflow-hidden"
      >
        <article
          id="post-11"
          className="post-11 page type-page status-publish hentry"
        >
          <div className="breadcrumb-section  flex justify-center items-center pt-20 pb-20">
            <div className="container">
              <div className="breadcrumb breadcrumb-text fw-light mb-0">
                <Link
                  href="/"
                  className="breadcrumb-item"
                  data-previewlistener="true"
                >
                  Home
                </Link>
                <span className="bredcrumb-separator"> / </span>{" "}
                <span className="">Checkout</span>
              </div>{" "}
            </div>
          </div>

          <div className="container electio-condensed-container lg:w-full ">
            <div className="post-content electio-default-page-content lg:w-full">
              <div className="woocommerce lg:w-full ">
                <form
                  name="checkout"
                  method="post"
                  className="checkout woocommerce-checkout lg:flex flex-row electio-checkout-main row overflow-hidden"
                  encType="multipart/form-data"
                  noValidate={true}
                  onSubmit={handleSubmit}
                >
                  <div className="pivoo-checkout-left-part lg:px-10 col-12 col-md-8">
                    <div className="col2-set" id="customer_details">
                      <div className="xopic-col-1">
                        <div className="woocommerce-billing-fields">
                          <h3>Billing details</h3>

                          <div className="woocommerce-billing-fields__field-wrapper">
                            <p
                              className="form-row form-row-first validate-required"
                              id="billing_first_name_field"
                              data-priority="10"
                            >
                              <label htmlFor="billing_first_name" className="">
                                First name&nbsp;
                                <abbr className="required" title="required">
                                  *
                                </abbr>
                              </label>
                              <span className="woocommerce-input-wrapper">
                                <input
                                  required
                                  className="input-text "
                                  value={formData.fname}
                                  onChange={(e) =>
                                    handleInputChange("fname", e.target.value)
                                  }
                                  type="text"
                                  id="fname"
                                  name="firstname"
                                />
                              </span>
                            </p>
                            <p
                              className="form-row form-row-last validate-required"
                              id="billing_last_name_field"
                              data-priority="20"
                            >
                              <label htmlFor="billing_last_name" className="">
                                Last name&nbsp;
                                <abbr className="required" title="required">
                                  *
                                </abbr>
                              </label>
                              <span className="woocommerce-input-wrapper">
                                <input
                                  required
                                  className="input-text"
                                  value={formData.lname}
                                  onChange={(e) =>
                                    handleInputChange("lname", e.target.value)
                                  }
                                  type="text"
                                  id="lname"
                                  name="lastname"
                                />
                              </span>
                            </p>
                            <p
                              className="form-row form-row-wide"
                              id="billing_company_field"
                              data-priority="30"
                            >
                              <label htmlFor="billing_company" className="">
                                Company name&nbsp;
                                <span className="optional">(optional)</span>
                              </label>
                              <span className="woocommerce-input-wrapper">
                                <input
                                  required
                                  value={formData.company}
                                  onChange={(e) =>
                                    handleInputChange("company", e.target.value)
                                  }
                                  type="text"
                                  id="cname"
                                  name="companyname"
                                  className="input-text "
                                />
                              </span>
                            </p>
                            <p
                              className="form-row form-row-first validate-required"
                              id="billing_country_field"
                              data-priority="40"
                            >
                              <label htmlFor="billing_country" className="">
                                Region&nbsp;
                                <abbr className="required" title="required">
                                  *
                                </abbr>
                              </label>
                              <span className="woocommerce-input-wrapper">
                                <select
                                  className="country_to_state country_select select2-hidden-accessible"
                                  value={formData.region}
                                  onChange={(e) =>
                                    handleInputChange("region", e.target.value)
                                  }
                                >
                                  <option value="">Select a region…</option>

                                  <option value="Lefkosa">Lefkosa</option>
                                  <option value="Magusa">Magusa</option>
                                  <option value="Girne">Girne</option>
                                  <option value="Lefke">Lefke</option>
                                </select>
                              </span>
                            </p>
                            <p
                              className="form-row form-row-last validate-required"
                              id="billing_last_name_field"
                              data-priority="20"
                            >
                              <label htmlFor="billing_postcode" className="">
                                ZIP Code&nbsp;
                                <abbr className="required" title="required">
                                  *
                                </abbr>
                              </label>
                              <span className="woocommerce-input-wrapper">
                                <input
                                  required
                                  className="input-text "
                                  value={formData.zipcode}
                                  onChange={(e) =>
                                    handleInputChange("zipcode", e.target.value)
                                  }
                                  type="text"
                                  id="zip"
                                  name="zip"
                                />
                              </span>
                            </p>
                            <p
                              className="form-row address-field validate-required form-row-wide"
                              id="billing_address_1_field"
                              data-priority="50"
                            >
                              <label htmlFor="billing_address_1" className="">
                                Street address&nbsp;
                                <abbr className="required" title="required">
                                  *
                                </abbr>
                              </label>
                              <span className="woocommerce-input-wrapper">
                                <input
                                  required
                                  className="input-text "
                                  value={formData.street}
                                  onChange={(e) =>
                                    handleInputChange("street", e.target.value)
                                  }
                                  type="text"
                                  id="adr"
                                  name="address"
                                  placeholder="House number and street name"
                                />
                              </span>
                            </p>
                            <p
                              className="form-row address-field form-row-wide"
                              id="billing_address_2_field"
                              data-priority="60"
                            >
                              <label
                                htmlFor="billing_address_2"
                                className="screen-reader-text"
                              >
                                Apartment, suite, unit, etc.&nbsp;
                                <span className="optional">(optional)</span>
                              </label>
                              <span className="woocommerce-input-wrapper">
                                <input
                                  required
                                  className="input-text "
                                  value={formData.apartment}
                                  onChange={(e) =>
                                    handleInputChange(
                                      "apartment",
                                      e.target.value
                                    )
                                  }
                                  type="text"
                                  id="adr"
                                  name="address"
                                  placeholder="Appartments, suite, etc."
                                />
                              </span>
                            </p>
                            <p
                              className="form-row address-field validate-required form-row-wide"
                              id="billing_city_field"
                              data-priority="70"
                              data-o_className="form-row form-row-wide address-field validate-required"
                            >
                              <label htmlFor="billing_city" className="">
                                Town / City&nbsp;
                                <abbr className="required" title="required">
                                  *
                                </abbr>
                              </label>
                              <span className="woocommerce-input-wrapper">
                                <input
                                  required
                                  className="input-text "
                                  value={formData.city}
                                  onChange={(e) =>
                                    handleInputChange("city", e.target.value)
                                  }
                                  type="text"
                                  id="city"
                                  name="city"
                                  placeholder="eg: Kayimakli, Ortakoy, Haspolat ..."
                                />
                              </span>
                            </p>
                            <p
                              className="form-row form-row-wide validate-required validate-phone"
                              id="billing_phone_field"
                              data-priority="100"
                            >
                              <label htmlFor="billing_phone" className="">
                                Phone&nbsp;
                                <abbr className="required" title="required">
                                  *
                                </abbr>
                              </label>
                              <span className="woocommerce-input-wrapper">
                                <input
                                  required
                                  className="input-text "
                                  value={formData.phone}
                                  onChange={(e) =>
                                    handleInputChange("phone", e.target.value)
                                  }
                                  type="text"
                                  id="phone"
                                  name="phone"
                                />
                              </span>
                            </p>
                            <p
                              className="form-row form-row-wide validate-required validate-email"
                              id="billing_email_field"
                              data-priority="110"
                            >
                              <label htmlFor="billing_email" className="">
                                Email address&nbsp;
                                <abbr className="required" title="required">
                                  *
                                </abbr>
                              </label>
                              <span className="woocommerce-input-wrapper">
                                <input
                                  type="email"
                                  required
                                  className="input-text "
                                  value={formData.mail}
                                  onChange={(e) =>
                                    handleInputChange("mail", e.target.value)
                                  }
                                  id="email"
                                  name="email"
                                  placeholder="email username"
                                />
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="electio-col-2">
                        <div className="woocommerce-shipping-fields"></div>
                        <div className="woocommerce-additional-fields">
                          <h3>Additional information</h3>

                          <div className="woocommerce-additional-fields__field-wrapper">
                            <p
                              className="form-row notes"
                              id="order_comments_field"
                              data-priority=""
                            >
                              <label htmlFor="order_comments" className="">
                                Order notes&nbsp;
                                <span className="optional">(optional)</span>
                              </label>
                              <span className="woocommerce-input-wrapper">
                                <textarea
                                  className="input-text "
                                  value={formData.notes}
                                  onChange={(e) =>
                                    handleInputChange("notes", e.target.value)
                                  }
                                  placeholder="Notes about your order, e.g. special notes for delivery."
                                  rows={2}
                                  cols={5}
                                ></textarea>
                              </span>
                            </p>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pivoo-checkout-review w-full lg:h-full md:w-1/3 lg:w-2/4 bg-white rounded-lg shadow-lg p-6">
                    <div className="pivoo-ck-review">
                      <h3
                        id="order_review_heading"
                        className="text-2xl font-semibold text-gray-800 mb-6"
                      >
                        Your order
                      </h3>

                      <div
                        id="order_review"
                        className="woocommerce-checkout-review-order"
                      >
                        <table className="w-full mb-6">
                          <thead>
                            <tr className="border-b border-gray-200">
                              <th className="text-left py-3 text-gray-600">
                                Product
                              </th>
                              <th className="text-right py-3 text-gray-600">
                                Subtotal
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {cartItems.map((item: any, index) => (
                              <tr
                                key={index}
                                className="border-b border-gray-100"
                              >
                                <td className="py-4 text-gray-800">
                                  {item.productTitle}
                                </td>
                                <td className="py-4 text-right text-gray-800">
                                  {item.price} $
                                </td>
                              </tr>
                            ))}
                          </tbody>
                          <tfoot>
                            <tr className="border-b border-gray-200">
                              <th className="py-4 text-gray-600">Subtotal</th>
                              <td className="py-4 text-right text-gray-800 font-medium">
                                {totalCost.toFixed(2)} $
                              </td>
                            </tr>
                            <tr>
                              <th className="py-4 text-gray-800 text-lg font-semibold">
                                VAT + Total
                              </th>
                              <td className="py-4 text-right text-gray-800 text-lg font-bold">
                                {(totalCost * 1.15).toFixed(2)} $
                              </td>
                            </tr>
                          </tfoot>
                        </table>

                        <div
                          id="payment"
                          className="woocommerce-checkout-payment"
                        >
                          <div className="mb-6">
                            <div className="space-y-4">
                              <label className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition duration-200">
                                <input
                                  required
                                  name="radio-group"
                                  id="radio2"
                                  type="radio"
                                  value="bank"
                                  checked={formData.selectedOption === "bank"}
                                  onChange={handleRadioChange}
                                  className="form-radio text-cyan-600 focus:ring-cyan-500"
                                />
                                <span className="text-gray-700 font-medium">
                                  DIRECT BANK TRANSFER
                                </span>
                              </label>
                              {formData.selectedOption === "bank" && (
                                <p className="ml-7 text-sm text-gray-600">
                                  Make your payment directly into our bank
                                  account. Please use your Order ID. Your order
                                  will be shipped after funds have cleared in
                                  our account.
                                </p>
                              )}

                              <label className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition duration-200">
                                <input
                                  required
                                  name="radio-group"
                                  id="radio1"
                                  type="radio"
                                  value="cash"
                                  checked={formData.selectedOption === "cash"}
                                  onChange={handleRadioChange}
                                  className="form-radio text-cyan-600 focus:ring-cyan-500"
                                />
                                <span className="text-gray-700 font-medium">
                                  CASH ON DELIVERY
                                </span>
                              </label>
                              {formData.selectedOption === "cash" && (
                                <p className="ml-7 text-sm text-gray-600">
                                  Pay with cash upon delivery.
                                </p>
                              )}
                            </div>
                          </div>
                          <div className="mt-8">
                            <Button
                              type="submit"
                              className="w-full py-3 px-4 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-lg transition duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
                            >
                              Place order
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
export default CheckOut;
