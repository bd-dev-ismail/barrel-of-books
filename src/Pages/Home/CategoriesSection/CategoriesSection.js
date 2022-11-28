import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

import Loader from '../../../Shared/Loader/Loader';
import SingleCategory from './SingleCategory';

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
      <div className="container mx-auto my-24">
        <div className="text-center">
          <h3 className="lg:text-3xl text-xl my-3 uppercase font-bold">
            All Books <span className="text-primary">Categories</span>
          </h3>
          <p>
            Browse the collection of our best selling and top interresting
            products. <br /> ll definitely find what you are looking for..
          </p>
        </div>
        {loading ? (
          <Loader />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-4 lg:gap-4 mt-10">
            {categories?.map((category) => (
              <SingleCategory
                category={category}
                key={category._id}
              ></SingleCategory>
            ))}
          </div>
        )}
      </div>
    );
};

export default CategoriesSection;