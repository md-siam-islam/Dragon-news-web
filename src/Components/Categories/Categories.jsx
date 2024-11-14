import React from 'react';
import { useLoaderData } from 'react-router-dom';
import News from '../News/News';

const Categories = () => {

    const {data}= useLoaderData()
    return (
        <div>
            <h1 className='font-semibold'>({data.length}) News Found in This Categories. </h1>



            {
                data.map(singlenews => <News singlenews={singlenews}></News> )
            }
        </div>
    );
};

export default Categories;