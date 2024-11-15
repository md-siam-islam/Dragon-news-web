
import React from 'react';
import { FaRegEye, FaStar, FaShareAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const News = ({ singlenews }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg p-4 max-w-sm mx-auto my-4">
            <div className="flex items-center mb-4">
                <img
                    src={singlenews.author.img}
                    alt={singlenews.author.name}
                    className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                    <h2 className="text-gray-800 font-semibold">{singlenews.author.name}</h2>
                    <p className="text-sm text-gray-500">{singlenews.author.published_date}</p>
                </div>
                <div className="ml-auto">
                    <FaShareAlt className="text-gray-500" />
                </div>
            </div>

            <img
                src={singlenews.thumbnail_url}
                alt={singlenews.title}
                className="w-full h-40 object-cover rounded-md mb-4"
            />

            <h3 className="text-lg font-semibold text-gray-800">{singlenews.title}</h3>

            <p className="text-sm text-gray-500 mt-2">
                {singlenews.details.length > 100 ? singlenews.details.slice(0, 100) + '...' : singlenews.details}
            </p>

            <Link to={`/news/${singlenews._id}`} className="text-blue-500 font-semibold mt-2">Read More</Link>

            <div className="flex items-center justify-between mt-4">
                <div className="flex items-center text-yellow-500">
                    <FaStar />
                    <p className="ml-1 text-sm font-semibold">{singlenews.rating.number}</p>
                </div>
                <div className="flex items-center text-gray-500">
                    <FaRegEye />
                    <p className="ml-1 text-sm">{singlenews.total_view}</p>
                </div>
            </div>
        </div>
    );
};

export default News;
