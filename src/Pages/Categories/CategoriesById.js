import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from './Product';

const CategoriesById = () => {
    const category = useLoaderData();
    const {data: products = []} = useQuery({
      queryKey: ["products", category?._id],
      queryFn: async () => {
        const res = await fetch(
          `http://localhost:5000/products/${category?._id}`
        );
        const data = await res.json();
        return data;
      },
    });
    console.log(products);
    return (
      <div className="container mx-auto">
        <div className="text-center">
          <h3 className="text-3xl text-center mt-5 mb-2">
            {category?.name} Category Items
          </h3>
          <p>
            Keep all your promises, don’t take what doesn’t belong to you, and{" "}
            <br />
            always look after those less fortunate than yourself, and you’ll do
            well in the world <br /> Happly Learning
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10 '>
            {
                products.map(prod => <Product key={prod._id} prod={prod}></Product>)
            }
        </div>
      </div>
    );
};

export default CategoriesById;