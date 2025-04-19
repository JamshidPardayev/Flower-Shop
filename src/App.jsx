import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./components/Home";
// import Categories from "./components/Home/Main/Categories";
import Footer from "./components/Footer";
import Blog from "./pages/blog";
// import Register from "./components/Auth/SignUp";
// import Login from "./components/Auth/SignIn";


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/blog" element={<Blog />}/>
        {/* <Route path="/register" element={<Register />}/> */}
        {/* <Route path="/login" element={<Login />}/> */}
      </Routes>
      {/* <Categories /> */}
      <Footer />

    </Router>
  )
}

export default App
