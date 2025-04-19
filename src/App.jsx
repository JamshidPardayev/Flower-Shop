import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./components/Home";
// import Categories from "./components/Home/Main/Categories";
import Footer from "./components/Footer";
import Blog from "./pages/blog";


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/blog" element={<Blog />}/>
      </Routes>
      {/* <Categories /> */}
      <Footer />
      
    </Router>
  )
}

export default App
