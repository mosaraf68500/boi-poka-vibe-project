import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Books from '../Books/Books';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
        <Helmet>
            <title>
                Home
            </title>
        </Helmet>
           <Banner></Banner>
           <Books></Books>
        </div>
    );
};

export default Home;