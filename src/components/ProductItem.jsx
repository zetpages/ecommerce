import React from 'react';
import styled from 'styled-components';
import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons';

const Info = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: #0007;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all .2s ease;
`

const Container = styled.div`
    flex: 1;
    margin: 10px;
    min-width: 350px;
    max-width: 350px;
    height: 550px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;

    &:hover ${Info} {
        opacity: 1;
        transition: all .3s ease-in-out;
    }

    &:hover ${Image} {
        transform: scale(1.1);
        transition: all .3s ease;
    }
`;

const Icon = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    transition: all .3s ease;

    &:hover {
        transform: scale(1.1);
        background: #1b1b1b;
    }

    &:hover svg {
        transform: scale(1.1);
        color: #fff;
    }

    & > svg {
        color: #1b1b1b;
    }
`;

const ProductItem = ({ item }) => {
    return (
        <Container>
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