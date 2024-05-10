import Banner from "../../components/For Home Page/Banner/Banner";
import GallerySection from "../../components/For Home Page/Gallery Section/GallerySection";
import SupplySection from "../../components/For Home Page/SupplySection/SupplySection";
import TestiMonialSection from "../../components/For Home Page/Testimonials/TestiMonialSection";

const Home = () => {
  return (
    <div>
      {/* --- Banner section --- */}
      <Banner />

      {/* --- Supply Cards section --- */}
      <div className="max-w-[1200px] mx-auto flex flex-col py-3 ">
        <SupplySection />
        <button className="btn text-white bg-regal-red mx-auto">
          View All Supplies
        </button>

        {/* --- Testimonials section --- */}
        <TestiMonialSection /> 

        {/* --- Gallery section --- */}
        <GallerySection /> 
      </div>
    </div>
  );
};

export default Home;
