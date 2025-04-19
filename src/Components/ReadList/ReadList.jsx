import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoreBook } from "../../Utility/AddToDB";
import ReadListDetails from "../ReadListDetails/ReadListDetails";
import Swal from "sweetalert2";

const ReadList = () => {

    const data = useLoaderData();
// console.log(data)

const [readList,setReatList]=useState([]);

useEffect(() => {
    const storedBookData = getStoreBook();
    console.log( storedBookData)
    // const convertedStoredBookData = storedBookData.map(id => parseInt(id));
    // console.log( typeof convertedStoredBookData)
    const myList = data.filter(book => storedBookData.includes(parseInt(book.bookId)));
    setReatList(myList);
}, []);

const [sort,setSort]=useState("");

const handleSortedBtn=(type)=>{
setSort(type);
if(type==="pages"){
    const sordByPages=[...readList].sort((a,b)=>a.totalPages-b.totalPages)
    setReatList(sordByPages);
    Swal.fire({
        title: "Sorted successfully by pages",
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

if(type==="rating"){
    const sortByRating=[...readList].sort((a,b)=>a.rating-b.rating);
    setReatList(sortByRating)

    Swal.fire({
        title: "Sorded successfully by Rating",
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

}

  return (
    <div className="w-10/12 mx-auto py-8">

    <div className="bg-gray-200 rounded-xl">
        <h1 className="text-3xl font-bold text-center p-4">Book</h1>
    </div>
    <div className="py-10 flex justify-center items-center">
    <details className="dropdown">
  <summary className="btn m-1 bg-[#23BE0A] text-white">Sort By : {sort? sort:""}</summary>
  <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a onClick={()=>handleSortedBtn("pages")}>Pages</a></li>
    <li><a onClick={()=>handleSortedBtn("rating")}>Rating</a></li>
  </ul>
</details>
    </div>
      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>WishList Books</Tab>
        </TabList>

        <TabPanel>
          {
            readList.map(singleReadLIst=><ReadListDetails singleReadLIst={singleReadLIst}></ReadListDetails>)
          }
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;
