import { NavLink } from "react-router-dom";

export const MenuItems = ({ classes }) => {
  return (
    <ul className={classes}>
      <li className="md:me-5">
        <NavLink to="/supplies" className='bg-gray-200 font-medium'>
          <a className="">All Supplies</a>
        </NavLink>
      </li>
      <li>
        <details>
          <summary>
            <div className="w-5 h-5 rounded-full flex gap-2">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                className="rounded-full"
              />
              <p className="md:hidden">Profile</p>
            </div>
          </summary>
          <ul className="p-2">
            <li className=" my-2">
              <NavLink to='/dashboard'>Dashboard</NavLink>
            </li>
            <hr className="mx-auto" />
            <li>
              <NavLink to='/login'>Login</NavLink>
            </li>
          </ul>
        </details>
      </li>
    </ul>
  );
};
