import Banner from "../../components/For Home Page/Banner/Banner";
import SupplySection from "../../components/For Home Page/SupplySection/SupplySection";


const Home = () => {
  return (
    <div>
      <Banner />
      <div className="max-w-[1200px] mx-auto flex flex-col py-3 ">
        <SupplySection />
        <button className="btn text-white bg-regal-red mx-auto">View All Supplies</button>
      </div>
    </div>
  );
};

export default Home;
