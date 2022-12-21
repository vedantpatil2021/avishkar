import React from "react";
import Navbar from "../components/Navbar";
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

function Dashboard() {
  const { logOut, user, userRole } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/login");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <Navbar drawer="true" />
      {user && user.email}
      <br />
      {userRole}
      <br />
      <Button variant="primary" onClick={handleLogout}>
        Log out
      </Button>
    </div>
  );
}

export default Dashboard;