import React from 'react';

const Product = ({prod}) => {
    const { _id, productImage, productName, originalPrice, resalePrice } = prod;
    return (
      <div className="card card-compact w-full lg:w-96 h-96 bg-base-100 shadow-xl">
        <figure>
          <img src={productImage} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{productName}</h2>
          <div className='flex justify-between font-semibold'>
            <p>Orginial Price: ${originalPrice}</p>
            <p>Resale Price: ${resalePrice}</p>
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary text-white">Buy Now</button>
          </div>
        </div>
      </div>
    );
};

export default Product;