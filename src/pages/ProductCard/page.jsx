import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { MdDeleteOutline } from "react-icons/md";
import {
  decreaseCountFromShopping,
  deleteFlowerFromShopping,
  increaseCountFromShopping,
} from "../../redux/shoppingSlice";

const ProductCard = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.shopping.data);
  const totalPrice = useSelector((state) => state.shopping.total);

  return (
    <div>
      <Navbar />

      <div className="max-w-[1200px] mx-auto px-[15px] my-2">
        <div className="flex items-center gap-x-2">
          <NavLink to={"/"}>
            <p className="text-[14px] text-[#686868]">Home</p>
          </NavLink>
          <p className="text-[14px] text-[#686868]">/</p>
          <p className="text-[14px] text-[#333333] font-semibold">
            Shopping Cart
          </p>
        </div>

        <div className="flex justify-between gap-6 max-md:flex-col">
          <div className="overflow-x-auto w-full flex mt-5">
            <table className="min-w-full text-left border">
              <thead className="bg-gray-100 text-sm text-[#3D3D3D]">
                <tr>
                  <th className="py-2 px-3 border">Products</th>
                  <th className="py-2 px-3 border">Price</th>
                  <th className="py-2 px-3 border">Quantity</th>
                  <th className="py-2 px-3 border">Total</th>
                  <th className="py-2 px-3 border"></th>
                </tr>
              </thead>
              <tbody>
                {cartItems.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="text-center py-4 text-gray-500">
                      Your cart is empty.
                    </td>
                  </tr>
                ) : (
                  cartItems.map((item) => (
                    <tr key={item._id} className="border-b h-[70px]">
                      <td className="border-r py-2 px-1 ">
                        <div className="flex items-center gap-1 min-w-[150px]">
                          <img
                            src={item.main_image}
                            alt={item.title}
                            className="w-[60px] h-[60px] object-cover rounded"
                          />
                          <span className="text-sm font-medium text-[#333]">
                            {item.title}
                          </span>
                        </div>
                      </td>
                      <td className="border-r py-2 px-1 text-sm text-[#333]">
                        ${item.price}
                      </td>
                      <td className="border-r py-2 px-1">
                        <div className="flex items-center gap-1">
                          <button
                            className="w-[22px] h-[22px] rounded-full text-white hover:bg-green-800 bg-green-600"
                            onClick={() =>
                              dispatch(decreaseCountFromShopping(item))
                            }
                          >
                            -
                          </button>
                          <span>{item.count}</span>
                          <button
                            className="w-[22px] h-[22px] rounded-full text-white hover:bg-green-800 bg-green-600"
                            onClick={() =>
                              dispatch(increaseCountFromShopping(item))
                            }
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="border-r py-2 px-1 text-sm text-[#333]">
                        ${(item.price * item.count).toFixed(2)}
                      </td>
                      <td className="py-2 px-3 text-center">
                        <button
                          onClick={() =>
                            dispatch(deleteFlowerFromShopping(item))
                          }
                          className="text-red-500 hover:text-red-700"
                        >
                          <MdDeleteOutline className="text-xl" />
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          <div className="min-w-[320px]">
            <h2 className="text-[14px] font-bold border-b-[2px] border-b-[#46a358] mt-3 py-3">
              Card Total
            </h2>
            <div className="flex h-[40px] w-full mt-[30px]">
              <input
                type="text"
                className="border w-full border-[#46a358] outline-none px-[10px] rounded-l-[6px] "
                placeholder="Enter Coupon Code Here..."
              />
              <button className="h-[40px] bg-[#46a358] text-[16px] text-white px-2 rounded-r-[6px] hover:bg-green-800 duration-300">
                Apply
              </button>
            </div>
            <p className="text-[14px] text-[gray] mt-4">
              Subtotal:{" "}
              <span className="font-bold text-[#1a1a1a]">${totalPrice}</span>
            </p>
            <p className="text-[14px] text-[gray] mt-3">
              Coupon Discount:{" "}
              <span className="font-bold text-[#1a1a1a]">$0.00</span>
            </p>
            <p className="text-[14px] text-[gray] mt-3">
              Shipping: <span className="font-bold text-[#1a1a1a]">$16</span>{" "}
            </p>
            <p className="text-[16px] flex justify-between mt-3 font-semibold">
              Total:{" "}
              <span className="text-[#43a253]">${totalPrice.toFixed(2)}</span>
            </p>

            <NavLink to={"/productCheckout"}>
              <button className="my-4 w-full h-[40px] bg-[#46a258] rounded-[6px] text-white duration-300 hover:bg-green-700">
                Proceed to Checkout
              </button>
            </NavLink>
            <NavLink to={"../"}>
              <button className=" w-full h-[40px] text-[#46a258] rounded-[6px] hover:text-green-700 duration-300 ">
                Continue Shopping
              </button>
            </NavLink>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductCard;
