import SupplyCard from "../SupplyCard/SupplyCard";


const SupplySection = () => {
    return (
        <div className="py-5 grid md:grid-cols-3 gap-6 px-5 ">
            <SupplyCard />
            <SupplyCard />
            <SupplyCard />
            <SupplyCard />
            <SupplyCard />
            <SupplyCard />
        </div>
    );
};

export default SupplySection;