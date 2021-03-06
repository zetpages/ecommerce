import React from 'react';
import styled from 'styled-components';
import { LocalFloristOutlined } from '@material-ui/icons';
import { mobile } from '../responsive';
import { Link } from 'react-router-dom';

const Container = styled.div`
    flex: 1;
    width: 100%;
    margin: 10px;
    height: 70vh;
    position: relative;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;

    ${mobile({ height: "25vh" })};
`;
const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: #0000005a;
`;
const Title = styled.h1`
    color: #fff;
    margin-bottom: 20px;

    ${mobile({ fontSize: "24px" })};
`;
const Button = styled.button`
    border: 1px solid #fff;
    background: transparent;
    display: flex;
    align-items: center;
    padding: 10px 20px;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 1px;
    cursor: pointer;
    font-weight: 600;

    & > svg {
        margin-right: 5px;
    }
`;

const CategoryItem = ({ item }) => {
    return (
        <Container>
            <Link to={`/products/${item.cat}`}>
                <Image src={item.img} />
                <Info>
                    <Title>{item.title}</Title>
                    <Button>
                        <LocalFloristOutlined />
                        Shop now
                    </Button>
                </Info>
            </Link>
        </Container>
    )
}

export default CategoryItem