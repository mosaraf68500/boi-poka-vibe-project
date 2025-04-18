import React from 'react';
import image from '../../assets/images.jpg'; 

const Banner = () => {
    return (
        <div className="flex items-center justify-around p-6 bg-gray-100 rounded-lg">
            <div>
                <h1 className="text-4xl font-bold mb-4">Books to freshen up <br /> your bookshelf</h1>
                <button className="btn bg-[#23BE0A] text-white px-4 py-3 rounded">View The List</button>
            </div>
            <div>
                <img src={image} alt="Bookshelf" className="w-80 rounded shadow bg-white" />
            </div>
        </div>
    );
};

export default Banner;
