import { Facebook, Instagram, Pinterest, Twitter, Spa } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
    width: 100%;
    height: 60px;
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

const Center = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 0 auto;

    & > svg {
        color: #e9424a;
    }
`;

const Logo = styled.h1`
    font-weight: bold;
`;


const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;


const Footer = () => {
    return (
        <Container>
            <Left>
                <LogoContainer>
                    <Spa />
                    <Logo>floret</Logo>
                </LogoContainer>
                <Desc>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa distinctio quisquam sint assumenda dolorum impedit incidunt repellat! Blanditiis, reprehenderit ipsum maiores assumenda odit facere id magni vitae ea ab? Obcaecati!</Desc>
                <SocialContainer>
                    <SocialIcon>
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon>
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon>
                        <Twitter />
                    </SocialIcon>
                    <SocialIcon>
                        <Pinterest />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center></Center>
        </Container>
    )
}

export default Footer