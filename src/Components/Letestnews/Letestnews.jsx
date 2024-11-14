import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const Letestnews = () => {
    return (
        <div className="mt-5">
            <div className="flex items-center gap-3 bg-base-200 p-2">
                <button className="btn bg-[#D72050]">
                Latest
                </button>

                <Marquee pauseOnHover={true}>
                    <Link to="/news">
                    Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
                    </Link>
                    <Link to="/news">
                    Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
                    </Link>
                    <Link to="/news">
                    Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
                    </Link>
                    <Link to="/news">
                    Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
                    </Link>
                </Marquee>


            </div>
        </div>
    );
};

export default Letestnews;