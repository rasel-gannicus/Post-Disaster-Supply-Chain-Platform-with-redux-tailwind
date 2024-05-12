import { useParams } from "react-router-dom";
import { useGetSingleSupplyQuery } from "../../Redux/app/supply slice/supplyApi";
import './SingleSupplyDetails.css' ;

const SingleSupplyDetails = () => {
  const { id } = useParams();

  // --- Fetching data from server using Redux toolkit Query
  const { data, isLoading, isError, error } = useGetSingleSupplyQuery(id);

  return (
    <div className="flex flex-col min-h-screen justify-center items-center max-w-[1200px] mx-auto mt-32 mb-20 shadow-2xl px-2 md:px-5 rounded-2xl py-5">
      <img src={data?.img} alt="" className="mx-auto w-96 rounded-lg mb-10" />

      <table className="table-auto supply-details-table">
        <tbody>
          <tr>
            <td>
              <h2 className="text-lg">Item Name : </h2>
            </td>
            <td>
              <h2 className="text-2xl font-semibold">{data?.title}</h2>
            </td>
          </tr>
          <tr>
            <td>
              <h2 className="text-lg">Category : </h2>
            </td>
            <td>
              <h2 className="text-2xl font-semibold">{data?.category}</h2>
            </td>
          </tr>
          <tr>
            <td>
              <h2 className="text-lg">Needed Amount : </h2>{" "}
            </td>
            <td>
              <h2 className="text-2xl font-semibold text-blue-500">{data?.amount}</h2>
            </td>
          </tr>
          <tr>
            <td>
            <h2 className="text-lg">Description : </h2>
            </td>
            <td>
            <h2 className=" ">{data?.description}</h2>
            </td>
          </tr>
          <tr>
            <td>
            </td>
            <td>
            <button className="btn btn-neutral text-xl md:mt-10">Donate Now</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SingleSupplyDetails;
