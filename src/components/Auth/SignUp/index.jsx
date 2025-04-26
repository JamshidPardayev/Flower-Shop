import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState } from 'react';
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import { MdQrCode2 } from "react-icons/md";
import { signInWithGoogle } from '../../../../firebase';

const api = import.meta.env.VITE_API;

const Register = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const isFormValid =
    name.trim() &&
    surname.trim() &&
    email.trim() &&
    password.trim() &&
    confirmPassword.trim();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Parollar mos kelmayapti!");
      return;
    }

    setError('');
    registerUser({ name, surname, email, password });
  };

  // Foydalanuvchini oddiy register qilish
  const registerUser = async (userData) => {
    try {
      const res = await axios.post(
        `${api}/user/sign-up?access_token=6506e8bd6ec24be5de357927`,
        userData
      );
      return res.data;
    } catch (err) {
      if (err.response && err.response.data) {
        if (err.response.data.extraMessage === "User with same email already exists. Please make sure email is unique amd valid.") {
          setError("Bu email allaqachon ro'yxatdan o'tgan.");
        }
      }
    }
  };

  const { isLoading, isError, data } = useMutation(registerUser);

  // Google orqali register qilish
  const googleRegisterHandler = async () => {
    try {
      const result = await signInWithGoogle();
      if (!result?.user?.email || !result?.user?.displayName) {
        setError("Google login orqali ma'lumotlar to'liq olinmadi.");
        return;
      }

      const googleData = {
        name: result.user.displayName,
        email: result.user.email,
      };

      const res = await axios.post(
        `${api}/user/sign-up/google?access_token=6506e8bd6ec24be5de357927`,
        googleData
      );

      if (res.status === 200 && res.data.data?.token && res.data.data?.user) {
        localStorage.setItem('token', res.data.data.token);
        localStorage.setItem('name', res.data.data.user.name);
        window.location.reload();
      } else {
        setError('Google orqali ro‘yxatdan o‘tishda xatolik yuz berdi.');
      }
    } catch (error) {
      console.error("Google Register Error:", error);
      setError('Google orqali ro‘yxatdan o‘tishda serverda xatolik yuz berdi.');
    }
  };

  if (isLoading) {
    return <h3>Yuklanmoqda...</h3>;
  }

  if (isError) {
    return <h3>Xatolik yuz berdi...</h3>;
  }

  if (data) {
    console.log("Token:", data.token);
  }

  return (
    <div>
      <p className='text-[16px] max-sm:text-[13px]'>Ro‘yxatdan o‘tish uchun ma’lumotlaringizni kiriting:</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ismingiz"
          className="h-[40px] w-[100%] border mt-3 rounded-[6px] outline-none px-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Familiyangiz"
          className="h-[40px] w-[100%] border mt-3 rounded-[6px] outline-none px-2"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />
        <input
          type="email"
          placeholder="Emailingiz"
          className="h-[40px] w-[100%] border mt-3 rounded-[6px] outline-none px-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Parol"
          className="h-[40px] w-[100%] border mt-3 rounded-[6px] outline-none px-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Parolni tasdiqlang"
          className="h-[40px] w-[100%] border mt-3 rounded-[6px] outline-none px-2"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button
          type="submit"
          disabled={!isFormValid}
          className={`mt-3 p-2 border rounded w-full text-white duration-300 ${
            isFormValid ? 'bg-[#46A358] hover:bg-green-700' : 'bg-gray-400 cursor-not-allowed'
          }`}
        >
          Register
        </button>
      </form>

      {error && <div className="mt-3 text-red-500 text-center">{error}</div>}

      <div className='my-3 flex justify-between items-center'>
        <p className='w-full border-b max-sm:w-[75%]'></p>
        <p className='w-[70%] text-center text-[#3D3D3D] text-[13px]'>Yoki ro'yxatdan o'tish:</p>
        <p className='w-full border-b max-sm:w-[75%]'></p>
      </div>

      <div className='flex flex-col gap-y-2'>
        <button
          onClick={googleRegisterHandler}
          className='h-[30px] border flex items-center justify-center gap-x-3 text-[#727272] text-[13px] hover:bg-gray-200 duration-300'
        >
          <FaGoogle className='text-[15px] text-pink-600' />
          <p>Google bilan davom etish</p>
        </button>
        <button className='h-[30px] border flex items-center justify-center gap-x-3 text-[#727272] text-[13px] hover:bg-gray-200 duration-300'>
          <FaFacebookF className='text-[15px] text-blue-700' />
          <p>Facebook bilan davom etish</p>
        </button>
        <button className='h-[30px] border flex items-center justify-center gap-x-3 text-[#727272] text-[13px] hover:bg-gray-200 duration-300'>
          <MdQrCode2 className='text-[15px] text-gray-700' />
          <p>QR-kod orqali davom etish</p>
        </button>
      </div>
    </div>
  );
};

export default Register;
