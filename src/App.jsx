import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Service from "./component/Home/Service";
import About from "./component/About/About";
import Menu from "./component/menu/Menu";
import Coffee from "./component/coffee";
import Home from "./component/Home/Home";
import Cart from "./component/Cart/Cart";
import Login from "./component/Auth/Login";
import Contact from "./component/contact/Contact";
import Register from "./component/Auth/Register";
import Review from "./component/menu/review";
import Feedback from "./component/Home/feedback";
import Index from "./component/About/caresoult";
import Blog1 from "./component/blog/blog";
import Profile from "./component/Profile/Profile";
import Faq1 from "./component/contact/Faq";
import Navigation from "./component/About/Navigation";
import Music from "./component/Music/Music";
import AdminDashboard from "./component/Profile/Admin";
import Checkout from "./component/Cart/Checkout";
import Checkout2 from "./component/Cart/Checkout2";
import ProductDetail from "./component/menu/ProductPage";
import OrderHistory from "./component/Cart/OrderHistory";

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
    });
  }, []);

  return (
    <Router>
      <div className="overflow-x-hidden">
        <Routes>
          <Route path="/coffee" element={<Coffee />}>
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="menu" element={<Menu />} />
            <Route path="service" element={<Service />} />
            <Route path="cart" element={<Cart />} />
            <Route path="contact" element={<Contact />} />
            <Route path="register" element={<Register />} />
            <Route path="review" element={<Review />} />
            <Route path="feedback" element={<Feedback />} />
            <Route path="caresoult" element={<Index />} />
            <Route path="blog" element={<Blog1 />} />
            <Route path="profile" element={<Profile />} />
            <Route path="faq" element={<Faq1 />} />
            <Route path="navigation" element={<Navigation />} />
            <Route path="music" element={<Music />} />
            <Route path="admin" element={<AdminDashboard />} />
            <Route path="login" element={<Login />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="checkout2" element={<Checkout2 />} />
            <Route path="orderhistory" element={<OrderHistory />} />
            <Route path="productdetail/:id" element={<ProductDetail />} />
           
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
