import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { popularProducts } from '../data';
import ProductItem from './ProductItem';

const Container = styled.div`
    width: 100%;
    padding: 20px 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;

const Products = ({ cat, filter, sort }) => {

    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get("http://localhost:5000/api/products");
                console.log(res)
            } catch (err) { }
        }
        getProducts();
    }, [cat])
    return (
        <Container>
            {popularProducts.map((item) => (
                <ProductItem item={item} key={item.id} />
            ))};
        </Container>
    )
}

export default Products