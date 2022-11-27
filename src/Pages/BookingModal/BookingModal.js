
import React, {  useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Loader from '../../Shared/Loader/Loader';

const BookingModal = ({ booking, userInfo, setBooking ,}) => {
  const [loading, setLoading] = useState(false);
  
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: userInfo?.email,
      name: userInfo?.name,
      bookName: booking?.productName,
      bookPrice: booking?.resalePrice,
      bookID: booking?._id,
      bookImage: booking?.productImage,
      sold: false,
    },
  });
  const handleBooking = (data) => {
    console.log(data);
   setLoading(true);
    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
            setLoading(false);
            setBooking(null);
          toast.success("Order Placed Successfully!");
          navigate("/dashboard/my-orders");
        }
      });
  };
  return (
    <div>
      <input type="checkbox" id="booksModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booksModal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Review Order</h3>
          <form onSubmit={handleSubmit(handleBooking)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email", { required: true })}
                type="text"
                disabled
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                {...register("name", { required: true })}
                type="text"
                disabled
                placeholder="name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control hidden">
              <label className="label">
                <span className="label-text">Book Image</span>
              </label>
              <input
                {...register("bookImage", { required: true })}
                type="text"
                disabled
                placeholder="bookImage"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Book Name</span>
              </label>
              <input
                {...register("bookName", { required: true })}
                type="text"
                disabled
                placeholder="bookName"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Book ID</span>
              </label>
              <input
                {...register("bookID", { required: true })}
                type="text"
                disabled
                placeholder="bookID"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Book Price</span>
              </label>
              <input
                {...register("bookPrice", { required: true })}
                type="text"
                disabled
                placeholder="bookPrice"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Phone</span>
              </label>
              <input
                {...register("phone", { required: true })}
                type="number"
                placeholder="phone"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Meeting Location</span>
              </label>
              <select
                {...register("location", { required: true })}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              >
                <option value="Chattogram">Chattogram</option>
                <option value="Dhaka">Dhaka</option>
                <option value="Kulna">Kulna</option>
                <option value="Syhlet">Syhlet</option>
                <option value="Barishal">Barishal</option>
                <option value="Noakhali">Noakhali</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary text-white">
                {loading ? <Loader /> : "Confrim Order"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;