import React, { useState } from 'react';
import axios from 'axios';
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import { MdQrCode2 } from "react-icons/md";
import { signInWithGoogle } from '../../../../firebase';

const api = import.meta.env.VITE_API;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');

    try {
      const response = await axios.post(`${api}/user/sign-in?access_token=6506e8bd6ec24be5de357927`, {
        email,
        password
      });

      if (response.status === 200 && response.data.data?.token && response.data.data?.user) {
        setSuccessMsg("Login muvaffaqiyatli amalga oshdi!");
        localStorage.setItem("token", response.data.data.token);
        localStorage.setItem("name", response.data.data.user.name);
        window.location.reload();
      } else {
        setErrorMsg("Email yoki parol noto‘g‘ri!");
      }
    } catch (error) {
      console.error("Login error:", error);
      setErrorMsg("Email yoki parol noto‘g‘ri!");
    }
  };
  const googleAuthHandler = async () => {
    try {
      const result = await signInWithGoogle();
      if (!result?.user?.email) {
        setErrorMsg("Google bilan kirishda xatolik yuz berdi!");
        return;
      }
  
      const response = await axios.post(`${api}/user/sign-in/google?access_token=6506e8bd6ec24be5de357927`, {
        email: result.user.email,
      });
  
      if (response.status === 200 && response.data.data?.token && response.data.data?.user) {
        setSuccessMsg("Google orqali kirish muvaffaqiyatli amalga oshdi!");
        localStorage.setItem("token", response.data.data.token);
        localStorage.setItem("name", response.data.data.user.name);
        window.location.reload(); // sahifani yangilab, Navbar da ism chiqadi
      } else {
        setErrorMsg("Google orqali kirishda xatolik yuz berdi!");
      }
    } catch (error) {
      console.error("Google Login Error:", error);
      setErrorMsg("Google orqali kirishda xatolik yuz berdi!");
    }
  };
  

  return (
    <div className="w-full">
      <p>Enter your email and password to login.</p>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full h-[40px] mt-3 border px-2 rounded outline-none"
          required
        />
        <input
          type="password"
          placeholder="Enter Your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full h-[40px] mt-3 border px-2 rounded outline-none"
          required
        />
        <p className='flex justify-end text-[14px] text-[#46A358] my-2 hover:text-green-700 duration-300 cursor-pointer'>
          Forgot Password?
        </p>
        <button type="submit" className="mt-2 p-2 w-full bg-[#46a358] text-white rounded font-bold hover:bg-green-700">
          Login
        </button>
        {errorMsg && <p className="text-red-600 mt-2 text-sm">{errorMsg}</p>}
        {successMsg && <p className="text-green-600 mt-2 text-sm">{successMsg}</p>}
      </form>

      <div className='my-3 flex justify-between items-center'>
        <p className='w-full border-b max-sm:w-[75%]'></p>
        <p className='w-[70%] text-center text-[#3D3D3D] text-[13px]'>Or register with</p>
        <p className='w-full border-b max-sm:w-[75%]'></p>
      </div>

      <div className='flex flex-col gap-y-2'>
        <button onClick={googleAuthHandler} className='h-[30px] border flex items-center justify-center gap-x-3 text-[#727272] text-[13px] hover:bg-gray-200 duration-300'>
          <FaGoogle className='text-[15px] text-pink-600' />
          <p>Continue With Google</p>
        </button>
        <button className='h-[30px] border flex items-center justify-center gap-x-3 text-[#727272] text-[13px] hover:bg-gray-200 duration-300'>
          <FaFacebookF className='text-[15px] text-blue-700' />
          <p>Continue With Facebook</p>
        </button>
        <button className='h-[30px] border flex items-center justify-center gap-x-3 text-[#727272] text-[13px] hover:bg-gray-200 duration-300'>
          <MdQrCode2 className='text-[15px] text-gray-700' />
          <p>Continue With QR-Code</p>
        </button>
      </div>
    </div>
  );
};

export default Login;
