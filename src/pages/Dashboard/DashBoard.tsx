import { Outlet } from "react-router-dom";
import Sidebar from "./SideBar/Sidebar";
import { useAppSelector } from "../../Redux/hooks";
import { useDeleteSupplyMutation } from "../../Redux/app/supply slice/supplyApi";
import DeleteBox from "../../components/Modal Dialogue/DeleteBox";
import EditBox from "../../components/Modal Dialogue/EditBox";

const DashBoard = () => {
  // --- delete supply functionality
  const deletedId = useAppSelector((state) => state.supplies);
  const [deleteSupply, { isSuccess }] = useDeleteSupplyMutation();
  const handleDelete = () => {
    deleteSupply(deletedId.deleteSupplyId);
  };
  if (isSuccess) {
    console.log("Deleted !");
  }

  // --- edit supply functionality
  console.log(deletedId);

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
          {deletedId.editButtonClicked ? (
            <EditBox />
          ) : (
            <>
              <DeleteBox handleDelete={handleDelete} />
            </>
          )}
        </div>
        <label className="modal-backdrop" htmlFor="my_modal_7">
          Close
        </label>
      </div>
    </div>
  );
};

export default DashBoard;
