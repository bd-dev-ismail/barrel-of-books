import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { useToken } from '../../hooks/useToken';
import Loader from '../../Shared/Loader/Loader';
const Login = () => {
     const {
       register,
  handleSubmit,
       formState: { errors },
     } = useForm();
     const { loginUser, loginWithGoogle } = useContext(AuthContext);
     const [loading, setLoading] = useState(false);
     const [loginUserEmail, setLoginUserEmail] = useState('');
     const navigate = useNavigate();
     const location = useLocation();
      const from = location.state?.from?.pathname || "/";
      const [token] = useToken(loginUserEmail);
      if(token){
         navigate(from, { replace: true });
      }
     const handleLogin = (data) => {
      setLoading(true);
       loginUser(data.email, data.password)
         .then((result) => {
           const user = result.user;
           console.log(user);
            setLoginUserEmail(user?.email);
             toast.success("Successfully Login !!");
            
             setLoading(false);
         })
         .catch((err) => toast.error(err.message));
     };
     const handalGoogleLogin = ()=> {
      
        loginWithGoogle()
        .then(result => {
          const user = result.user;
          setLoginUserEmail(user?.email);
          const userInfo = {
            name: user.displayName,
            email: user.email,
            image: user.photoURL,
            role: 'Buyer',
          };fetch("http://localhost:5000/users", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(userInfo),
          })
            .then((res) => res.json())
            .then((userdata) => {
              console.log(userdata);
              if (userdata.acknowledged) {
                setLoading(false);
                
                navigate(from, { replace: true });
                toast.success("Successfully Login With Google!!");
                console.log(user);
              }
            });
          
          
        })
        .catch(err => toast.error(err.message))
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
                    {loading ? <Loader /> : "Login"}
                  </button>
                </div>
              </form>
              <div className="text-center">
                <button
                  onClick={handalGoogleLogin}
                  type="submit"
                  className="btn mb-6 w-[320px] text-white"
                >
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