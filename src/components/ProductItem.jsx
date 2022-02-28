import React from 'react';
import styled from 'styled-components';
import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons';

const Container = styled.div`
    flex: 1;
    margin: 10px;
`;

const Circle = styled.div`

`;

const Image = styled.img`
    
`

const Info = styled.div``;

const Icon = styled.div``;

const ProductItem = ({ item }) => {
    return (
        <Container>
            <Circle />
            <Image src={item.img}></Image>
            <Info>
                <Icon>
                    <ShoppingCartOutlined />
                </Icon>
                <Icon>
                    <SearchOutlined />
                </Icon>
                <Icon>
                    <FavoriteBorderOutlined />
                </Icon>
            </Info>
        </Container>
    )
}

export default ProductItem