import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const api = import.meta.env.VITE_API;

const Register = () => {
  // Form ma'lumotlarini boshqarish uchun holatlar
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Formani yuborish funksiyasi
  const handleSubmit = (e) => {
    e.preventDefault();

    // Parollarni tekshirish
    if (password !== confirmPassword) {
      alert("Parollar mos kelmayapti!");
      return;
    }

    // Axios so'rovini yuborish
    registerUser({ name, surname, email, password });
  };

  // API'ga POST so'rovini yuborish
  const registerUser = async (userData) => {
    const res = await axios.post(`${api}/user/sign-up?access_token=6506e8bd6ec24be5de357927`, userData);
    return res.data;
  };

  // React Query bilan POST so'rovini yuborish
  const { isLoading, isError, data } = useMutation(registerUser);

  if (isLoading) {
    return <h3>Loading...</h3>;
  }

  if (isError) {
    return <h3>Error...</h3>;
  }

  if (data) {
    // Tokenni olish va keyin foydalanish
    console.log("Token:", data.token);
  }

  return (
    <div>
      <div>
        <NavLink to={"/login"}>Login</NavLink>
        <NavLink to={"/register"}>Register</NavLink>
      </div>
      <p>Enter your email and password to register.</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Your Name"
          className="h-[40px] w-[100%] border mt-4 rounded-[6px]"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Your Surname"
          className="h-[40px] w-[100%] border mt-4 rounded-[6px]"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />
        <input
          type="email"
          placeholder="Enter Your Email"
          className="h-[40px] w-[100%] border mt-4 rounded-[6px]"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter Your Password"
          className="h-[40px] w-[100%] border mt-4 rounded-[6px]"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm Your Password"
          className="h-[40px] w-[100%] border mt-4 rounded-[6px]"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button type="submit" className="mt-4 p-2 border rounded">Register</button>
      </form>
    </div>
  );
};

export default Register;
