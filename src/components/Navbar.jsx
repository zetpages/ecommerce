import React from 'react';
import styled from 'styled-components';
import { Search, ShoppingCartOutlined, Spa } from '@material-ui/icons';
import { Badge } from '@material-ui/core';
import { mobile } from '../responsive';

const Container = styled.div`
    width: 100vw;
    height: 60px;
`;

const Wrapper = styled.div`
    width: 100%;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow-x: hidden;

    ${mobile({ padding: "20px 10px" })}

`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;

    ${mobile({ display: "none" })};
`;

const Language = styled.span`
    cursor: pointer;
    font-size: 14px;
    text-transform: uppercase;
    ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
    border: 1px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 10px;
    padding: 4px 10px;

    & > svg {
        cursor: pointer;
        fill: lightgray;
    }
`;

const Input = styled.input`
    border: none;

    &:focus {
        outline: none;
    }
`;


const Center = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    ${mobile({ justifyContent: "flex-start" })};
`;

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 0 auto;

    & > svg {
        color: #e9424a;
    }

    ${mobile({ margin: "0px 20px 0px 0px" })};
`;

const Logo = styled.h1`
    font-weight: bold;
`;


const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    ${mobile({ justifyContent: "center" })};
`;


const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    text-transform: uppercase;
    margin-left: 20px;

    ${mobile({ fontSize: "12px", marginLeft: "10px" })};
`;

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder='search' />
                        <Search />
                    </SearchContainer>
                </Left>
                <Center>
                    <LogoContainer>
                        <Spa />
                        <Logo>floret</Logo>
                    </LogoContainer>
                </Center>
                <Right>
                    <MenuItem>Register</MenuItem>
                    <MenuItem>Sign in</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color='primary'>
                            <ShoppingCartOutlined />
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar