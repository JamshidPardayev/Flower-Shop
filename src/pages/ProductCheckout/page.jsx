import React from "react";
import Navbar from "../../components/Navbar";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductCheckout = () => {
  const cartItems = useSelector((state) => state.shopping.data);
  const totalPrice = useSelector((state) => state.shopping.total);
  const shippingCost = 16;
  const finalTotal = totalPrice + shippingCost;

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
            <form action="">
              <div className="w-full ">
                <div className="flex gap-x-3 mt-4 max-sm:flex-col">
                  <div className="flex flex-col w-full ">
                    <label className="text-sm mt-2">* First Name</label>
                    <input
                      type="text"
                      placeholder="Your Name..."
                      className="border rounded px-2 py-1 mt-1 outline-none" required
                    />

                    <label className="text-sm mt-2">* Country / Region</label>
                    <input
                      type="text"
                      placeholder="Your Country..."
                      className="border rounded px-2 py-1 mt-1 outline-none" required
                    />

                    <label className="text-sm mt-2">* Street Address</label>
                    <input
                      type="text"
                      placeholder="Street..."
                      className="border rounded px-2 py-1 mt-1 outline-none" required
                    />

                    <label className="text-sm mt-2">* State</label>
                    <input
                      type="text"
                      placeholder="Your State..."
                      className="border rounded px-2 py-1 mt-1 outline-none" required
                    />

                    <label className="text-sm mt-2">* Email Address</label>
                    <input
                      type="email"
                      placeholder="Your Email..."
                      className="border rounded px-2 py-1 mt-1 outline-none" required
                    />
                  </div>

                  <div className="flex flex-col w-full">
                    <label className="text-sm mt-2">* Last Name</label>
                    <input
                      type="text"
                      placeholder="Your Last Name..."
                      className="border rounded px-2 py-1 mt-1 outline-none" required
                    />

                    <label className="text-sm mt-2">* Town / City</label>
                    <input
                      type="text"
                      placeholder="Your Town..."
                      className="border rounded px-2 py-1 mt-1 outline-none" required
                    />

                    <label className="text-sm mt-2">* Optional</label>
                    <input
                      type="text"
                      placeholder="Apartment..."
                      className="border rounded px-2 py-1 mt-1 outline-none" required
                    />

                    <label className="text-sm mt-2">* Zip</label>
                    <input
                      type="text"
                      placeholder="Zip code..."
                      className="border rounded px-2 py-1 mt-1 outline-none" required
                    />

                    <label className="text-sm mt-2">* Phone Number</label>
                    <input
                      type="number"
                      placeholder="Your Number..."
                      className="border rounded px-2 py-1 mt-1 outline-none" required
                    />
                  </div>
                </div>
              </div>
              <div>
                <h2>* Payment method</h2>
                <label htmlFor="" className="flex items-center gap-x-3 w-[300px] h-[40px] rounded-[6px] px-2 mt-3 border border-[#48a258]">
                  <input type="radio" name="payment" id="" />
                  <p>

                  </p>
                </label>

                <label htmlFor="" className="flex items-center gap-x-3 w-[300px] h-[40px] rounded-[6px] px-2 mt-3 border border-[#48a258]">
                  <input type="radio" name="payment" id="" />
                  <p>Dorect Bank Transfer</p>
                </label>

                <label htmlFor="" className="flex items-center gap-x-3 w-[300px] h-[40px] rounded-[6px] px-2 mt-3 border border-[#48a258]">
                  <input type="radio" name="payment" id="" />
                  <p>Cash On Delivery</p>
                </label>
                <p>Order notes (optional)</p>
                <textarea name="" id="" placeholder="Your order notes, throught, feedback, etc.." className="text-[14px] w-full h-[250px] my-6 outline-none border p-2 rounded-[10px]"></textarea>
                <button className="w-full h-[40px] bg-[#48a258] text-white rounded-[6px] hover:bg-green-700 duration-300" >Place Order</button>
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
                Coupon Discount:{" "}
                <span className="font-bold text-[#1a1a1a]">$0.00</span>
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

{
  /* <button className="mt-4 w-full bg-[#46a358] text-white py-2 rounded hover:bg-green-700 transition">
  Confirm Order
</button>; */
}
