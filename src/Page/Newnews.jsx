import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Header from "../Components/Header/Header";
import Navabr from "../Navbar/Navabr";
import Letestnews from "../Components/Letestnews/Letestnews";
import Rightside from "../Components/Rightside/Rightside";

const Newnews = () => {
  const data = useLoaderData();

  const news = data.data[0];
  const { title, author, published_date, thumbnail_url, details } = news;
  return (
    
   <div>

    <div>
        <Header></Header>
        <Letestnews></Letestnews>
        <Navabr></Navabr>
    </div>

    <div className="grid grid-cols-12 gap-4">

    <div className=" col-span-9">
    <div className="max-w-xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <img src={thumbnail_url} alt="News Thumbnail" className="w-full h-48 object-cover" />
      
      <div className="p-6">
        
        
        <div className="flex items-center mt-4">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full mr-4"
          />
          <div>
            <p className="text-gray-600 text-start font-semibold">{author.name}</p>
            <p className="text-gray-500 text-start text-sm">{new Date(published_date).toLocaleDateString()}</p>
          </div>
        </div>

        <h2 className="text-2xl text-start mt-3 font-bold text-gray-800">{title}</h2>

        <p className="text-gray-700 mt-4 text-start">{details}</p>

        <Link to={"/"}>
          <button  className="mt-8 bg-red-500 justify-start text-white px-4 py-2 rounded-lg hover:bg-red-600">Back to Home</button>
        </Link>
      </div>
    </div>
    </div>

    <div className="col-span-3">

        <Rightside></Rightside>

    </div>

    </div>

   </div>
  );
};

export default Newnews;
