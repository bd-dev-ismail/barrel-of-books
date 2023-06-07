import React, { useContext, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider/AuthProvider";
import { useAdmin } from "../hooks/useAdmin";

import { useSeller } from "../hooks/useSeller";
import Loader from "../Shared/Loader/Loader";

const SellerRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isSeller, isSellerLoading] = useSeller(user?.email);
  // const [isAdmin] = useAdmin(user?.email);
  const location = useLocation();

  if (loading || isSellerLoading) {
    return <Loader />;
  }

  if (user && isSeller) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default SellerRoute;
