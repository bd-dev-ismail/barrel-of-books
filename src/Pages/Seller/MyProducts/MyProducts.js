import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import Loader from '../../../Shared/Loader/Loader';

const MyProducts = () => {
  const { user } = useContext(AuthContext);
  const { data: myProducts, isLoading } = useQuery({
    queryKey: ["myProducts", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/products?email=${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });
    return (
      <div>
        <h3 className="text-3xl font-semibold my-5">All Products</h3>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Product Category</th>
                <th>Publish Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            {isLoading ? (
              <Loader />
            ) : (
              <tbody>
                {myProducts?.map((proudct, idx) => (
                  <tr key={proudct?._id}>
                    <th>
                      <label>{idx + 1}</label>
                    </th>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={proudct?.productImage}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">
                            {proudct?.productName}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{proudct?.productCategoryId}</td>
                    <td>{proudct?.date}</td>
                    <td>Available</td>
                    <th>
                      <button className="btn btn-primary text-white btn-sm">
                        Advetisement
                      </button>
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

export default MyProducts;