import Banner from "../../components/Banner/Banner";
import SupplySection from "../../components/SupplySection/SupplySection";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="max-w-[1200px] mx-auto">
        <SupplySection />
      </div>
    </div>
  );
};

export default Home;
