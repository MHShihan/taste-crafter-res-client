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
        <ul className="menu p-4 w-80 min-h-full bg-base-200">
          {/* Sidebar content here */}
          <NavItem></NavItem>
        </ul>
      </div>
    </>
  );
};

export default NavAside;
