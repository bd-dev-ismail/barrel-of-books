import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loader from '../../../Shared/Loader/Loader';

const AllBuyer = () => {
     const { data: buyers, isLoading } = useQuery({
       queryKey: ["buyer"],
       queryFn: async () => {
         const res = await fetch(`http://localhost:5000/buyer`);
         const data = await res.json();
         return data;
       },
     });
    return (
      <div>
        <h3 className="text-3xl font-semibold my-5">All buyers</h3>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Image</th>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            {isLoading ? (
              <Loader />
            ) : (
              <tbody>
                {buyers?.map((buyer, idx) => (
                  <tr key={buyer?._id}>
                    <th>
                      <label>{idx + 1}</label>
                    </th>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={buyer?.image}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      {" "}
                      <div className="font-bold">{buyer?.name}</div>
                    </td>
                    <td>{buyer?.email}</td>
                    <th>
                      <button className="btn btn-secondary text-white btn-sm">
                        Delete Buyer
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

export default AllBuyer;