import { NavLink } from "react-router-dom";
import NavItem from "../../components/navRelated/NavItem";

const Navbar = () => {
  return (
    <div className=" fixed top-0 z-10 w-full  bg-black bg-opacity-30">
      <div className="w-full navbar flex justify-between max-w-7xl mx-auto  ">
        <div className="flex-none lg:hidden text-white">
          <label
            htmlFor="my-drawer-3"
            aria-label="open sidebar"
            className="btn btn-square btn-ghost"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-6 h-6 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </div>
        <div className="  text-white  ">
          <div>
            <h1 className="font-cinzel lg:text-3xl font-extrabold ">
              TASTE CRAFTER
            </h1>
            <h3 className="font-cinzel lg:text-3xl font-bold ">
              R e s t a u r a n t
            </h3>
          </div>
        </div>
        <div className="flex-none hidden lg:block justify-center">
          <ul className="menu menu-horizontal font-inter ">
            {/* Navbar menu content here */}
            <NavItem></NavItem>
          </ul>
        </div>
        <div className="justify-end">
          <NavLink to="/donate">
            <a className="btn pb-2 bg-transparent text-white text-2xl hover:bg-gray-900 hover:border-transparent">
              Donate
            </a>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
