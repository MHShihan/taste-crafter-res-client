import { Outlet, useLocation } from "react-router-dom";
import NavAside from "../components/navRelated/NavAside";
import Navbar from "../shared/navbar/Navbar";
import Footer from "../shared/footer/Footer";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
  const location = useLocation();

  const noHeaderFooter =
    location.pathname.includes("/login") ||
    location.pathname.includes("/signUp");

  return (
    <>
      <div className="drawer ">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col ">
          {/* Navbar */}
          <Toaster></Toaster>
          {noHeaderFooter || <Navbar></Navbar>}

          {/* Page content here */}
          <main>
            <Outlet></Outlet>
          </main>
          {noHeaderFooter || (
            <footer>
              <Footer></Footer>
            </footer>
          )}
        </div>

        <NavAside></NavAside>
      </div>
    </>
  );
};

export default MainLayout;
