import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Leftside = () => {

    const [categories , setCategories] = useState([])

    useEffect(() => {
        fetch("https://openapi.programming-hero.com/api/news/categories")
        .then(res => res.json())
        .then(data => setCategories(data.data.news_category))
    },
    [])
    return (
        <div >
            <p className="font-semibold">All-Category({categories.length})</p>

            <div className="flex flex-col items-center gap-4 mt-4">

                {
                    categories.map(singlecate => (
                        <NavLink to={`/category/${singlecate.category_id}`} className="btn w-full">{singlecate.category_name}</NavLink>
                    ))
                }


            </div>
        </div>
    );
};

export default Leftside;