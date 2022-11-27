import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import Loader from '../../../Shared/Loader/Loader';
import BookingModal from '../../BookingModal/BookingModal';
import AdProduct from './AdProduct';
import axios from 'axios';
const Advetisement = () => {
    const [booking, setBooking] = useState(null);
    const { user } = useContext(AuthContext);
    const [products ,setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    // const { data: products = [] , isLoading} = useQuery({
    //   queryKey: ["products"],
    //   queryFn: async () => {
    //     const res = await fetch(`http://localhost:5000/adproduct`);
    //     const data = await res.json();
    //     return data;
    //   },
    // });
    useEffect(()=> {
      setLoading(true)
      axios.get("http://localhost:5000/adproduct").then(function (data) {
        // handle success
        setProducts(data.data);
        setLoading(false);
      });
    },[])
      const { data: userInfo } = useQuery({
        queryKey: ["userInfo", user?.email],
        queryFn: async () => {
          const res = await fetch(
            `http://localhost:5000/user?email=${user?.email}`
          );
          const data = await res.json();
          return data;
        },
      });
    return (
      <>
        {products?.length && (
          <div className="container mx-auto my-24">
            <h3 className="lg:text-3xl text-xl my-3 uppercase font-bold">
              Advertise <span className="text-primary">Products</span>
            </h3>
            {loading ? (
              <Loader />
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10 ">
                {products.map((prod) => (
                  <AdProduct
                    setBooking={setBooking}
                    key={prod._id}
                    prod={prod}
                  ></AdProduct>
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
        )}
      </>
    );
};

export default Advetisement;