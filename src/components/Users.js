import React from "react";
import { Outlet } from "react-router-dom";

const Users = () => {
  return (
    <div>
      Users
      <ul>
        <li>user1</li>
        <li>user2</li>
        <li>user3</li>
      </ul>
      <Outlet />
    </div>
  );
};

export default Users;
