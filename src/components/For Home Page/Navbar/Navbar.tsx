import { MenuItems } from "../../../utils/MenuItems";

const Navbar = () => {
  return (
    <div className="navbar z-40 bg-base-100 lg:w-3/4 mx-auto shadow-lg lg:rounded lg:mt-3 absolute top-0 left-0 right-0 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <MenuItems
            classes={
              "menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            }
          />
        </div>

        <div className="flex gap-1 navbar-center justify-center items-center">
          {/* --- Navbar Logo --- */}
          <div className=" order-2 md:order-1 border-[3px] w-10 h-10 border-slate-400 rounded-full p-1 mr-2 overflow-hidden">
            <img src="logo.png" className="" alt="" />
          </div>

          <p className=" oder-1 md:order-2 font-semibold lg:text-2xl">
            Community Health
          </p>
        </div>
      </div>

      <div className="navbar-center hidden lg:flex lg:flex-1 lg:justify-end ">
        <MenuItems classes={"menu menu-horizontal px-1"} />
      </div>
      {/* <div className="navbar-end">
        <a className="btn">Button</a>
      </div> */}
    </div>
  );
};

export default Navbar;
