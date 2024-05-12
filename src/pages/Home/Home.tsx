import { useNavigate } from "react-router-dom";
import About from "../../components/For Home Page/About Us/About";
import Banner from "../../components/For Home Page/Banner/Banner";
import GallerySection from "../../components/For Home Page/Gallery Section/GallerySection";
import SupplySection from "../../components/For Home Page/SupplySection/SupplySection";
import TestiMonialSection from "../../components/For Home Page/Testimonials/TestiMonialSection";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      {/* --- Banner section --- */}
      <Banner />

      {/* --- Supply Cards section --- */}
      <div className="lg:max-w-[1200px]  md:mx-auto px-3  flex flex-col py-3">
        <SupplySection />
        <button
          onClick={() => navigate("/supplies")}
          className="btn text-white bg-regal-red mx-auto"
        >
          View All Supplies
        </button>

        {/* --- Testimonials section --- */}
        <TestiMonialSection />

        {/* --- Gallery section --- */}
        <h2 className="text-4xl text-[#2A4D5E] font-bold text-center mt-20">
          Gallery
        </h2>
        <hr className="border-1 w-3/4 mx-auto my-5" />
        <GallerySection />

        {/* --- About section --- */}
        <About />
      </div>
    </div>
  );
};

export default Home;
