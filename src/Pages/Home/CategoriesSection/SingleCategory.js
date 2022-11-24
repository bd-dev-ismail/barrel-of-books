import React from 'react';
import { FaLongArrowAltRight, IconName } from "react-icons/fa";
const SingleCategory = ({category}) => {
    const {name, image, _id} = category;
    return (
      <div className="card w-96  mb-5 bg-base-100 shadow-xl cursor-pointer image-full relative">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-white">{name} Books</h2>

          <div className="card-actions right-5 absolute bottom-5  text-primary">
            <button className=" font-bold flex items-center">
              See All <FaLongArrowAltRight className="ml-3" />{" "}
            </button>
          </div>
        </div>
      </div>
    );
};

export default SingleCategory;