import { Outlet } from "react-router-dom";
import NavAside from "../components/navRelated/NavAside";
import Navbar from "../shared/navbar/Navbar";
import Footer from "../shared/footer/Footer";

const MainLayout = () => {
  return (
    <>
      <div className="drawer ">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col ">
          {/* Navbar */}

          <Navbar></Navbar>

          {/* Page content here */}
          <main>
            <Outlet></Outlet>
          </main>
          <footer>
            <Footer></Footer>
          </footer>
        </div>

        <NavAside></NavAside>
      </div>
    </>
  );
};

export default MainLayout;
