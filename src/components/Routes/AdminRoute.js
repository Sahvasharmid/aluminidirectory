
import React, { useContext, useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContextProvider } from "../../utils/AuthContext";
import axios from "axios";

function AdminRoute() {
  const [ok, setOk] = useState(false);
  const [loading, setLoading] = useState(true);
  const { auth } = useContext(AuthContextProvider);

  useEffect(() => {
    const authCheck = async () => {
      try {
        const res = await axios.get("https://aluminidirectorybackend.onrender.com/adminroute", {
          headers: { Authorization: `Bearer ${auth?.token}` },
        });
        setOk(res.data.ok);
      } catch (err) {
        console.error("An error occurred:", err);
        setOk(false);
      } finally {
        setLoading(false);
      }
    };

    if (auth?.token) authCheck();
    else setLoading(false);
  }, [auth?.token]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return ok ? <Outlet /> : <Navigate to="/" replace />;
}

export default AdminRoute;
