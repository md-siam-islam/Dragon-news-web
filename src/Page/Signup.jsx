import React, {  useContext } from "react";
import { Link } from "react-router-dom";
import { Authcontext } from "../Authprovider/Authprovider";

const Signup = () => {
    const {Signup,setUser,updateInfo} = useContext(Authcontext)
    const handlesignup = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const photo = event.target.photo.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        Signup(email,password)
        .then((userCredential) => {
            
            const user = userCredential.user;
            
            event.target.reset()
            updateInfo({displayName:name ,  photoURL:photo})
            .then(() => {
             console.log("Profile Update done");
             setUser(user)
            }).catch((error) => {
              console.log(error);
            });
           console.log(user);
          })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode,errorMessage);
          });
    }
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-xl shrink-0 shadow-2xl">
        <h1 className="font-semibold text-2xl">Register your account</h1>
        <form onSubmit={handlesignup} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Enter Your Photo URL"
              className="input input-bordered"
              
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter Your Password"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="cursor-pointer label justify-start gap-3">
             
              <input
                type="checkbox"
                className="checkbox checkbox-accent"
              />
               <span className="label-text">Remember me</span>
            </label>
          </div>

          <div className="form-control mt-6">
            <button className="btn btn-warning">Sign up</button>
          </div>
          <div>
            <h1 className="font-semibold">Already Have An Account ? <Link to={"/home/login"} className="text-red-500">Login</Link></h1>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
