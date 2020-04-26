import React from 'react'
import styled from 'styled-components';
import Wave from './Wave';

const SectionGroup = styled.div`
    background: url(${props => props.image});
    height: 820px;
    background-size: cover;
    display: grid;
    grid-template-rows: 390px auto;
    grid-gap: 20px;
    position: relative;

    @media (max-width: 900px) {
        height: 1000px;
    }
`

const SectionLogo = styled.img`
    align-self: end;
    width: 200px;
    margin: 0 auto;

    @media (max-width: 720px) {
        width: 150px;
    }
`

const SectionTitleGroup = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    margin: 0 200px;
    grid-gap: 20px;
    grid-template-rows: auto 100%;

    @media (max-width: 720px) {
        grid-template-columns: 1fr;
        margin: 0 100px;
    }
`

const SectionText = styled.p`
    color: white;
    text-align: center;
`

const WaveBottom = styled.div`
    position: absolute;
    width: 100%;
    bottom: -6px;
`

const WaveTop = styled.div`
    position: absolute;
    width: 100%;
    top: -6px;
    transform: rotate(180deg);
`

const Section = props => (
    <div id='about'>
        <SectionGroup image={props.image} >
            <WaveTop>
                <Wave />
            </WaveTop>
            <WaveBottom>
                <Wave />
            </WaveBottom>
            <SectionLogo src={props.logo} />
            <SectionTitleGroup>

                <SectionText> {props.text} </SectionText>
            </SectionTitleGroup>
        </SectionGroup>
    </div>
)

export default Section;