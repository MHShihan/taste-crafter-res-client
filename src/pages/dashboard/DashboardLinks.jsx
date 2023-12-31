import {
  FaCalendar,
  FaHome,
  FaShoppingBag,
  FaShoppingCart,
} from "react-icons/fa";
import { BiSolidCommentEdit } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { GiWallet } from "react-icons/gi";
import { IoCalendar } from "react-icons/io5";
import { TiThMenu } from "react-icons/ti";

const DashboardLinks = () => {
  return (
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
          My Cart
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
            <IoCalendar />
          </span>
          My Bookings
        </NavLink>
      </li>

      {/* divide  */}
      <div className="divider"></div>
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
    </>
  );
};

export default DashboardLinks;
