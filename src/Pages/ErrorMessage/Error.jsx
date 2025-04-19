import React from 'react';
import image from "../../assets/error.jpg"
import { NavLink } from 'react-router';

const Error = () => {
    return (
        <div className='flex space-y-4 flex-col  justify-center items-center  mt-10'>
            <img className='py-10 w-[400px] border shadow-2xl rounded-2xl border-gray-300' src={image} alt="" />
            <NavLink to="/"><button className='btn py-4 btn-success text-white font-bold'>Back To Home</button></NavLink>
        </div>
    );
};

export default Error;