import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import Loader from '../../Shared/Loader/Loader';
import BookingModal from '../BookingModal/BookingModal';
import Product from './Product';

const CategoriesById = () => {
    const category = useLoaderData();
    const [booking, setBooking] = useState(null);
    
    const { user } = useContext(AuthContext);
    //for category name
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
    //each data
     const { data: userInfo , isLoading} = useQuery({
       queryKey: ["userInfo", user?.email],
       queryFn: async () => {
         const res = await fetch(
           `http://localhost:5000/user?email=${user?.email}`
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
        {isLoading ? (
          <Loader />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10 ">
            {products.map((prod) => (
              <Product
                setBooking={setBooking}
                key={prod._id}
                prod={prod}
              ></Product>
            ))}
          </div>
        )}
        {booking && (
          <BookingModal
            setBooking={setBooking}
            userInfo={userInfo}
            booking={booking}
          />
        )}
      </div>
    );
};

export default CategoriesById;