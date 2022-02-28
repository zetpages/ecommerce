import { Send } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 60vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background: #fcf5f5;
`;

const Title = styled.h2`
    font-size: 60px;
    margin-bottom: 30px;
`;

const Description = styled.div`
    font-size: 24px;
    margin-bottom: 20px;
    font-weight: 300;
`;

const InputContainer = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid lightgray;
    background: #fff;
    padding: 0;
`;

const Input = styled.input`
    border: none;
    flex: 8;
    padding: 10px 20px;
    font-size: 18px;

    &:focus {
        outline: none;
    }
`;

const Button = styled.button`
    flex: 1;
    border: none;
    cursor: pointer;
    background: coral;
    padding: 10px 20px;

    & > svg {
        color: #fff;
    }
`;

const Newsletter = () => {
    return (
        <Container>
            <Title>Newsletter</Title>
            <Description>Get timely updates form your favorite products.</Description>
            <InputContainer>
                <Input placeholder="Your email" />
                <Button>
                    <Send />
                </Button>
            </InputContainer>
        </Container>
    )
}

export default Newsletter