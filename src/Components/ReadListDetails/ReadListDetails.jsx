import React from 'react';

const ReadListDetails = ({singleReadLIst}) => {

    const {bookName,author,image,totalPages,publisher,rating,yearOfPublishing,review,category,tags}=singleReadLIst;
    return (
        <div className="max-w-4xl mx-auto p-4">
        
  <div className="bg-white rounded-xl shadow flex gap-4 p-6 items-center">
    {/* Book Image */}
    <div className="w-32 flex-shrink-0">
      <img
        src={image}
        alt="Book cover"
        className="h-[200px] w-[300px] rounded"
      />
    </div>

    {/* Book Info */}
    <div className="flex-1">
      <h2 className="text-xl font-semibold">{bookName}</h2>
      <p className="text-gray-600 mt-1">
        By : <span className="font-medium">{author}</span>
      </p>

      {/* Tags */}
      <div className="flex gap-2 mt-2 flex-wrap">

      {
        tags.map((tag, index)=><span key={index} className="text-sm text-green-600 bg-green-100 px-2 py-1 rounded">
          {tag}
        </span>)
      }
        
      </div>

      {/* Metadata */}
      <div className="flex items-center gap-4 mt-3 text-sm text-gray-500 flex-wrap">
        <span className="flex items-center gap-1">
          <i className="fas fa-calendar-alt"></i> Year of Publishing: {yearOfPublishing}
        </span>
        <span className="flex items-center gap-1">
          <i className="fas fa-building"></i> Publisher: {publisher}
        </span>
        <span className="flex items-center gap-1">
          <i className="fas fa-book"></i> Page {totalPages}
        </span>
      </div>

      {/* Footer */}
      <div className="flex items-center gap-4 mt-4 flex-wrap">
        <span className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
          Category: {category}
        </span>
        <span className="text-sm bg-orange-100 text-orange-600 px-3 py-1 rounded-full">
          Rating: {rating}
        </span>
        <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-1.5 rounded-full text-sm">
          View Details
        </button>
      </div>
    </div>
  </div>
</div>

    );
};

export default ReadListDetails;