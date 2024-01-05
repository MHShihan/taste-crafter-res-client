import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { TiShoppingCart } from "react-icons/ti";
import useCart from "../../hooks/useCart";
import useAdmin from "../../hooks/useAdmin";

const NavItem = () => {
  const { logOut, user } = useAuth();
  const navigate = useNavigate();
  const [cart] = useCart();
  const [isAdmin] = useAdmin();

  const handleLogOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to log out?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Log Out Now!",
    }).then((result) => {
      if (result.isConfirmed) {
        logOut()
          .then(() => {
            Swal.fire({
              title: "Success!",
              text: "Log out successfully.",
              icon: "success",
            });
            navigate("/");
          })
          .catch((error) => console.log(error));
      }
    });
  };

  return (
    <>
      {/* Home */}
      <li>
        <NavLink
          to="/"
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "bold" : "medium",
              color: isActive ? "#EEFF25" : "white",
            };
          }}
        >
          Home
        </NavLink>
      </li>
      {/* Our Menu */}
      <li>
        <NavLink
          to="/menu"
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "bold" : "medium",
              color: isActive ? "#EEFF25" : "white",
            };
          }}
        >
          Our Menu
        </NavLink>
      </li>
      {/* Order Food */}
      <li>
        <NavLink
          to="/order/salad"
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "bold" : "medium",
              color: isActive ? "#EEFF25" : "white",
            };
          }}
        >
          Order Food
        </NavLink>
      </li>
      {/* Cart */}
      <li>
        <NavLink
          to={"/dashboard/cart"}
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "bold" : "medium",
              color: isActive ? "#EEFF25" : "white",
            };
          }}
        >
          <button className="flex">
            <span className="text-xl mr-1">
              <TiShoppingCart />
            </span>
            <div className="badge badge-secondary ">{cart.length}+</div>
          </button>
        </NavLink>
      </li>
      {/* Dashboard Home */}
      {user && isAdmin && (
        <li>
          <NavLink
            to={"/dashboard/adminHome"}
            style={({ isActive }) => {
              return {
                fontWeight: isActive ? "bold" : "medium",
                color: isActive ? "#EEFF25" : "white",
              };
            }}
          >
            Dashboard
          </NavLink>
        </li>
      )}
      {user && !isAdmin && (
        <li>
          <NavLink
            to={"/dashboard/userHome"}
            style={({ isActive }) => {
              return {
                fontWeight: isActive ? "bold" : "medium",
                color: isActive ? "#EEFF25" : "white",
              };
            }}
          >
            Dashboard
          </NavLink>
        </li>
      )}

      {/* Logout */}
      <li>
        {user ? (
          <>
            <button onClick={handleLogOut} className="font-medium text-white ">
              Log Out
            </button>
          </>
        ) : (
          <>
            <NavLink
              to="/login"
              style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "bold" : "bold",
                  color: isActive ? "white" : "white",
                };
              }}
            >
              Login
            </NavLink>
          </>
        )}
      </li>
    </>
  );
};

export default NavItem;
