import { useState } from "react";
import SupplyCard from "../../components/For Home Page/SupplySection/SupplyCard/SupplyCard";
import { useGetAllSuppliesQuery } from "../../Redux/app/supply slice/supplyApi";

const AllSupllies = () => {

    // --- Fetching data from server using Redux toolkit Query
    
    const {data, isLoading, isError, error} = useGetAllSuppliesQuery() ;
    
    let content = null;
    if (isLoading && !isError) {
        content = <h1>Loading...</h1>
    }
    if (!isLoading && isError) {
        content = <p>{error?.error}</p>
    }
    if (!isLoading && !isError && data.length === 0) {
        content = <p>No Supply Found</p>
    }
    if (!isLoading && !isError && data.length > 0) {
        console.log(data);
        content = data.map((index) => <SupplyCard key={index._id} data={index} />)
    }
    return (
        <div className="lg:max-w-[1200px] max-w-full  md:mx-auto mx-5 px-3 py-3 mt-20">
            <h2 className="text-4xl font-bold text-center mt-20">View All The Supplies We Currently Need</h2>
            <hr className="border-2 w-3/4 mx-auto my-5" />
            <div className="py-5 grid md:grid-cols-3 gap-6 px-5 ">
                {content}                
            </div>
        </div>
    );
};

export default AllSupllies;