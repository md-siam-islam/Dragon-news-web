import { useContext } from "react";
import user from "../../src/assets/user.png"
import { Link } from 'react-router-dom';
import { Authcontext } from "../Authprovider/Authprovider";


const Navabr = () => {

    const {user,singOut} = useContext(Authcontext);
    return (
        <div className='flex justify-between items-center my-5 '>
            <div>{user && user?.email}</div>

            <div className='flex items-center gap-5'>
                <Link to="/"><a className='font-semibold'>Home</a></Link>
                <Link to="/about"><a className='font-semibold'>About</a></Link>
                <Link to="/"><a className='font-semibold'>Career</a></Link>
            </div>

            <div className='flex items-centerjc
             gap-4'>
                <img src={user} alt="" />

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