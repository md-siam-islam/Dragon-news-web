import { useContext } from "react";
import user from "../../src/assets/user.png"
import { Link, NavLink } from 'react-router-dom';
import { Authcontext } from "../Authprovider/Authprovider";


const Navabr = () => {

    const {user,singOut} = useContext(Authcontext);
    return (
        <div className='flex justify-between items-center my-5 '>
            <div>{user && user?.email}</div>

            <div className='flex items-center gap-5'>
                <NavLink to="/"><a className='font-semibold'>Home</a></NavLink>
                <NavLink to="/about"><a className='font-semibold'>About</a></NavLink>
                <NavLink to="/career"><a className='font-semibold'>Career</a></NavLink>
            </div>

            <div className='flex items-centerjc
             gap-4'>

                {
                    user && user?.email ? <div className="flex flex-col items-center justify-center">
                        <img className="w-10 rounded-full" src={user. photoURL} alt="" />
                        <h1>{user.displayName}</h1>
                    </div> : 
                    <img src={user} alt="" />
                }
                

                {
                    user && user?.email ? <div>
                        <Link onClick={singOut} className="btn bg-gray-600 text-white">Logout</Link>
                    </div>:  <Link to={"home/login"} className="btn bg-gray-600 text-white">
                    Login
                </Link>
                }
               
            </div>
        </div>
    );
};

export default Navabr;