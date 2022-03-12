import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Products from '../components/Products';


const Container = styled.div`
    width: 100%;
`;

const InnerContainer = styled.div`
    width: 100%;
    height: 100%;
    padding: 20px;
`;

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Filter = styled.div`
    margin: 20px 0px;
`;

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
`;


const Select = styled.select`
    font-size: 1rem;
    font-weight: 600;
    margin: 0px 10px;
    padding: 5px 20px;
    border: 1px solid #1b1b1b;
    color: #1b1b1b9b;

    &:focus {
        outline: none;
        border: 1px solid #1b1b1b;
    }
`;


const Option = styled.option`
    font-size: .9rem;
    font-weight: 600;
    margin: 20px 0px;
`;




const ProductList = () => {

    const location = useLocation();
    const cat = location.pathname.split('/')[2];
    const [filter, setFilters] = useState({});
    const [sort, setSort] = useState("newest");

    const handleFilters = (e) => {
        const value = e.target.value;
        setFilters({
            ...filter,
            [e.target.name]: value,
        });
    }

    console.log(filter)
    return (
        <Container>
            <Navbar />
            <Announcement />
            <InnerContainer>
                <FilterContainer>
                    <Filter>
                        <FilterText>Filter products</FilterText>
                        <Select name='color' onChange={handleFilters}>
                            <Option disabled >
                                Color
                            </Option>
                            <Option>Black</Option>
                            <Option>Red</Option>
                            <Option>White</Option>
                            <Option>Blue</Option>
                            <Option>Coral</Option>
                            <Option>Purple</Option>
                        </Select>
                        <Select name='size' onChange={handleFilters}>
                            <Option disabled >
                                Size
                            </Option>
                            <Option>XS</Option>
                            <Option>S</Option>
                            <Option>M</Option>
                            <Option>L</Option>
                            <Option>2XL</Option>
                            <Option>4XL</Option>
                        </Select>

                    </Filter>
                    <Filter>
                        <FilterText>Sort products</FilterText>
                        <Select onChange={(e) => setSort(e.target.value)}>
                            <Option value="newest" >
                                Newest
                            </Option>
                            <Option value="asc" >Price ( asc )</Option>
                            <Option value="desc" >Price ( desc )</Option>
                        </Select>
                    </Filter>
                </FilterContainer>
                <Products cat={cat} filter={filter} sort={sort} />
                <Newsletter />
            </InnerContainer>
            <Footer />
        </Container>
    )
}

export default ProductList