import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const UpdatedCategoires = ({ category }) => {
  const { name, _id, imgV2 } = category;

  return (
    <div>
      <Link to={`/categoriesById/${_id}`}>
        <div>
          <img src={imgV2} alt="" className="w-[12.5rem] h-[12.5rem]" />
        </div>
        <div className="card-body">
          <h2 className="card-title text-center text-black">{name} </h2>

          <div className="card-actions  text-primary">
            <button className=" font-bold flex items-center newsCard cursor-pointer hover:text-black hover:bg-primary hover:px-6 text-center">
              See Books <FaLongArrowAltRight className="ml-3" />{" "}
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default UpdatedCategoires;
