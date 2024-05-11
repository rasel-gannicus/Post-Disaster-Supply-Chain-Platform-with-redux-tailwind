import { Outlet } from "react-router-dom";
import Sidebar from "./SideBar/Sidebar";


const DashBoard = () => {
    return (
        <div>
        <Sidebar />

        {/* -------------------- Dashboard Body Here ---------------------------- */}
        <div className="p-4 sm:ml-64">
  
            <h2>hello world</h2>
            <Outlet />
          
        </div>
      </div>
    );
};

export default DashBoard;