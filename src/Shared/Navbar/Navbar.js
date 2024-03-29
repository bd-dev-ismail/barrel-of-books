import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const handelLogOut = () => {
    logout().then(() => {
      navigate("/");
      localStorage.removeItem("accessToken");
      toast.error("Logout Successfull !!");
    });
  };
  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/categories");
      const data = await res.json();
      return data;
    },
  });

  const menuItem = (
    <>
      <li className="text-white uppercase font-semibold hover:text-gray-700">
        <Link to="/">Home</Link>
      </li>
      <li>
        <div className="dropdown dropdown-hover">
          <label
            tabIndex={0}
            className="text-white uppercase font-semibold hover:text-gray-700 m-1"
          >
            Categoreis
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-200 rounded-box w-52"
          >
            {categories.map((category) => (
              <li key={category._id}>
                <Link to={`/categoriesById/${category._id}`}>
                  {category?.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* <Link to="/">Categories</Link> */}
      </li>

      <li className="text-white uppercase font-semibold hover:text-gray-700">
        <Link to="/blog">Blog</Link>
      </li>
      {user?.uid ? (
        <>
          <li className="text-white uppercase font-semibold hover:text-gray-700">
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <button
              onClick={handelLogOut}
              className="dropShadow py-[6px] px-[14px] font-semibold cursor-pointer hover:bg-gray-700 hover:border-gray-700 uppercase text-white border"
            >
              Logout
            </button>
          </li>
        </>
      ) : (
        <li>
          <Link to="/login">
            <button className="dropShadow py-[6px] px-[14px] font-semibold cursor-pointer hover:bg-gray-700 hover:border-gray-700 uppercase text-white border">
              Login
            </button>
          </Link>
        </li>
      )}
    </>
  );
  return (
    <div className="bg-primary">
      <div className="px-4 py-4 container mx-auto md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          <Link
            to="/"
            aria-label="Company"
            title="Company"
            className="inline-flex items-center"
          >
            <img src={logo} alt="" className="w-11" />
            <span className="ml-2 text-xl font-bold tracking-wide text-white uppercase">
              Barrel Of Books
            </span>
          </Link>
          <ul className="flex items-center hidden space-x-8 lg:flex">
            {menuItem}
          </ul>
          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-white" viewBox="0 0 24 24">
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
            </button>
            {isMenuOpen && (
              <div className="absolute z-10 top-0 left-0 w-full">
                <div className="p-5 bg-primary border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <Link
                        to="/"
                        aria-label="Company"
                        title="Company"
                        className="inline-flex items-center"
                      >
                        <img src={logo} alt="" className="w-10" />
                        <span className="ml-2 text-xl font-bold tracking-wide text-white uppercase">
                          Barrel Of Books
                        </span>
                      </Link>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200  focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-white" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">{menuItem}</ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
