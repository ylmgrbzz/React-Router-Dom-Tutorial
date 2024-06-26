import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "./Auth";

export const Navbar = () => {
  const { user, logout } = useAuth();
  const navStyles = ({ isActive }) => {
    return {
      color: isActive ? "red" : "blue",
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "underline" : "none",
    };
  };

  return (
    <nav>
      {/* <Link to="/">Home</Link>
      <Link to="/about">About</Link>    */}
      <NavLink style={navStyles} to="/">
        Home
      </NavLink>
      <NavLink style={navStyles} to="/about">
        About
      </NavLink>
      <NavLink style={navStyles} to="/order-summary">
        Order Summary
      </NavLink>
      <NavLink style={navStyles} to="/product">
        Product{" "}
      </NavLink>
      <NavLink style={navStyles} to="/profile">
        Profile{" "}
      </NavLink>
      {!user && (
        <NavLink style={navStyles} to="/login">
          Login
        </NavLink>
      )}
    </nav>
  );
};
