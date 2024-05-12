import { NavLink } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-section flex justify-center items-center">
      <div className="banner-shadow bg-slate-800 z-10"></div>
      <div className=" z-50 relative flex gap-4 flex-col justify-center items-center">
        <h2 className="text-white text-4xl lg:text-5xl font-bold text-center mb-10">
          Community Health and <br /> Medical Supply Chain Platform
        </h2>
        <div className="flex justify-center items-center gap-5 ">
          <NavLink
            to="/supplies"
            className="btn bg-regal-red border-none text-white text-lg hover:text-black"
          >
            All Supplies
          </NavLink>
          <NavLink
            to="/login"
            className="btn btn-outline border-white text-white min-w-32 text-lg hover:btn-warning"
          >
            Login
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Banner;
