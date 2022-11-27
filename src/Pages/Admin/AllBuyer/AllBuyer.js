import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import Loader from '../../../Shared/Loader/Loader';
import ConfrimDelete from '../AllSeller/ConfrimDelete';

const AllBuyer = () => {
  const [removeBuyer, setRemoveBuyer] = useState(null);
  const closeModal = () => {
    return setRemoveBuyer(null);
  };
     const { data: buyers, isLoading , refetch} = useQuery({
       queryKey: ["buyer"],
       queryFn: async () => {
         const res = await fetch(`http://localhost:5000/buyer`, {
           headers: {
             authorization: `Bearer ${localStorage.getItem("accessToken")}`,
           },
         });
         const data = await res.json();
         return data;
       },
     });
     const handalDelete = (buyer) => {
       fetch(`http://localhost:5000/buyer/${buyer?._id}`, {
         method: "DELETE",
         headers: {
           authorization: `Bearer ${localStorage.getItem("accessToken")}`,
         },
       })
         .then((res) => res.json())
         .then((data) => {
           if (data.deletedCount > 0) {
             toast.success("Delete Buyer Successfully!");
             refetch();
           }
         });
     };
    return (
      <div>
        <h3 className="text-3xl text-center font-semibold my-5">
          All <span className="text-primary">Buyers</span>
        </h3>
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
                      <label
                        onClick={() => setRemoveBuyer(buyer)}
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
        {removeBuyer && (
          <ConfrimDelete
            successAction={handalDelete}
            deletingDatal={removeBuyer}
            closeModal={closeModal}
            title="Are You Sure? You Want to Delete?"
          />
        )}
      </div>
    );
};

export default AllBuyer;