import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
      <div>
        <div className="container mx-auto mt-20">
          <div className="flex justify-center h-full items-center">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form className="card-body">
                <div className="text-center">
                  <h3 className="text-3xl">Login</h3>
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
                  <label className="label">
                    <Link>Forget Password?</Link>
                  </label>
                  <label className="label">
                    <Link to="/register" className='hover:text-primary'>New in Barrel Of Books? Please Register!</Link>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button type="submit" className="btn btn-primary text-white">
                    Login
                  </button>
                </div>
              </form>
              <div className='text-center'>
                <button type="submit" className="btn mb-6 w-[320px] text-white">
                  Login With Google
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;