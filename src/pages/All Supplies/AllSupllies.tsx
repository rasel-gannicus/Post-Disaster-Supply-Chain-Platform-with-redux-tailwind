import SupplyCard from "../../components/For Home Page/SupplySection/SupplyCard/SupplyCard";

const AllSupllies = () => {
    return (
        <div className="lg:max-w-[1200px] max-w-full  md:mx-auto mx-5 px-3 py-3 mt-20">
            <h2 className="text-4xl font-bold text-center mt-20">View All The Supplies We Currently Need</h2>
            <hr className="border-2 w-3/4 mx-auto my-5" />
            <div className="py-5 grid md:grid-cols-3 gap-6 px-5 ">
                <SupplyCard />
                <SupplyCard />
                <SupplyCard />
                <SupplyCard />
                <SupplyCard />
            </div>
        </div>
    );
};

export default AllSupllies;