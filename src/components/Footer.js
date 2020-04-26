import React from 'react';
import styled from 'styled-components';

const FooterGroup = styled.div`
    background: white;
    padding: 50px 0;
    display: grid;
    grid-gap: 20px;
`

const Button = styled.a`
    /* background: linear-gradient(102.24deg, #9B51E0 0%, #3436E7 100%); */
    background: #12161b;
    box-shadow: 0px 10px 20px rgba(101, 41, 255, 0.15);
    border-radius: 30px;
    color: white;
    border: none;
    padding: 16px 60px;
    font-weight: 600;
    font-size: 24px;
    justify-self: center;

    &:hover {
        box-shadow: 0 20px 40px rgba(0,0,0, 0.15);
        transform: translateY(-3px);
        transition: 0.8s cubic-bezier(0.2, 0.8, 0.2 , 1);
    }
`

const Copyright = styled.div`
    color: black;
    max-width: 500px;
    margin: 0 auto;
    padding: 0 20px;
    text-align: center;
    font-size: 15px;
`

const Footer = ({ children }) => (
    <div id='contact'>
        <FooterGroup>
            <Button href='mailto:hgmarti@gmail,com'>Contact us</Button>
            <Copyright>
                {children}
            </Copyright>
        </FooterGroup>
    </div>
)

export default Footer;