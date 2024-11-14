import swiming from "../../../src/assets/swimming.png";
import Class from "../../../src/assets/class.png";
import Play from "../../../src/assets/playground.png";
import Img from "../../../src/assets/bg.png";

const Zone = () => {
  return (
    <div>
      <div className="w-full bg-gray-400 rounded-2xl py-2 px-4 mt-8">
        <h1 className="font-semibold my-2">Q-Zone </h1>

        <div className="border-dashed border-2 my-5">
          <img src={swiming} alt="" />
          <h1 className="font-semibold">Swimming</h1>
        </div>

        <div className="border-dashed border-2 my-5">
          <img src={Class} alt="" />
          <h1 className="font-semibold">Swimming</h1>
        </div>

        <div className="border-dashed border-2 my-5">
          <img src={Play} alt="" />
          <h1 className="font-semibold">Swimming</h1>
        </div>
      </div>

      <div className="my-5">
        <img src={Img} alt="" />
      </div>
    </div>
  );
};

export default Zone;
