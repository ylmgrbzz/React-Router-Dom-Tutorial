import React from "react";
import { Outlet, useSearchParams } from "react-router-dom";

const Users = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const showActiveUsers = searchParams.get("filter") === "active";

  return (
    <div>
      Users
      <ul>
        <li>user1</li>
        <li>user2</li>
        <li>user3</li>
      </ul>
      <Outlet />
      <div>
        <button
          onClick={() => {
            setSearchParams({ filter: "active" });
          }}
        >
          Active Users
        </button>
        <button
          onClick={() => {
            setSearchParams({});
          }}
        >
          Reset filter
        </button>
      </div>
      {showActiveUsers ? <div>Active Users</div> : <div>All Users</div>}
    </div>
  );
};

export default Users;
