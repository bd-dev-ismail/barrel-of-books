import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
   const [role, setRole] = useState('');
   console.log(role);
    return (
      <div>
        <div className="container mx-auto mt-10">
          <div className="flex justify-center h-full items-center">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form className="card-body">
                <div className="text-center">
                  <h3 className="text-3xl">Register</h3>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Full Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Your Image</span>
                  </label>
                  <input type="file" className="input input-bordered pt-2" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="text"
                    placeholder="password"
                    className="input input-bordered"
                  />

                  <div className="flex my-5">
                    <p>Your account mode is</p>
                    <input
                      onChange={(e) => setRole(e.target.value)}
                      type="radio"
                      name="radio-1"
                      value="Seller"
                      className="radio mr-1 radio-primary"
                      defaultChecked
                    />
                    <label htmlFor="radio-1" className="mr-2">
                      Seller
                    </label>

                    <input
                      onChange={(e) => setRole(e.target.value)}
                      type="radio"
                      name="radio-1"
                      value="Buyer"
                      className="radio radio-primary mr-1"
                    />
                    <label htmlFor="radio-1">Buyer</label>
                  </div>
                  <label className="label">
                    <Link to="/login" className="hover:text-primary">
                      Already have an account? Please Login!
                    </Link>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button type="submit" className="btn btn-primary text-white">
                    Register
                  </button>
                </div>
              </form>
              <div className="text-center">
                <button type="submit" className="btn mb-6 w-[320px] text-white">
                  Register With Google
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Register;