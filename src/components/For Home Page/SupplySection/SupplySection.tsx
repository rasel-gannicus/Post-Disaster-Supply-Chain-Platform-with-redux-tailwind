import { useGetAllSuppliesQuery } from "../../../Redux/app/supply slice/supplyApi";
import SupplyCard from "./SupplyCard/SupplyCard";

const SupplySection = () => {
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
          // console.log(data);
          const limitData = data.slice(0,6)
          content = limitData.map((index) => <SupplyCard key={index._id} data={index} />)
      }
  return (
    <div>
        <h2 className="text-4xl font-bold text-center mt-20">View Our Supplies</h2>
        <hr className="border-2 w-3/4 mx-auto my-5" />
      <div className="py-5 grid md:grid-cols-3 gap-6 px-1">
        {content}
      </div>
    </div>
  );
};

export default SupplySection;
