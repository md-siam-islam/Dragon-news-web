import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Authcontext } from "../Authprovider/Authprovider";


const Login = () => {

    const {login,setUser} = useContext(Authcontext)
    const location = useLocation()
    const navigate = useNavigate()

    const handleLogin = (event) => {
        event.preventDefault()

        const email = event.target.email.value;
        const password = event.target.password.value;

        login(email,password)
        .then((userCredential) => {
            const user = userCredential.user;
            setUser(user)
            event.target.reset()
            navigate(location.state || "/")
            console.log(user, "user login Done");
         
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            console.log(errorCode, errorMessage);
          });



    }
    return (
        <div className="min-h-screen flex justify-center items-center">
             <div className="card bg-base-100 w-full max-w-xl shrink-0 shadow-2xl">
                <h1 className="font-semibold text-2xl">Login Your Account</h1>
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="Enter Your Email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="Enter Your Password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-warning">Login</button>
        </div>
        <h1 className="font-semibold">Dont’t Have An Account ?<Link to={"/home/signup"} className="text-red-500">Register</Link></h1>
      </form>
    </div>
        </div>
    );
};

export default Login;