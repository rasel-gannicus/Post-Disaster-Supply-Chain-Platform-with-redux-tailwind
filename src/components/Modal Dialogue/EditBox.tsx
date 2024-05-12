import {
  useAddNewSupplyMutation,
  useEditSupplyMutation,
  useGetSingleSupplyQuery,
} from "../../Redux/app/supply slice/supplyApi";
import { useAppSelector } from "../../Redux/hooks";

const EditBox = () => {
  const getEditSupplyId = useAppSelector(
    (state) => state.supplies.editSupplyId
  );

  // --- fetching single supply data using redux
  const { data, isLoading, isError, error } =
    useGetSingleSupplyQuery(getEditSupplyId);

  const [editSupplyPost, { data : editedData, isSuccess : isEditSuccess , isLoading : editLoading }] =
    useEditSupplyMutation();

  const handleSubmit = (e) => {
    e.preventDefault();

    const ongoingEditData = {
        title: e.target.title.value,
        img: e.target.img.value,
        category: e.target.category.value,
        amount: e.target.amount.value,
        description: e.target.description.value,
      }

    editSupplyPost({id : getEditSupplyId, data : ongoingEditData });
  };
  if(isEditSuccess){
    console.log(editedData);
  }
  return (
    <section className="">
      <div className="flex flex-col items-center justify-center px-6 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8 shadow-lg">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
              Edit Supply Post
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="title"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Supply Title
                </label>
                <input
                  defaultValue={data?.title}
                  type="title"
                  name="title"
                  //   onBlur={(e) => setTitle(e.target.value)}
                  id="title"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Medical Mask"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="img"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Image Url
                </label>
                <input
                  defaultValue={data?.img}
                  type="img"
                  name="img"
                  id="img"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="category"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Category
                </label>
                <input
                  defaultValue={data?.category}
                  type="category"
                  name="category"
                  id="category"
                  placeholder="Type a Category"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="amount"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Amount
                </label>
                <input
                  defaultValue={data?.amount}
                  type="number"
                  name="amount"
                  id="amount"
                  placeholder="Enter the quantity in number"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="description"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Description
                </label>
                <textarea
                  defaultValue={data?.description}
                  name="description"
                  id="description"
                  placeholder="Write a short description here"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <button
                // disabled={editedData?.modifiedCount === 1}
                type="submit"
                className="btn w-full text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-primary-800 "
              >
                {isLoading ? "Editing Supply" : "Edit Post"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditBox;
