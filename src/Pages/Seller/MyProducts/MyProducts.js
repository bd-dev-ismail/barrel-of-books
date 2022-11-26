import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import app from '../../../Firebase/firebase.config';
import Loader from '../../../Shared/Loader/Loader';
import ConfrimDelete from '../../Admin/AllSeller/ConfrimDelete';

const MyProducts = () => {
  const { user } = useContext(AuthContext);
  const [removeProduct, setRemoveProduct] = useState(null);
  const closeModal = () => {
    return setRemoveProduct(null);
  };
  const {
    data: myProducts,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["myProducts", user?.email, ],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/products?email=${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });
  //delete product
  const handalDelete = (buyer) => {
    fetch(`http://localhost:5000/products/${buyer?._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success("Delete Product Successfully!");
          refetch();
        }
      });
  };
  //update product
  const makeAdvertise = (id)=> {
    console.log(id);
    fetch(`http://localhost:5000/adproduct/${id}`, {
      method: 'PUT'
    })
    .then(res => res.json())
    .then(data => {
      if(data.modifiedCount > 0){
        toast.success('Advertise Successfull!');
        refetch();
      }
    })
  }
    return (
      <div>
        <h3 className="text-3xl text-center font-semibold my-5">
          My <span className="text-primary">Products</span>
        </h3>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Category ID</th>
                <th>Publish Date</th>
                <th>Price</th>
                <th>Status</th>
                <th>Remove</th>
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

                        <div className="font-bold">{proudct?.productName}</div>
                      </div>
                    </td>
                    <td>{proudct?.productCategoryId}</td>
                    <td>{proudct?.date}</td>
                    <td>${proudct?.resalePrice}</td>
                    {proudct?.sold === true ? (
                      <td className="font-bold">Sold</td>
                    ) : (
                      <td className="font-semibold">Available</td>
                    )}

                    {proudct?.sold ? (
                      <td>
                        <label
                          disabled
                          
                          className="btn btn-sm btn-secondary text-white"
                        >
                          Delete
                        </label>
                      </td>
                    ) : (
                      <td>
                        <label
                          onClick={() => setRemoveProduct(proudct)}
                          htmlFor="confrimDelete"
                          className="btn btn-sm btn-secondary text-white"
                        >
                          Delete
                        </label>
                      </td>
                    )}
                    <th>
                      {/* advertise */}
                      {proudct?.advertise ? (
                        <button
                          disabled
                          className="btn btn-primary text-white btn-sm"
                        >
                          Advertised
                        </button>
                      ) : (
                        <button
                          onClick={() => makeAdvertise(proudct?._id)}
                          className="btn btn-primary text-white btn-sm"
                        >
                          Advertise
                        </button>
                      )}
                    </th>
                  </tr>
                ))}
              </tbody>
            )}
          </table>
        </div>
        {removeProduct && (
          <ConfrimDelete
            successAction={handalDelete}
            deletingDatal={removeProduct}
            closeModal={closeModal}
            title="Are You Sure? You Want to Delete?"
          />
        )}
      </div>
    );
};

export default MyProducts;