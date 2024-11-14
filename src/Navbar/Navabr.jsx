import user from "../../src/assets/user.png"
import { Link } from 'react-router-dom';

const Navabr = () => {
    return (
        <div className='flex justify-between items-center my-5 '>
            <div></div>

            <div className='flex items-center gap-5'>
                <Link to="/"><a className='font-semibold'>Home</a></Link>
                <Link to="/about"><a className='font-semibold'>About</a></Link>
                <Link to="/"><a className='font-semibold'>Career</a></Link>
            </div>

            <div className='flex items-centerjc
             gap-4'>
                <img src={user} alt="" />
                <button className="btn bg-gray-600 text-white">
                    Login
                </button>
            </div>
        </div>
    );
};

export default Navabr;