import React from 'react';
import { Link } from 'react-router';

const Book = ({singleData}) => {
   
    

    const {bookName,author,image,rating,category,tags,bookId}=singleData;
    return (
       <Link to={`/bookDetails/${bookId}`}>
         <div className=" border border-gray-200 bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
        <div className='bg-gray-100 rounded-xl m-4'>
        <img 
          className="w-full  h-[200px] object-contain p-4 px-10 py-6" 
          src={image} 
          alt="Book Cover"
        />
        </div>
        <div className="px-4 pb-4">

        
          <div className="flex gap-2 mb-2">
          {
            tags.map((tag ,index)=> <span key={index} className="bg-green-100 text-green-700 text-xs font-medium px-2.5 py-0.5 rounded-full">{tag}</span>)
        }
            
          </div>
          <h3 className="text-lg font-bold text-gray-900">{bookName}</h3>
          <p className="text-sm text-gray-700 mb-1">By : {author}</p>
          <div className="flex justify-between items-center mt-2">
            <span className="text-sm text-gray-600">{category}</span>
            <span className="text-sm font-semibold text-gray-800">{rating} ⭐</span>
          </div>
        </div>
      </div>
      
       </Link>

    );
};

export default Book;