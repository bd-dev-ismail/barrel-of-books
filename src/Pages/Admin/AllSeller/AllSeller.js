import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import Loader from '../../../Shared/Loader/Loader';
import ConfrimDelete from './ConfrimDelete';

const AllSeller = () => {
  const [removeSeller, setRemoveSeller] = useState(null);
  const closeModal = () => {
    return  setRemoveSeller(null);
  };
  const { data: sellers, isLoading, refetch } = useQuery({
    queryKey: ["seller"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/seller`);
      const data = await res.json();
      return data;
    }
  });
  const handalDelete = (sellerr) => {
    
    fetch(`http://localhost:5000/seller/${sellerr?._id}`, {
      method: 'DELETE',
      
    })
    .then(res => res.json())
    .then(data => {
      if (data.deletedCount > 0) {
        refetch();
        toast.warning("Delete Seller Successfully!");
      }
    })
  }
    return (
      <div>
        <h3 className="text-3xl font-semibold my-5">All Sellers</h3>
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
                {sellers?.map((seller, idx) => (
                  <tr key={seller?._id}>
                    <th>
                      <label>{idx + 1}</label>
                    </th>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={seller?.image}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      {" "}
                      <p className="font-bold">{seller?.name}</p>
                    </td>
                    <td>{seller?.email}</td>
                    <th>
                      <label
                        onClick={() => setRemoveSeller(seller)}
                        htmlFor="confrimDelete"
                        className="btn btn-sm btn-error text-white"
                      >
                        Delete
                      </label>
                    </th>
                  </tr>
                ))}
              </tbody>
            )}
          </table>
        </div>
        {removeSeller && (
        <ConfrimDelete
          successAction={handalDelete}
          removeSeller={removeSeller}
          closeModal={closeModal}
          title="Are You Sure? You Want to Delete?"
        />
        )}
      </div>
    );
};

export default AllSeller;