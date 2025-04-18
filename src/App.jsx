import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./components/Home";
import Categories from "./components/Home/Main/Categories";
import Footer from "./components/Footer";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
      {/* <Categories /> */}
      <Footer />

    </Router>
  )
}

export default App
