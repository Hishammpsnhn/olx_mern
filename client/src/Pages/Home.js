import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Components/Header/Header';
import Banner from '../Components/Banner/Banner';

import Posts from '../Components/Posts/Posts';
import Footer from '../Components/Footer/Footer';
import Place from '../Components/Header/Place';
import { getPosts } from '../Action/product';

function Home() {

  return (
    <>
      <div className="homeParentDiv">
        <Header />
        <Banner />
        <Posts />
        <Footer />
      </div>
    </>
  );
}

export default Home;

