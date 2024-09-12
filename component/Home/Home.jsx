import Banner from "./Banner";
import Testimonial from "./Testimonial";
import Footer from "../header/Footer";
import Navbar from "./Navbar";
import Service from "./Service";
import Feedback from "./feedback";
const Home = () => {
  return (
    <>
      <Navbar />
      <Service />

      <Banner />
      <Testimonial />
      <Feedback />
      <Footer />
    </>
  );
};

export default Home;
