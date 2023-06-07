import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import AllBuyer from "../Pages/Admin/AllBuyer/AllBuyer";
import AllSeller from "../Pages/Admin/AllSeller/AllSeller";
import ReportItem from "../Pages/Admin/ReportItem/ReportItem";
import Blog from "../Pages/Blog/Blog";
import CategoriesById from "../Pages/Categories/CategoriesById";
import Dashboard from "../Pages/Dashboard/Dashboard";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import MyOrders from "../Pages/MyOrders/MyOrders";
import MyWishList from "../Pages/MyOrders/MyWishList";
import Payment from "../Pages/Payment/Payment";
import Register from "../Pages/Register/Register";
import AddProducts from "../Pages/Seller/AddProducts/AddProducts";
import MyProducts from "../Pages/Seller/MyProducts/MyProducts";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";
import SellerRoute from "./SellerRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/categoriesById/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/categories/${params.id}`, {
            headers: {
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          }),
        element: (
          <PrivateRoute>
            <CategoriesById />
          </PrivateRoute>
        ),
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/dashboard",
    errorElement: <ErrorPage />,
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/my-orders",
        element: <MyOrders />,
      },

      {
        path: "/dashboard/wish-list",
        element: <MyWishList />,
      },
      {
        path: "/dashboard/add-products",
        element: (
          <SellerRoute>
            <AddProducts />
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/my-products",
        element: (
          <SellerRoute>
            <MyProducts />
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/all-sellers",
        element: (
          <AdminRoute>
            <AllSeller />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/all-buyers",
        element: (
          <AdminRoute>
            <AllBuyer />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/report-product",
        element: (
          <AdminRoute>
            <ReportItem />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/payment/:id",
        element: <Payment />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/orders/${params.id}`, {
            headers: {
              "Content-Type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          }),
      },
    ],
  },
]);

export default router;
