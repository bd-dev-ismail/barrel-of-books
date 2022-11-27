import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { useToken } from '../../hooks/useToken';
import Loader from '../../Shared/Loader/Loader';

const Register = () => {
   const [role, setRole] = useState('Buyer');
   const {register, handleSubmit, formState: {errors}} = useForm();
   const [loading, setLoading] = useState(false);
   const [registerEmail, setRegisterEmail] = useState("");
   const navigate = useNavigate();
   const location = useLocation();
   const from = location.state?.from?.pathname || "/";
   const [token] = useToken(registerEmail);
    useEffect(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);
   if(token){
     navigate(from, { replace: true });
     
   }
   
   const { registerUser, updateUserProfile, loginWithGoogle } =
     useContext(AuthContext);
   const handleRegister = (data) => {
    setLoading(true);
    const image = data.photo[0];
    const formData = new FormData();
    formData.append('image', image);
    const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_imgbb_key}`;
    fetch(url, {
      method: 'POST',
      body: formData,
    })
    .then(res => res.json())
    .then(imgData => {
      console.log(imgData);
      if(imgData.success){
        console.log(imgData.data.display_url);
        registerUser(data.email, data.password)
        .then(result => {
          const user = result.user;
          console.log(user);
          setRegisterEmail(user?.email);
          updateUserProfile(data.name, imgData.data.display_url)
            .then(() => {
              console.log("success done done done");
              const userInfo = {
                name: data.name,
                email: data.email,
                image: imgData.data.display_url,
                role: role
              };
              fetch("http://localhost:5000/users", {
                method: 'POST',
                headers: {
                  'content-type': 'application/json'
                },
                body: JSON.stringify(userInfo)
              })
              .then(res => res.json())
              .then(userdata => {
                console.log(userdata);
                if (userdata.acknowledged) {
                  setLoading(false);
                   toast.success("Registration Successful!");
                }
              });
            })
            .catch((err) => console.log(err));
        })
        .catch(err => console.log(err))
      }
    })
   };
   //with google
    const handalGoogleLogin = () => {
      
      loginWithGoogle()
        .then((result) => {
          const user = result.user;
          setRegisterEmail(user?.email);
          const userInfo = {
            name: user.displayName,
            email: user.email,
            image: user.photoURL,
            role: "Buyer",
          };
          fetch("http://localhost:5000/users", {
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
                
                  navigate(from, { replace: true });
                toast.success("Successfully Login With Google!!");
                console.log(user);
              }
            });
        })
        .catch((err) => toast.error(err.message));
    };
    return (
      <div>
        <div className="container mx-auto mt-10">
          <div className="flex justify-center h-full items-center">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form
                onSubmit={handleSubmit(handleRegister)}
                className="card-body"
              >
                <div className="text-center">
                  <h3 className="text-3xl">Register</h3>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Full Name</span>
                  </label>
                  <input
                    {...register("name", {
                      required: true,
                    })}
                    type="text"
                    placeholder="Your Name"
                    className="input input-bordered"
                  />
                  {errors.name && (
                    <span className="mt-3 text-red-600">
                      Name field is required
                    </span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Your Photo</span>
                  </label>
                  <input
                    {...register("photo", {
                      required: true,
                    })}
                    type="file"
                    className="input input-bordered pt-2"
                  />
                  {errors.photo && (
                    <span className="mt-3 text-red-600">
                      Image field is required
                    </span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    {...register("email", {
                      required: true,
                    })}
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
                    {...register("password", {
                      required: true,
                    })}
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                  />
                  {errors.password && (
                    <span className="mt-3 text-red-600">
                      Password field is required
                    </span>
                  )}
                  <div className="flex my-5">
                    <p>Your account mode is</p>
                    <input
                      onChange={(e) => setRole(e.target.value)}
                      type="radio"
                      name="radio-1"
                      value="Seller"
                      className="radio mr-1 radio-primary"
                    />
                    <label htmlFor="radio-1" className="mr-2">
                      Seller
                    </label>

                    <input
                      onChange={(e) => setRole(e.target.value)}
                      type="radio"
                      name="radio-1"
                      value="Buyer"
                      defaultChecked
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
                    {loading ? <Loader /> : "Register"}
                  </button>
                </div>
              </form>
              <div className="text-center">
                <button
                  onClick={handalGoogleLogin}
                  type="submit"
                  className="btn mb-6 w-[320px] text-white"
                >
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