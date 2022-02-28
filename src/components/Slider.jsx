import React, { useState } from 'react';
import { ArrowLeftOutlined, ArrowRightOutlined, FilterVintageOutlined } from '@material-ui/icons';
import styled from 'styled-components';
import { sliderItems } from '../data';


const Container = styled.div`
    width: 100%;
    height: calc(100vh - 90px);
    display: flex;
    position: relative;
    overflow-x: hidden;
`;

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background: #ffe4e4;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === "left" && "20px"};
    right: ${props => props.direction === "right" && "20px"};
    margin: auto;
    opacity: .5;
    cursor: pointer;
    z-index: 2;

    & > svg {
        color: gray;
    }
`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    transform: translateX(${(props) => props.slideIndex * -100}vw);
    transition: all 1.5s ease;
`;

const Slide = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    height: 100%;
`;

const ImgContainer = styled.div`
    flex: 1;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

const Image = styled.img`
    width: 100%;
    transform: translateY(-200px);
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
    text-transform: uppercase;
`;

const Title = styled.h1`
    font-size: 70px;
`;

const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 2px;
`;

const Button = styled.button`
    text-transform: uppercase;
    padding: 10px 20px;
    font-size: 20px;
    background: transparent;
    border: 1px solid darkgray;
    display: flex;
    align-items: center;
    cursor: pointer;

    & > svg {
        margin-right: 5px;
        color: #eb8f90;
    }
`;

const Slider = () => {

    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }
    }
    return (
        <Container>
            <Arrow direction="left" onClick={() => handleClick("left")} >
                <ArrowLeftOutlined />
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map((item) => (
                    <Slide bg={item.bg} key={item.id} >
                        <ImgContainer>
                            <Image src={item.img}></Image>
                        </ImgContainer>
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Desc>{item.desc}</Desc>
                            <Button>
                                <FilterVintageOutlined />
                                Shop now
                            </Button>
                        </InfoContainer>
                    </Slide>
                ))}
            </Wrapper>
            <Arrow direction="right" onClick={() => handleClick("right")} >
                <ArrowRightOutlined />
            </Arrow>
        </Container>
    )
}

export default Slider