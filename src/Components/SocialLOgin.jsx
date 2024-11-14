
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
const SocialLOgin = () => {
    return (
        <div>
            <h1 className="font-semibold mb-4">Login with</h1>

           <div className="flex flex-col gap-3">
           <Link className="btn w-full">
                <FaGoogle></FaGoogle> Login with Google
            </Link>
            <Link className="btn w-full">
                <FaFacebook></FaFacebook> Login with Facebook
            </Link>
           </div>
        </div>
    );
};

export default SocialLOgin;