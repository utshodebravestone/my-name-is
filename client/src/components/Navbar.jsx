import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="px-6 py-3 bg-slate-50 shadow">
      <nav className="flex justify-between items-center">
        <h1 className="text-5xl font-light">my-name-is</h1>

        <ul className="flex gap-3">
          <li className="text-xl">
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

          <li className="text-xl">
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

          <li className="text-xl">
            <NavLink
              className={({ isActive }) =>
                `hover:text-slate-500 transition-colors duration-300 ${
                  isActive ? "text-slate-500 font-bold" : "text-black"
                }`
              }
              to="/signup"
            >
              SingUp
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
