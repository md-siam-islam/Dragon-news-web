import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
const Findus = () => {
  return (
    <div>
      <h1 className="font-semibold my-5">Find Us on </h1>

      <div className="join join-vertical w-full">
        <button className="btn join-item"><FaFacebook></FaFacebook> Facebook</button>
        <button className="btn join-item"> <FaInstagram></FaInstagram> Instagram</button>
        <button className="btn join-item"><FaTwitter></FaTwitter> Twitter</button>
      </div>
    </div>
  );
};

export default Findus;
