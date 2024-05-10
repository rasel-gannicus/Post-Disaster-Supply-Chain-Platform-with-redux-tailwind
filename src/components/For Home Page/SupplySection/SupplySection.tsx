import SupplyCard from "./SupplyCard/SupplyCard";

const SupplySection = () => {
  return (
    <div>
        <h2 className="text-4xl font-bold text-center mt-20">View Our Supplies</h2>
        <hr className="border-2 w-3/4 mx-auto my-5" />
      <div className="py-5 grid md:grid-cols-3 gap-6 px-5 ">
        <SupplyCard />
        <SupplyCard />
        <SupplyCard />
        <SupplyCard />
        <SupplyCard />
        <SupplyCard />
      </div>
    </div>
  );
};

export default SupplySection;
