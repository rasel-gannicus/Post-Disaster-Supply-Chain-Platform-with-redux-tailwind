import { Outlet } from "react-router-dom";
import Sidebar from "./SideBar/Sidebar";

const DashBoard = () => {
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
            <button className="btn btn-error me-3 text-white font-normal">Delete</button>
            <label htmlFor="my_modal_7" className="btn btn-neutral" >Cancel</label>
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
