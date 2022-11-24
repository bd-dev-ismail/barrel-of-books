import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';

const DashboardLayout = () => {
    return (
      <div>
        <Navbar />
        <div className="container mx-auto">
          <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              <div className="text-center">
                <label
                  htmlFor="my-drawer-2"
                  className="btn btn-primary my-5  drawer-button lg:hidden text-white"
                >
                  <svg className="w-5 text-white mr-3" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                    />
                    <path
                      fill="currentColor"
                      d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                    />
                    <path
                      fill="currentColor"
                      d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                    />
                  </svg>
                  Open Dashboard
                </label>
              </div>
              <Outlet />
            </div>
            <div className="drawer-side">
              <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
              <ul className="menu p-4 w-80 bg-base-100 text-base-content ">
                {/* <!-- Sidebar content here --> */}
                <li className="hover:bg-primary hover:text-white uppercase font-semibold">
                  <Link to="/dashboard">My Orders</Link>
                </li>
                <li className="hover:bg-primary hover:text-white uppercase font-semibold">
                  <Link to="/dashboard/wish-list">My Wishlist</Link>
                </li>
                <li className="hover:bg-primary hover:text-white uppercase font-semibold">
                  <Link to="/dashboard/add-products">Add Products</Link>
                </li>
                <li className="hover:bg-primary hover:text-white uppercase font-semibold">
                  <Link to="/dashboard/my-products">My Products</Link>
                </li>
                <li className="hover:bg-primary hover:text-white uppercase font-semibold">
                  <Link to="/dashboard/all-sellers">All Seller</Link>
                </li>
                <li className="hover:bg-primary hover:text-white uppercase font-semibold">
                  <Link to="/dashboard/all-buyers">All Buyers</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
};

export default DashboardLayout;