import { useEffect, useState } from "react";

export const useSeller = (email) => {
  const [isSeller, setIsSeller] = useState(false);
  const [isSellerLoading, setIsSellerLoading] = useState(true);
  useEffect(() => {
    if (email) {
      fetch(`http://localhost:5000/sellerrole?email=${email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.role === "Seller") {
            setIsSeller(true);
            setIsSellerLoading(false);
          }
        });
    }
  }, [email]);
  return [isSeller, isSellerLoading];
};
