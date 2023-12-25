import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const NavItem = () => {
  const { logOut, user } = useAuth();
  const navigate = useNavigate();

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
      <li>
        {user ? (
          <>
            <button onClick={handleLogOut} className="font-medium text-white ">
              LogOut
            </button>
          </>
        ) : (
          <>
            <NavLink
              to="/login"
              style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "bold" : "bold",
                  color: isActive ? "#EEFF25" : "white",
                };
              }}
            >
              Login
            </NavLink>
          </>
        )}
      </li>
      <li>
        <NavLink
          to="/signUp"
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "bold" : "medium",
              color: isActive ? "#EEFF25" : "white",
            };
          }}
        >
          SignUp
        </NavLink>
      </li>
    </>
  );
};

export default NavItem;
