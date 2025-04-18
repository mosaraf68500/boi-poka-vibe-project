import React from 'react';

import { createBrowserRouter } from 'react-router'
import Root from '../Pages/Root/Root';
import Error from '../Pages/ErrorMessage/Error';
import Home from '../Pages/Home/Home';
import BookDetails from '../Pages/BookDetails/BookDetails';
 export const router=createBrowserRouter([
 {
  path:'/',
  Component:Root,
  errorElement:<Error></Error>,
  children:[
    {
        index:true,
        loader:()=>fetch('data.json'),
        path:'/',
        Component:Home,
    },
    {
        path:'/bookDetails/:id',
        loader:()=>fetch('data.json'),
        Component:BookDetails,
    }
  ]
 }
]);
