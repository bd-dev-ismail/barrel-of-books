import { async } from "@firebase/util";
import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link, Outlet, useRouteError } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider/AuthProvider";
import { useAdmin } from "../hooks/useAdmin";
import { useSeller } from "../hooks/useSeller";
import Loader from "../Shared/Loader/Loader";
import Navbar from "../Shared/Navbar/Navbar";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const [isSeller] = useSeller(user?.email);
  // const {data: userr} = useQuery({
  //   queryKey: ['user'],
  //   queryFn: async()=> {
  //     const res = await fetch(`http://localhost:5000/user?email=${user?.email}`);
  //     const data = await res.json();
  //     return data;
  //   }
  // })
  // if(userr.role === 'Seller'){
  //  isSellerLoading(true);
  // }
  // if(userr.role === 'Admin'){
  //   isAdminLoading(true);
  // }
  const item = (
    <>
      {!isAdmin && (
        <li className="hover:bg-primary border mx-3 border-green-600 hover:text-white uppercase font-semibold">
          <Link to="/dashboard/my-orders">My Orders</Link>
        </li>
      )}
      {/* <li className="hover:bg-primary border mx-3 border-green-600 hover:text-white uppercase font-semibold">
        <Link to="/dashboard/wish-list">My Wishlist</Link>
      </li> */}
      
      {isSeller ? (
        <>
          {" "}
          
          <li className="hover:bg-primary border mx-3 border-green-600 hover:text-white uppercase font-semibold">
            <Link to="/dashboard/add-products">Add Products</Link>
          </li>
          <li className="hover:bg-primary border mx-3 border-green-600 hover:text-white uppercase font-semibold">
            <Link to="/dashboard/my-products">My Products</Link>
          </li>
        </>
      ) : undefined}
      {isAdmin && (
        <>
          <li className="hover:bg-primary border mx-3 border-green-600 hover:text-white uppercase font-semibold">
            <Link to="/dashboard/all-sellers">All Seller</Link>
          </li>
          <li className="hover:bg-primary border mx-3 border-green-600 hover:text-white uppercase font-semibold">
            <Link to="/dashboard/all-buyers">All Buyers</Link>
          </li>
          <li className="hover:bg-primary border mx-3 border-green-600 hover:text-white uppercase font-semibold">
            <Link to="/dashboard/report-product">Reported Products</Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <div>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <Navbar />
          {/* <!-- Navbar --> */}

          <div className="w-full container mx-auto navbar  justify-center">
            <div className="flex-none lg:hidden">
              <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="flex-1 px-2 mx-2 lg:hidden">Dashboard</div>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal">{item}</ul>
            </div>
          </div>
          {/* <!-- Page content here --> */}
          <div className="container mx-auto">
            <Outlet />
          </div>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100">
            {/* <!-- Sidebar content here --> */}
            {item}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
