import { Facebook, Instagram, Pinterest, Twitter, Spa, Room, Phone, MailOutline } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
    display: flex;
    width: 100%;
    padding: 60px 10px 50px 10px;
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const LogoContainer = styled.div`
    display: flex;
    align-items: center;

    & > svg {
        color: #e9424a;
    }
`;

const Logo = styled.h1`
    font-weight: bold;
`;

const Desc = styled.p`
    margin: 20px 15px;
    line-height: 2rem;
    font-size: 1rem;
`;

const SocialContainer = styled.div`
    display: flex;
    align-items: center;
`;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    background: ${props => props.color};
    border-radius: 50%;
    margin: 10px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Center = styled.div`
    flex: 1;
    padding: 20px;
    /* display: flex;
    justify-content: center;
    align-items: center;
    text-align: center; */
`;

const Title = styled.h3`
    font-size: 1.4rem;
    margin-bottom: 20px;

`;

const List = styled.ul`
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`;

const Right = styled.div`
    flex: 1;
    padding: 20px;
`;

const ContactItem = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;

    & > svg {
        margin-right: 10px;
        color: #1b1b1b9a;
    }
`;

const Payment = styled.img`
    margin-top: 20px;
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
                    <SocialIcon color='coral'>
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon color='red'>
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon color='purple'>
                        <Twitter />
                    </SocialIcon>
                    <SocialIcon color='lightseagreen'>
                        <Pinterest />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Waase</ListItem>
                    <ListItem>Flowers</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem> <Room /> Bishkek, Tynystanova 99</ContactItem>
                <ContactItem> <Phone /> +996 (777) 171 263</ContactItem>
                <ContactItem> <MailOutline /> akimov_@auca.kg</ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"></Payment>
            </Right>
        </Container>
    )
}

export default Footer