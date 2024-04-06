import React from "react";
import { Link, Outlet } from "react-router-dom";

const Product = () => {
  return (
    <>
      <div>
        <input type="search" placeholder="Enter product name" />
      </div>
      <nav>
        <Link to="featured">featured</Link>
        <Link to="new">new</Link>
      </nav>
      <Outlet />
    </>
  );
};

export default Product;
