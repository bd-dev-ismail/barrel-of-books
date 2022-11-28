import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { MdVerified } from 'react-icons/md';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { useAdmin } from '../../../hooks/useAdmin';
import Loader from '../../../Shared/Loader/Loader';

const AdProduct = ({ prod, setBooking }) => {
  const {user} = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const {
    _id,
    productImage,
    productName,
    originalPrice,
    resalePrice,
    productDesc,
    location,
    date,
    sellerName,
    yearOfPurchase,
    veriyedPd,
  } = prod;
  
  const displayToast = ()=> {
    // if (user?.email && prod?.sellerEmail){
    //    return toast.error("Your Can not Buy Your Product");
    // }
    
      return toast.error("You need to login!Please Login frist!");
  }
    const handelReport = (productDetails) => {
      const report = { productDetails, reportUser: user?.email, report: true , productId: _id};
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
          text: `You are reporting on Product Name ${productName}`,
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Yes, Report it!",
          cancelButtonText: "No, cancel!",
          reverseButtons: true,
        })
        .then((result) => {
          if (result.isConfirmed) {
            fetch("https://barrel-of-books-server.vercel.app/reports", {
              method: "POST",
              headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
              },
              body: JSON.stringify(report),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.acknowledged) {
                  swalWithBootstrapButtons.fire(
                    "Reported!",
                    ` ${productName} been reported.`,
                    "success"
                  );
                }
              });
          } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
          ) {
            swalWithBootstrapButtons.fire(
              "Cancelled",
              `You are not reporting ${productName} :)`,
              "error"
            );
          }
        });
    };
    //verify user if he seller he coud'nt buy her porudct
  return (
    <div className="card card-compact w-full lg:w-96 h-[600px] bg-base-100 shadow-xl">
      <figure>
        <img src={productImage} alt="Shoes" className="object-fill" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{productName}</h2>
        <div className="flex ">
          <p className="font-semibold flex items-center">
            Seller Name: {sellerName}{" "}
            {veriyedPd && <MdVerified className="text-blue-800 text-xl" />}
          </p>
          <button
            onClick={() => handelReport(prod)}
            className="btn btn-sm btn-secondary justify-end text-white"
          >
            Report
          </button>
        </div>

        <p>Purchase Year: {yearOfPurchase}</p>
        <div className="flex justify-between">
          <p>Orginial Price: ${originalPrice}</p>
          <p>Resale Price: ${resalePrice} </p>
        </div>
        <div className="flex justify-between ">
          <p>Location: {location}</p>
          <p>Post Date: {date}</p>
        </div>
        <p>{`${productDesc ? productDesc.slice(0, 100) : undefined}...`}</p>
        <div className="card-actions justify-end">
           {/* && ( user?.email !== prod?.sellerEmail ) */}
           {loading && <Loader></Loader>}
          {user?.uid && user?.email ? (
            <label
              onClick={() => setBooking(prod)}
              htmlFor="booksModal"
              className="btn btn-primary btn-sm text-white"
            >
              Order Now
            </label>
          ) : (
            <label
              onClick={displayToast}
              
              className="btn btn-primary btn-sm text-white"
            >
              Order Now
            </label>
          )}
          {/* {
           ?  <label
              onClick={sellerBuyHandle}
              
              className="btn btn-primary btn-sm text-white"
            >
              Order Now
            </label> : undefined
          } */}
        </div>
      </div>
    </div>
  );
};

export default AdProduct;