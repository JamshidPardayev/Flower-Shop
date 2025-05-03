import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
const api = import.meta.env.VITE_API;

const ProductCheckout = () => {
  const cartItems = useSelector((state) => state.shopping.data);
  const totalPrice = useSelector((state) => state.shopping.total);
  const shippingCost = 16;
  const finalTotal = totalPrice + shippingCost;

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    country: "",
    state: "",
    city: "",
    street: "",
    zip: "",
    apartment: "",
    phone: "",
    email: "",
    notes: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const order = {
      shop_list: cartItems.map((item) => ({
        shop_id: item._id,
        quantity: item.count,
      })),
      billing_address: {
        first_name: formData.firstName,
        last_name: formData.lastName,
        country: formData.country,
        state: formData.state,
        city: formData.city,
        street: formData.street,
        zip: formData.zip,
        apartment: formData.apartment,
        phone: formData.phone,
        email: formData.email,
      },
      extra_shop_info: formData.notes || "",
    };

    try {
      const res = await fetch(
        `${api}/order/make-order?access_token=6506e8bd6ec24be5de357927`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(order),
        }
      );

      const data = await res.json();
      if (res.ok) {
        alert("✅ Order placed successfully!");
      } else {
        alert("❌ Error: " + (data.extraMessage || data.message));
      }
    } catch (err) {
      alert("❌ Network error: " + err.message);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-[1200px] mx-auto px-[15px]">
        <div className="flex items-center gap-x-2 my-3">
          <NavLink to={"/"}>
            <p className="text-[14px] text-[#686868]">Home</p>
          </NavLink>
          <p className="text-[14px] text-[#686868]">/</p>
          <p className="text-[14px] text-[#333333] font-semibold">Checkout</p>
        </div>

        <div className="flex justify-between gap-6 max-md:flex-col">
          <div className="w-full">
            <form onSubmit={handleSubmit}>
              <div className="flex gap-x-3 mt-4 max-sm:flex-col">
                <div className="flex flex-col w-full">
                  <label className="text-sm mt-2">* First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Your Name..."
                    className="border rounded px-2 py-1 mt-1 outline-none"
                    required
                  />

                  <label className="text-sm mt-2">* Country / Region</label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    placeholder="Your Country..."
                    className="border rounded px-2 py-1 mt-1 outline-none"
                    required
                  />

                  <label className="text-sm mt-2">* Street Address</label>
                  <input
                    type="text"
                    name="street"
                    value={formData.street}
                    onChange={handleChange}
                    placeholder="Street..."
                    className="border rounded px-2 py-1 mt-1 outline-none"
                    required
                  />

                  <label className="text-sm mt-2">* State</label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    placeholder="Your State..."
                    className="border rounded px-2 py-1 mt-1 outline-none"
                    required
                  />

                  <label className="text-sm mt-2">* Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email..."
                    className="border rounded px-2 py-1 mt-1 outline-none"
                    required
                  />
                </div>

                <div className="flex flex-col w-full">
                  <label className="text-sm mt-2">* Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Your Last Name..."
                    className="border rounded px-2 py-1 mt-1 outline-none"
                    required
                  />

                  <label className="text-sm mt-2">* Town / City</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Your Town..."
                    className="border rounded px-2 py-1 mt-1 outline-none"
                    required
                  />

                  <label className="text-sm mt-2">* Optional</label>
                  <input
                    type="text"
                    name="apartment"
                    value={formData.apartment}
                    onChange={handleChange}
                    placeholder="Apartment..."
                    className="border rounded px-2 py-1 mt-1 outline-none"
                  />

                  <label className="text-sm mt-2">* Zip</label>
                  <input
                    type="text"
                    name="zip"
                    value={formData.zip}
                    onChange={handleChange}
                    placeholder="Zip code..."
                    className="border rounded px-2 py-1 mt-1 outline-none"
                    required
                  />

                  <label className="text-sm mt-2">* Phone Number</label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your Number..."
                    className="border rounded px-2 py-1 mt-1 outline-none"
                    required
                  />
                </div>
              </div>

              <div>
                <h2 className="text-[16px] font-medium mt-4">* Payment method</h2>
                <label className="flex items-center gap-x-3 w-[300px] h-[40px] rounded-[6px] px-2 mt-3 border border-[#48a258] cursor-pointer">
                  <input type="radio" name="payment" defaultChecked />
                  <p><img src="./image/payment.svg" alt="Pay" /></p>
                </label>

                <label className="flex items-center gap-x-3 w-[300px] h-[40px] rounded-[6px] px-2 mt-3 border border-[#48a258] cursor-pointer">
                  <input type="radio" name="payment" />
                  <p>Direct Bank Transfer</p>
                </label>

                <label className="flex items-center gap-x-3 w-[300px] h-[40px] rounded-[6px] px-2 mt-3 border border-[#48a258] cursor-pointer">
                  <input type="radio" name="payment" />
                  <p>Cash On Delivery</p>
                </label>

                <p className="mt-4">Order notes (optional)</p>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Your order notes, thoughts, feedback, etc..."
                  className="text-[14px] w-full h-[250px] my-3 outline-none border p-2 rounded-[10px]"
                ></textarea>

                <button
                  type="submit"
                  className="w-full h-[40px] bg-[#48a258] text-white rounded-[6px] hover:bg-green-700 duration-300"
                >
                  Place Order
                </button>
              </div>
            </form>
          </div>

          <div className="w-full md:w-[400px] my-2">
            <h2 className="text-lg font-semibold mb-3">Your Order</h2>
            {cartItems.length === 0 ? (
              <p className="text-gray-500">No items in the cart.</p>
            ) : (
              <ul className="space-y-3">
                {cartItems.map((item) => (
                  <li
                    key={item._id}
                    className="flex items-center gap-2 border p-2 rounded-md shadow-sm"
                  >
                    <img
                      src={item.main_image}
                      alt={item.title}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div>
                      <p className="font-medium text-[#46a358]">{item.title}</p>
                      <p className="text-sm text-gray-600">
                        ${item.price} x {item.count} ={" "}
                        <span className="font-semibold text-[#3D3D3D]">
                          ${(item.price * item.count).toFixed(2)}
                        </span>
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-4">
              <p className="text-sm text-gray-600">
                Subtotal:{" "}
                <span className="font-bold text-[#1a1a1a]">
                  ${totalPrice.toFixed(2)}
                </span>
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Shipping:{" "}
                <span className="font-bold text-[#1a1a1a]">
                  ${shippingCost}
                </span>
              </p>
              <p className="text-base font-semibold mt-2 flex justify-between">
                Total:{" "}
                <span className="text-[#43a253]">${finalTotal.toFixed(2)}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCheckout;
