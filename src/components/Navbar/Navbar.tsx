import { MenuItems } from "../../utils/MenuItems";

const Navbar = () => {
  const menuItem = (
    <ul className="menu menu-horizontal px-1">
      <li>
        <a>Item 1</a>
      </li>
      <li>
        <details>
          <summary>Parent</summary>
          <ul className="p-2">
            <li>
              <a>Submenu 1</a>
            </li>
            <li>
              <a>Submenu 2</a>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <a>Item 3</a>
      </li>
    </ul>
  );
  return (
    // <div className="navbar lg:w-3/4 mx-auto shadow-lg rounded lg:mt-3">
    //   {/* --- Navbar Logo --- */}
    //   <div className="flex-1 items-center">
    //     <div className="border-[3px] w-10 h-10 border-slate-400 rounded-full p-1 mr-2 overflow-hidden">
    //       <img src="logo.png" className="" alt="" />
    //     </div>

    //     <p className="font-semibold text-2xl">Community Health</p>
    //   </div>
    //   <div className="flex-none gap-2">
    //     <div className="">
    //       <p>All Supplies</p>
    //     </div>
    //     <div className="dropdown dropdown-end">
    //       <div
    //         tabIndex={0}
    //         role="button"
    //         className="btn btn-ghost btn-circle avatar"
    //       >
    //         <div className="w-10 rounded-full">
    //           <img
    //             alt="Tailwind CSS Navbar component"
    //             src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
    //           />
    //         </div>
    //       </div>
    //       <ul
    //         tabIndex={0}
    //         className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
    //       >
    //         <li>
    //           <a className="justify-between">
    //             Profile
    //             <span className="badge">New</span>
    //           </a>
    //         </li>
    //         <li>
    //           <a>Settings</a>
    //         </li>
    //         <li>
    //           <a>Logout</a>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </div>
    <div className="navbar bg-base-100 lg:w-3/4 mx-auto shadow-lg rounded lg:mt-3">
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
          <MenuItems classes={'menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'} />
          {/* <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul> */}
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

      <div className="navbar-center hidden lg:flex">
        <MenuItems classes={'menu menu-horizontal px-1'} />
      </div>
      {/* <div className="navbar-end">
        <a className="btn">Button</a>
      </div> */}
    </div>
  );
};

export default Navbar;
