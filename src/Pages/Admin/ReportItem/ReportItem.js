import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Swal from 'sweetalert2';
import Loader from '../../../Shared/Loader/Loader';

const ReportItem = () => {
     const {
       data: reports,
       isLoading,
       refetch,
     } = useQuery({
       queryKey: ["reports"],
       queryFn: async () => {
         const res = await fetch(`http://localhost:5000/reports`, {
           headers: {
             authorization: `Bearer ${localStorage.getItem("accessToken")}`,
           },
         });
         const data = await res.json();
         return data;
       },
     });
     const handleReportRemove = (report) => {
       
        const swalWithBootstrapButtons = Swal.mixin({
          customClass: {
            confirmButton: "btn btn-success",
            cancelButton: "btn btn-danger",
          },
          buttonsStyling: false,
        });

        swalWithBootstrapButtons
          .fire({
            title: "Are you sure?",
            text: `You are remveing on Product ID ${report?.productDetails?._id}`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, Remove it!",
            cancelButtonText: "No, cancel!",
            reverseButtons: true,
          })
          .then((result) => {
            if (result.isConfirmed) {
              fetch(
                `http://localhost:5000/products/${report?.productDetails?._id}`,
                {
                  method: "DELETE",
                  headers: {
                    authorization: `Bearer ${localStorage.getItem(
                      "accessToken"
                    )}`,
                  },
                }
              )
                .then((res) => res.json())
                .then((data) => {
                  console.log(data);
                  if (data.acknowledged) {
                    fetch(`http://localhost:5000/reports/${report?._id}`, {
                      method: "DELETE",
                      headers: {
                        authorization: `Bearer ${localStorage.getItem(
                          "accessToken"
                        )}`,
                      },
                    })
                      .then((res) => res.json())
                      .then((data) => {
                        if (data.deletedCount > 0) {
                          refetch();
                          swalWithBootstrapButtons.fire(
                            "Removed!",
                            ` Product has been removed.`,
                            "success"
                          );
                        }
                      });
                  }
                });
            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire(
                "Cancelled",
                `You are not removeing :)`,
                "error"
              );
            }
          });
     }
    return (
      <div>
        <h3 className="text-3xl text-center font-semibold my-5">
          All <span className="text-primary">Reported Products</span>
        </h3>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Image</th>
                <th>Product Name</th>
                <th>Repoter Email</th>
                <th>Remove Product</th>
              </tr>
            </thead>
            {isLoading ? (
              <Loader />
            ) : (
              <tbody>
                {reports?.map((report, idx) =>
                    <tr key={report?._id}>
                      <th>
                        <label>{idx + 1}</label>
                      </th>
                      <td>
                        <div className="flex items-center space-x-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <img
                                src={report?.productDetails?.productImage}
                                alt="Avatar Tailwind CSS Component"
                              />
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        {" "}
                        <p>{report?.productDetails?.productName}</p>
                      </td>
                      <td>{report?.reportUser}</td>
                      <th>
                        <button onClick={()=> handleReportRemove(report)} className="btn btn-sm btn-error text-white">Remove</button>
                      </th>

                    </tr>
                  
                )}
              </tbody>
            )}
          </table>
        </div>
      </div>
    );
};

export default ReportItem;