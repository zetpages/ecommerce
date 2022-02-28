import React from 'react';
import Announcement from '../components/Announcement';
import Categories from '../components/Categories';
import Navbar from '../components/Navbar';
import Products from '../components/Products';
import Slider from '../components/Slider';
import styled from 'styled-components';
import Newsletter from '../components/Newsletter';


const Wrapper = styled.div`
    width: 100%;
    overflow-x: hidden;
`;
const Home = () => {
    return (
        <Wrapper>
            <Announcement />
            <Navbar />
            <Slider />
            <Categories />
            <Products />
            <Newsletter />
        </Wrapper>
    )
}

export default Home