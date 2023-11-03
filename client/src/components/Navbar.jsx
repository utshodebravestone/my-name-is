import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="px-6 py-3 bg-slate-50 shadow">
      <nav className="flex justify-between items-center">
        <h1 className="text-4xl font-medium">my-name-is</h1>

        <ul className="flex gap-2">
          <li className="text-normal">
            <NavLink
              className={({ isActive }) =>
                `hover:text-slate-500 transition-colors duration-300 ${
                  isActive ? "text-slate-500 font-bold" : "text-black"
                }`
              }
              to="/home"
            >
              Home
            </NavLink>
          </li>

          <li className="text-normal">
            <NavLink
              className={({ isActive }) =>
                `hover:text-slate-500 transition-colors duration-300 ${
                  isActive ? "text-slate-500 font-bold" : "text-black"
                }`
              }
              to="/about"
            >
              About
            </NavLink>
          </li>

          <li className="text-normal">
            <NavLink
              className={({ isActive }) =>
                `px-6 py-3  rounded font-bold border border-blue-500 hover:text-blue-500 hover:bg-transparent transition-colors duration-300 ${
                  isActive
                    ? "bg-transparent text-blue-500"
                    : "bg-blue-500 text-white"
                }`
              }
              to="/signup"
            >
              Sign Up
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
