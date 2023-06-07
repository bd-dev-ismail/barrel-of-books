import React from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
const SingleCategory = ({category}) => {
    const {name, image, _id, imgV2} = category;
    const navigate = useNavigate();
    const handalNavigate = (id)=> {
      navigate(`/categoriesById/${id}`);
    }
    return (
      <div
        onClick={() => handalNavigate(_id)}
        className="card lg:w-96 w-full mb-5 bg-base-100 shadow-xl cursor-pointer image-full relative"
      >
        <figure>
          <img src={imgV2} alt="Shoes" />
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