import React from 'react';
import { MdVerified } from "react-icons/md";
const Product = ({ prod, setBooking }) => {
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
  } = prod;
  return (
    <div className="card card-compact w-full lg:w-96 h-96 bg-base-100 shadow-xl">
      <figure>
        <img src={productImage} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{productName}</h2>
        <p className="font-semibold flex items-center">
          Seller Name: {sellerName} <MdVerified className='text-blue-800'/>
        </p>
        <div className="flex justify-between">
          <p>Orginial Price: ${originalPrice}</p>
          <p>Resale Price: ${resalePrice} </p>
        </div>
        <div className="flex justify-between ">
          <p>Location: {location}</p>
          <p>Date: {date}</p>
        </div>
        <p>{`${productDesc ? productDesc.slice(0, 100) : undefined}...`}</p>
        <div className="card-actions justify-end">
          <label
            onClick={() => setBooking(prod)}
            htmlFor="booksModal"
            className="btn btn-primary btn-sm text-white"
          >
            Order Now
          </label>
        </div>
      </div>
    </div>
  );
};

export default Product;