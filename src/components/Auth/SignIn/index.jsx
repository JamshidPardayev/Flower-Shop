// import React, { useState } from 'react'
// import { NavLink } from 'react-router-dom'

// const api = import.meta.env.VITE_API;

// const Login = () => {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");

//     const SignInPost () = async (e)  {

//     }

//   return (
//     <div>
//     <div>
//         <NavLink to={"/login"}>Login</NavLink>
//         <NavLink to={"/register"}>Register</NavLink>
//       </div>
//         <form action="" onChange={SignInPost}>
//             <input type="email" value={email} onChange={(e) => {e.target.value}} className='w-full h-[40px] mt-[10px] outline-none '/>
//             <input type="password"  value={password} onChange={(e) => {e.target.value}} className='w-full h-[40px] mt-[10px] outline-none '/>
//             <button type="submit" className="mt-4 p-2 border rounded">Register</button>
//         </form>
//     </div>
//   )
// }

// export default Login