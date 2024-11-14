import moment from "moment";
import logo from "../../../src/assets/logo.png"

const Header = () => {
    return (
        <div className="flex justify-center items-center flex-col gap-2">
            <div>
                <img className="w-[350px] " src={logo} alt="" />
            </div>

            <p className="text-base text-gray-600">Journalism Without Fear or Favour</p>

            <div>
                <p>{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
            </div>
        </div>
    );
};

export default Header;