import { useNavigate } from "react-router-dom";
import { useGetAllSuppliesQuery } from "../../../Redux/app/supply slice/supplyApi";
import { useAppDispatch, useAppSelector } from "../../../Redux/hooks";
import {
  clickEdit,
  getDeletedId,
  setEditId,
} from "../../../Redux/app/supply slice/supplySlice";

const AllSuppliesDashboard = () => {
  const navigate = useNavigate();

  // --- enabling deleting functions
  const dispatch = useAppDispatch();

  const handleDelete = (id: string) => {
    dispatch(clickEdit(false));
    dispatch(getDeletedId(id));
  };

  // --- enabling edit functions
  const enableEdit = (id) => {
    dispatch(clickEdit(true));
    dispatch(setEditId(id)) ;
  };

  // --- Fetching data from server using Redux toolkit Query
  const { data, isLoading, isError, error } = useGetAllSuppliesQuery(undefined);

  let content = null;
  if (isLoading && !isError) {
    content = <h1>Loading...</h1>;
  }
  if (!isLoading && isError) {
    content = <p>Error happened</p>;
  }
  if (!isLoading && !isError && data.length === 0) {
    content = <p>No Supply Found</p>;
  }
  if (!isLoading && !isError && data.length > 0) {
    content = data.map((item) => (
      <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          {item.title}
        </th>
        <td className="px-6 py-4">{item.category}</td>
        <td className="px-6 py-4">{item.amount}</td>
        <td className="px-6 py-4 flex flex-col gap-1 md:flex md:flex-row">
          <label
            onClick={() => enableEdit(item._id)}
            htmlFor="my_modal_7"
            className="btn btn-xs btn-warning font-normal"
          >
            Edit
          </label>
          <label
            onClick={() => handleDelete(item._id)}
            htmlFor="my_modal_7"
            className="btn btn-xs btn-neutral text-white font-normal ms-1"
          >
            Delete
          </label>
        </td>
      </tr>
    ));
  }

  return (
    <div>
      <h2 className="mt-10 text-center text-4xl font-semibold">
        All Supply List
      </h2>
      <hr className="border-2 w-3/4 mx-auto mt-3 mb-8" />

      <div className="text-center">
        <button
          onClick={() => navigate("/dashboard/create-supply")}
          className="btn btn-lg  mb-10 mx-auto text-center hover:btn-neutral"
        >
          Add New Supply
        </button>
      </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mb-40">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Supply name
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Amount
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>{content}</tbody>
        </table>
      </div>
    </div>
  );
};

export default AllSuppliesDashboard;
