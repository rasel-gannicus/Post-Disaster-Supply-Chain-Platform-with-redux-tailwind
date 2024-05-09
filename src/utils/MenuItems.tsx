export const MenuItems = ({ classes }) => {
  return (
    <ul className={classes}>
      <li>
        <a>All Supplies</a>
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
            <li>
              <a>Login</a>
            </li>
          </ul>
        </details>
      </li>
    </ul>
  );
};
