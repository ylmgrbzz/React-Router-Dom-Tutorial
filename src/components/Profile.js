import React from "react";
import { useAuth } from "./Auth";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const handleLogout = () => {
    logout();
    navigate("/");
  };
  return (
    <div>
      <h1>Profile</h1>
      <p> welcome {user}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Profile;
