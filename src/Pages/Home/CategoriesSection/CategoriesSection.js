import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useState } from "react";

import Loader from "../../../Shared/Loader/Loader";
import SingleCategory from "./SingleCategory";
import UpdatedCategoires from "./UpdatedCategoires";

const CategoriesSection = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  // const {data: categories = [], isLoading} = useQuery({
  //     queryKey: ['categories'],
  //     queryFn: async()=> {
  //         const res = await fetch("https://barrel-of-books-server.vercel.app/categories");
  //         const data = await res.json();
  //         return data;
  //     }
  // })
  useEffect(() => {
    setLoading(true);
    axios
      .get("https://barrel-of-books-server.vercel.app/categories")
      .then(function (data) {
        // handle success

        setCategories(data.data);
        setLoading(false);
      });
  }, []);
  return (
    <div className="container mx-auto md:px-24 lg:px-8 my-24">
      <div className="text-center">
        <h3 className="lg:text-3xl text-xl my-3 uppercase font-bold">
          All Books <span className="text-primary">Categories</span>
        </h3>

        <p>
          Browse the collection of our best selling and top interresting
          products. <br /> ll definitely find what you are looking for..
        </p>
        <div className="flex justify-center items-center">
          <hr className="w-[73px] border-b-4 border-primary m-3 " />
        </div>
      </div>
      {loading ? (
        <Loader />
      ) : (
        <div
          data-aos="fade-left"
          className="flex flex-wrap justify-center items-center md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-4 lg:gap-4 mt-20"
        >
          {categories?.map((category) => (
            <UpdatedCategoires
              category={category}
              key={category._id}
            ></UpdatedCategoires>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoriesSection;
