import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100vw;
    height: 30px;
    padding: 5px;
    background: teal;
    color: #fff;
    text-align: center;
    overflow-x: hidden;
`;

const Paragraph = styled.p`
    line-height: 1.2rem;
    font-size: 14px;
`;


const Announcement = () => {
    return (
        <Container>
            <Paragraph>Here goes some announcements that we need!</Paragraph>
        </Container>
    )
}

export default Announcement