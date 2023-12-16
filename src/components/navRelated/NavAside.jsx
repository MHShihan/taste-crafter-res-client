import NavItem from "./NavItem";

const NavAside = () => {
  return (
    <>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu  w-80 min-h-full  bg-black bg-opacity-80 pt-20 pl-16">
          {/* Sidebar content here */}
          <NavItem></NavItem>
        </ul>
      </div>
    </>
  );
};

export default NavAside;
