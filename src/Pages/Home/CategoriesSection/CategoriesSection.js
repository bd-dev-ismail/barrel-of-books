import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loader from '../../../Shared/Loader/Loader';
import SingleCategory from './SingleCategory';

const CategoriesSection = () => {
    const {data: categories = [], isLoading} = useQuery({
        queryKey: ['categories'],
        queryFn: async()=> {
            const res = await fetch("http://localhost:5000/categories");
            const data = await res.json();
            return data;
        }
    })
    
    return (
      <div className='container mx-auto my-24'>
        <div className='text-center'>
          <h3 className='lg:text-3xl text-xl my-3 uppercase font-bold'>All Books Categories</h3>
          <p>
            Browse the collection of our best selling and top interresting
            products. <br /> ll definitely find what you are looking for..
          </p>
        </div>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-4 mt-10'>
            {
                categories.map(category=> <SingleCategory category={category} key={category._id}></SingleCategory>)
            }
           </div>
      </div>
    );
};

export default CategoriesSection;