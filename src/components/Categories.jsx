import React from 'react';
import styled from 'styled-components';
import { categories } from '../data';
import CategoryItem from './CategoryItem';

const Container = styled.div`
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 60px 10px;
    overflow-x: hidden;
`;

const Categories = () => {
    return (
        <Container>
            {categories.map((item) => (
                <CategoryItem item={item} key={item.id} />
            ))}
        </Container>
    )
}

export default Categories