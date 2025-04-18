import { Suspense } from "react";
import { useLoaderData } from "react-router";
import Book from "../Book/Book";

const Books = () => {
  const data = useLoaderData();
//   console.log(data);
  return (
    <div>
      <h1 className="text-5xl flex justify-center items-center py-6 font-bold">
        books
      </h1>
      <Suspense fallback={<h>data loaded...</h>}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[95%] mx-auto gap-8 ">
          {data.map((singleData) => (
            <Book singleData={singleData} key={singleData.bookId}></Book>
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default Books;
