import { Outlet } from "react-router-dom";
import Sidebar from "./SideBar/Sidebar";
import { useAppSelector } from "../../Redux/hooks";
import { useDeleteSupplyMutation } from "../../Redux/app/supply slice/supplyApi";

const DashBoard = () => {
  // --- deleting functions
  const deletedId = useAppSelector((state) => state.supplies);
  const[deleteSupply, {isSuccess}] = useDeleteSupplyMutation() ;
  const handleDelete = () => {
    deleteSupply(deletedId.deleteSupplyId)
  }
  if(isSuccess){
    console.log('Deleted !');
  }
  return (
    <div>
      <Sidebar />

      {/* -------------------- Dashboard Body Here ---------------------------- */}
      <div className="p-4 sm:ml-64">
        <Outlet />
      </div>

      {/* --- Modal --- */}
      <input type="checkbox" id="my_modal_7" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <h3 className="text-lg font-bold">Delete This Supply Post ?</h3>
          <div className="mt-5 text-right">
            <label htmlFor="my_modal_7"  onClick={handleDelete} className="btn btn-error me-3 text-white font-normal">
              Delete
            </label>
            <label htmlFor="my_modal_7" className="btn btn-neutral">
              Cancel
            </label>
          </div>
        </div>
        <label className="modal-backdrop" htmlFor="my_modal_7">
          Close
        </label>
      </div>
    </div>
  );
};

export default DashBoard;
