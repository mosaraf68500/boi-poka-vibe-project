import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { AddToStoredDB } from '../../Utility/AddToDB';
import Swal from 'sweetalert2';

const BookDetails = () => {

    const handleAddToBook=(id)=>{
        AddToStoredDB(id);
        console.log("clicked me")

        Swal.fire({
            title: "Custom animation with Animate.css",
            showClass: {
              popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `
            },
            hideClass: {
              popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `
            }
          });

    }

    const {id}=useParams();
    const bookId=parseInt(id);
    const data=useLoaderData();
    const singleBook=data.find(book=>book.bookId===bookId);
    const {bookName,author,image,totalPages,publisher,rating,yearOfPublishing,review,category,tags}=singleBook;
    return (
        <div className="flex py-10 flex-col md:flex-row gap-6 p-6 bg-white shadow-2xl  rounded-lg">
        {/* Book Image */}
        <div className="w-full md:w-1/3 rounded-2xl flex justify-center items-center bg-gray-100">
          <img
            src={image}
            alt="Why Do You Hate Money?"
            className="w-60 h-auto rounded py-10 px-4 "
          />
        </div>
      
        {/* Book Info */}
        <div className="w-full md:w-2/3 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">{bookName}</h2>
          <p className="text-gray-600">By : <span className="font-medium">{author}</span></p>
          <div className="divider"></div>
          <p className="text-sm text-gray-500">{category}</p>
          <div className="divider"></div>
      
          <div>
            <p className="font-semibold text-gray-700">Review :</p>
            <p className="text-sm text-gray-600 mt-1">
            {review}
            </p>
          </div>
      
          <div className="flex flex-wrap gap-2 mt-2">
          {
            tags.map((tag,index)=><span key={index} className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-medium">#{tag}</span>)
          }
            
           
          </div>

          <div className="divider"></div>
      
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm mt-4">
            <p><span className="font-semibold">Number of Pages:</span> {totalPages}</p>
            <p><span className="font-semibold">Publisher:</span> {publisher}</p>
            <p><span className="font-semibold">Year of Publishing:</span> {yearOfPublishing}</p>
            <p><span className="font-semibold">Rating:</span> {rating}</p>
          </div>
      
          <div className="flex gap-4 mt-4">
            <button onClick={()=>handleAddToBook(bookId)} className="px-4 py-2 bg-white border border-gray-300 rounded hover:bg-gray-100 transition">
              Mark As Read
            </button>
            <button className="px-4 py-2 bg-cyan-600 text-white rounded hover:bg-cyan-700 transition">
              Add To Wishlist
            </button>
          </div>
        </div>
      </div>
      
    );
};

export default BookDetails;