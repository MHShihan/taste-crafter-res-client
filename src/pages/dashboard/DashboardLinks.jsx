import {
  FaBook,
  FaCalendar,
  FaHome,
  FaList,
  FaShoppingBag,
  FaShoppingCart,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";
import { BiSolidCommentEdit } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { GiWallet } from "react-icons/gi";
import { IoCalendar } from "react-icons/io5";
import { TiThMenu } from "react-icons/ti";
import { MdEmail } from "react-icons/md";
import useAdmin from "../../hooks/useAdmin";
import useCart from "../../hooks/useCart";

const DashboardLinks = () => {
  const [cart] = useCart();
  const [isAdmin] = useAdmin();

  return (
    <>
      {isAdmin ? (
        // Admin Nav Links
        <>
          {/* Admin Home */}
          <li>
            <NavLink
              to="/dashboard/adminHome"
              style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "500" : "500",
                  color: isActive ? "#FFF" : "#151515",
                  background: "transparent",
                  fontFamily: "cinzel",
                };
              }}
            >
              <span className="text-lg">
                <FaHome />
              </span>
              Admin Home
            </NavLink>
          </li>
          {/* Admin Cart */}
          <li>
            <NavLink
              to="/dashboard/cart"
              style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "500" : "500",
                  color: isActive ? "#FFF" : "#151515",
                  background: "transparent",
                  fontFamily: "cinzel",
                };
              }}
            >
              <span className="text-lg">
                <FaShoppingCart />
              </span>
              Admin Cart ({cart.length})
            </NavLink>
          </li>
          {/* Add Items */}
          <li>
            <NavLink
              to="/dashboard/addItems"
              style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "500" : "500",
                  color: isActive ? "#FFF" : "#151515",
                  background: "transparent",
                  fontFamily: "cinzel",
                };
              }}
            >
              <span className="text-lg">
                <FaUtensils></FaUtensils>
              </span>
              Add Items
            </NavLink>
          </li>
          {/* Manage Item */}
          <li>
            <NavLink
              to="/dashboard/manageItems"
              style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "500" : "500",
                  color: isActive ? "#FFF" : "#151515",
                  background: "transparent",
                  fontFamily: "cinzel",
                };
              }}
            >
              <span className="text-lg">
                <FaList></FaList>
              </span>
              Manage Items
            </NavLink>
          </li>
          {/*  Manage Bookings*/}
          <li>
            <NavLink
              to="/dashboard/manageBookings"
              style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "500" : "500",
                  color: isActive ? "#FFF" : "#151515",
                  background: "transparent",
                  fontFamily: "cinzel",
                };
              }}
            >
              <span className="text-lg">
                <FaBook />
              </span>
              Manage Bookings
            </NavLink>
          </li>
          {/* All Users*/}
          <li>
            <NavLink
              to="/dashboard/users"
              style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "500" : "500",
                  color: isActive ? "#FFF" : "#151515",
                  background: "transparent",
                  fontFamily: "cinzel",
                };
              }}
            >
              <span className="text-lg">
                <FaUsers />
              </span>
              All Users
            </NavLink>
          </li>
        </>
      ) : (
        // General user nav links
        <>
          {/* User Home */}
          <li>
            <NavLink
              to="/dashboard/userHome"
              style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "500" : "500",
                  color: isActive ? "#FFF" : "#151515",
                  background: "transparent",
                  fontFamily: "cinzel",
                };
              }}
            >
              <span className="text-lg">
                <FaHome />
              </span>
              User Home
            </NavLink>
          </li>
          {/* Reservation */}
          <li>
            <NavLink
              to="/dashboard/reservation"
              style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "500" : "500",
                  color: isActive ? "#FFF" : "#151515",
                  background: "transparent",
                  fontFamily: "cinzel",
                };
              }}
            >
              <span className="text-lg">
                <FaCalendar></FaCalendar>
              </span>
              Reservation
            </NavLink>
          </li>
          {/* Payment History */}
          <li>
            <NavLink
              to="/dashboard/paymentHistory"
              style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "500" : "500",
                  color: isActive ? "#FFF" : "#151515",
                  background: "transparent",
                  fontFamily: "cinzel",
                };
              }}
            >
              <span className="text-lg">
                <GiWallet />
              </span>
              Payment History
            </NavLink>
          </li>
          {/*  My cart*/}
          <li>
            <NavLink
              to="/dashboard/cart"
              style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "500" : "500",
                  color: isActive ? "#FFF" : "#151515",
                  background: "transparent",
                  fontFamily: "cinzel",
                };
              }}
            >
              <span className="text-lg">
                <FaShoppingCart />
              </span>
              My Cart ({cart.length})
            </NavLink>
          </li>
          {/* Add Review */}
          <li>
            <NavLink
              to="/dashboard/addReview"
              style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "500" : "500",
                  color: isActive ? "#FFF" : "#151515",
                  background: "transparent",
                  fontFamily: "cinzel",
                };
              }}
            >
              <span className="text-lg">
                <BiSolidCommentEdit />
              </span>
              Add Review
            </NavLink>
          </li>
          {/* My Bookings */}
          <li>
            <NavLink
              to="/dashboard/myBookings"
              style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "500" : "500",
                  color: isActive ? "#FFF" : "#151515",
                  background: "transparent",
                  fontFamily: "cinzel",
                };
              }}
            >
              <span className="text-lg">
                <IoCalendar />
              </span>
              My Bookings
            </NavLink>
          </li>
        </>
      )}

      <div className="divider bg-transparent "></div>

      {/* Shared Nav links */}
      {/* Home */}
      <li>
        <NavLink
          to="/"
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "500" : "500",
              color: isActive ? "#FFF" : "#151515",
              background: "transparent",
              fontFamily: "cinzel",
            };
          }}
        >
          <span className="text-lg">
            <FaHome />
          </span>
          Home
        </NavLink>
      </li>
      {/* Our Menu */}
      <li>
        <NavLink
          to="/menu"
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "500" : "500",
              color: isActive ? "#FFF" : "#151515",
              background: "transparent",
              fontFamily: "cinzel",
            };
          }}
        >
          <span className="text-lg">
            <TiThMenu />
          </span>
          Our Menu
        </NavLink>
      </li>
      {/* Order */}
      <li>
        <NavLink
          to="/order/salad"
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "500" : "500",
              color: isActive ? "#FFF" : "#151515",
              background: "transparent",
              fontFamily: "cinzel",
            };
          }}
        >
          <span className="text-lg">
            <FaShoppingBag />
          </span>
          Order Food
        </NavLink>
      </li>
      {/* Contact */}
      <li>
        <NavLink
          to="/order/contact"
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "500" : "500",
              color: isActive ? "#FFF" : "#151515",
              background: "transparent",
              fontFamily: "cinzel",
            };
          }}
        >
          <span className="text-lg">
            <MdEmail />
          </span>
          Contact
        </NavLink>
      </li>
    </>
  );
};

export default DashboardLinks;
