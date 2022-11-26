import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import Loader from '../../Shared/Loader/Loader';

const MyOrders = () => {
  const {user} = useContext(AuthContext);
  const {data: orders, isLoading} = useQuery({
    queryKey: ['orders', user?.email],
    queryFn: async()=> {
      const res = await fetch(
        `http://localhost:5000/orders?email=${user?.email}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      const data = await res.json();
      return data;
    }
  })
    return (
      <div>
        <h3 className="text-3xl text-center font-semibold my-5">
          My <span className="text-primary">Orders</span>
          <p className='my-5'>Your Total order is {orders?.length}</p>
        </h3>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Price</th>
                <th>Meeting Location</th>
                <th>Action</th>
              </tr>
            </thead>
            {isLoading ? (
              <Loader />
            ) : (
              <tbody>
                {orders?.map((order, idx) => (
                  <tr key={order?._id}>
                    <th>
                      <label>{idx + 1}</label>
                    </th>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={order?.bookImage}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{order?.bookName}</div>
                        </div>
                      </div>
                    </td>
                    <td>${order?.bookPrice}</td>
                    <td>{order?.location}</td>
                    <th>
                      {order?.sold ? (
                        <Link >
                          <button disabled className="btn btn-primary text-white btn-sm">
                            paid
                          </button>
                        </Link>
                      ) : (
                        <Link to={`/dashboard/payment/${order?._id}`}>
                          <button className="btn btn-primary text-white btn-sm">
                            pay
                          </button>
                        </Link>
                      )}
                    </th>
                  </tr>
                ))}
              </tbody>
            )}
          </table>
        </div>
      </div>
    );
};

export default MyOrders;