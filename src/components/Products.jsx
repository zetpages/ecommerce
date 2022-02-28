import React from 'react';
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

const Products = () => {
    return (
        <Container>
            {popularProducts.map((item) => (
                <ProductItem item={item} key={item.id} />
            ))};
        </Container>
    )
}

export default Products