import { useEffect, useState } from "react";

export const useAdmin = (email) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAdminLoading, setIsAdminLoading] = useState(true);
  useEffect(() => {
    if (email) {
      fetch(`http://localhost:5000/admin?email=${email}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.role === "Admin") {
            console.log(data);
            setIsAdmin(true);
            setIsAdminLoading(false);
          }
        });
    }
  }, [email]);
  return [isAdmin, isAdminLoading];
};
