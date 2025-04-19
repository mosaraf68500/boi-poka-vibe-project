import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoreBook } from "../../Utility/AddToDB";
import ReadListDetails from "../ReadListDetails/ReadListDetails";

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

  return (
    <div className="w-10/12 mx-auto py-8">
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
