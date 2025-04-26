import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Blog from "./pages/blog";
import Profile from "./pages/profile";
import MyAccount from "./pages/profile/MyAccount";
import MyAddress from "./pages/profile/MyAddress";
import MyTrack from "./pages/profile/MyTrack";
import MyWishlist from "./pages/profile/MyWishlist";
import MyProducts from "./pages/profile/MyProducts";
import BlogId from "./pages/blog/BlogCard/BlogCardId";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogId />} />

        <Route path="/profile" element={<Profile />}>
          <Route index element={<MyAccount />} />
          <Route path="myAccount" element={<MyAccount />} />
          <Route path="myProduct" element={<MyProducts />} />
          <Route path="myAddress" element={<MyAddress />} />
          <Route path="myWishlist" element={<MyWishlist />} />
          <Route path="myTrack" element={<MyTrack />} />
        </Route>
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
