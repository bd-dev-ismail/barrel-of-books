import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { MdVerified } from 'react-icons/md';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const AdProduct = ({ prod, setBooking }) => {
  const {user} = useContext(AuthContext);
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
    return toast.error('You need to login!Please Login frist!')
  }
  return (
    <div className="card card-compact w-full lg:w-96 h-[600px] bg-base-100 shadow-xl">
      <figure>
        <img src={productImage} alt="Shoes" className="object-fill" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{productName}</h2>
        <p className="font-semibold flex items-center">
          Seller Name: {sellerName}{" "}
          {veriyedPd && <MdVerified className="text-blue-800 text-xl" />}
        </p>
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
              htmlFor="booksModal"
              className="btn btn-primary btn-sm text-white"
            >
              Order Now
            </label>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdProduct;