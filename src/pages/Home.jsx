import React from 'react';
import Announcement from '../components/Announcement';
import Categories from '../components/Categories';
import Navbar from '../components/Navbar';
import Products from '../components/Products';
import Slider from '../components/Slider';
import styled from 'styled-components';


const Wrapper = styled.div`
    width: 100vw;
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
        </Wrapper>
    )
}

export default Home