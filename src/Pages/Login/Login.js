import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Login = () => {
     const {
       register,
       handleSubmit,
       formState: { errors },
     } = useForm();
     const { loginUser, loginWithGoogle } = useContext(AuthContext);
     const handleLogin = (data) => {
       loginUser(data.email, data.password)
       .then(result => {
        const user = result.user;
        console.log(user);
       })
       .catch(err => console.log(err))
     };
     const handalGoogleLogin = ()=> {
        loginWithGoogle()
        .then(result => {
          const user = result.user;
          console.log(user);
        })
        .catch(err => console.log(err))
     }
    return (
      <div>
        <div className="container mx-auto mt-20">
          <div className="flex justify-center h-full items-center">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handleSubmit(handleLogin)} className="card-body">
                <div className="text-center">
                  <h3 className="text-3xl">Login</h3>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    {...register("email", { required: true })}
                    type="text"
                    placeholder="email"
                    className="input input-bordered"
                  />
                  {errors.email && (
                    <span className="mt-3 text-red-600">
                      Email field is required
                    </span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    {...register("password", { required: true })}
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                  />
                  {errors.password && (
                    <span className="mt-3 text-red-600">
                      Password field is required
                    </span>
                  )}
                  <label className="label">
                    <Link>Forget Password?</Link>
                  </label>
                  <label className="label">
                    <Link to="/register" className="hover:text-primary">
                      New in Barrel Of Books? Please Register!
                    </Link>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button type="submit" className="btn btn-primary text-white">
                    Login
                  </button>
                </div>
              </form>
              <div className="text-center">
                <button onClick={handalGoogleLogin} type="submit" className="btn mb-6 w-[320px] text-white">
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