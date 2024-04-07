import React, { useState } from "react";
import { useAuth } from "./Auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    auth.login(user);
    navigate("/");
  };

  return (
    <div>
      <input
        type="text"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
