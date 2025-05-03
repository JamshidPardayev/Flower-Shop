import React, { useState, useEffect } from "react";
import {
  IoMdNotificationsOutline,
  IoIosSearch,
  IoMdLogIn,
} from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { HiOutlineXMark } from "react-icons/hi2";
import { IoIosMenu } from "react-icons/io";
import { Modal, Box, Typography } from "@mui/material";
import "@fontsource/inter";
import Login from "../Auth/SignIn";
import Register from "../Auth/SignUp";
import { FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("login");
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const nameFromStorage = localStorage.getItem("name");
    const tokenFromStorage = localStorage.getItem("token");
    if (nameFromStorage && tokenFromStorage) {
      setUserName(nameFromStorage);
    }
  }, []);

  const handleModalOpen = () => {
    setIsModalOpen(true);
    setActiveTab("login");
  };

  const handleModalClose = () => setIsModalOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    maxWidth: "100%",
    bgcolor: "background.paper",
    boxShadow: 24,
    px: 4,
    py: 2,
  };

  return (
    <div className="relative font-[Inter,sans-serif]">
      <div className="flex items-center justify-between max-w-[1200px] px-[20px] min-h-[100px] border-b border-b-green-600 mx-auto">
        <img src="/image/logo.svg" alt="logo" />

        <div className="flex gap-x-[30px] text-[16px] font-bold max-sm:hidden">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/blog">Blog</NavLink>
        </div>

        <div className="flex items-center gap-x-[30px] text-[25px]">
          <IoIosSearch className="cursor-pointer text-[#3D3D3D]" />
          <IoMdNotificationsOutline className="max-sm:hidden text-[#3D3D3D]" />
          <NavLink to="/productCard">
            <AiOutlineShoppingCart className="cursor-pointer text-[#3D3D3D] hover:text-[#46A358] transition-colors duration-200" />
          </NavLink>

          {userName ? (
            <NavLink to="/profile">
              <button className="flex items-center justify-center text-white w-[130px] h-[36px] text-[14px] font-bold rounded-[5px] bg-[#46a358] hover:bg-green-700 duration-300 max-sm:hidden">
                {userName}
              </button>
            </NavLink>
          ) : (
            <button
              onClick={handleModalOpen}
              className="flex items-center justify-center text-white w-[96px] h-[36px] text-[16px] font-bold rounded-[5px] bg-[#46a358] hover:bg-green-700 duration-300 max-sm:hidden"
            >
              <IoMdLogIn className="text-[25px] mr-1" /> Login
            </button>
          )}

          <button
            onClick={() => setMenuOpen(true)}
            className="hidden max-sm:block text-[30px] text-[#3D3D3D] font-bold cursor-pointer hover:text-gray-950 duration-300"
          >
            <IoIosMenu />
          </button>
        </div>
      </div>

      {/* Responsive menu */}
      <div
        className={`fixed top-0 right-0 w-full max-w-[100%] bg-white h-full p-4 z-50 shadow-md transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center">
          <h2 className="text-[18px] font-bold">Site map</h2>
          <button
            onClick={() => setMenuOpen(false)}
            className="text-[25px] font-bold text-[#3D3D3D] cursor-pointer hover:text-black duration-300"
          >
            <HiOutlineXMark />
          </button>
        </div>
        <div className="flex flex-col gap-y-[10px] text-[16px] font-bold mt-[15px]">
          <NavLink to="/" onClick={() => setMenuOpen(false)}>
            <p className="pl-[5px] border-l-[4px] border-l-[#46a358] text-[#46a358] h-[40px] flex items-center">
              Home
            </p>
          </NavLink>
          <NavLink to="/blog" onClick={() => setMenuOpen(false)}>
            <p className="pl-[5px] hover:border-l-[4px] hover:border-l-[#46a358] h-[40px] hover:text-[#46a358] flex items-center">
              Blog
            </p>
          </NavLink>
        </div>

        {userName ? (
          <NavLink to="/my-account" onClick={() => setMenuOpen(false)}>
            <button className="flex items-center justify-center mx-auto mt-[20px] text-white w-[80%] h-[50px] text-[16px] font-bold rounded-[5px] bg-[#46a358] hover:bg-green-700 duration-300">
              {userName}
            </button>
          </NavLink>
        ) : (
          <button
            onClick={handleModalOpen}
            className="flex items-center justify-center mx-auto mt-[20px] text-white w-[80%] h-[50px] text-[16px] font-bold rounded-[5px] bg-[#46a358] hover:bg-green-700 duration-300"
          >
            <IoMdLogIn className="text-[25px] mr-2" /> Login
          </button>
        )}
      </div>

      {/* Modal */}
      <Modal
        open={isModalOpen}
        onClose={handleModalClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={style}>
          <div className="flex justify-end">
            <FiX
              onClick={handleModalClose}
              className="text-[25px] text-[#46A358] hover:text-green-700 cursor-pointer duration-300"
            />
          </div>
          <Typography
            id="modal-title"
            variant="h6"
            className="flex justify-center gap-x-4"
          >
            <button
              onClick={() => setActiveTab("login")}
              className={`font-bold ${
                activeTab === "login" ? "text-[#46a358]" : ""
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setActiveTab("register")}
              className={`font-bold ${
                activeTab === "register" ? "text-[#46a358]" : ""
              }`}
            >
              Register
            </button>
          </Typography>
          <Box id="modal-description" sx={{ mt: 1 }}>
            {activeTab === "login" ? <Login /> : <Register />}
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default Navbar;
