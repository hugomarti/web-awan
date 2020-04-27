import React from "react"
// import { Link } from "gatsby"
// import styled from 'styled-components';

import Layout from "../components/layout"
import Card from "../components/Card"
import Section from "../components/Section"
import Wave from "../components/Wave"
// import staticdata from '../../staticdata.json';
// import Cell from "../components/Cell"


const IndexPage = () => (
  <Layout>
    <div className='Hero' id='main'>
      <div className='HeroGroup'>
      <img alt='' src={require('../images/logoWhite.png')} width='370' />
          <h1>Mix | Master | Record <br/> your music</h1>
          

        <Wave />
      </div>
    </div>
    <div className='Cards' id='gallery'>
      <h2>Our setup</h2>
      <div className='CardGroup'>
        <Card
          image={require('../images/filterStudio1.jpg')}
        />
        <Card
          image={require('../images/filterStudio2.jpg')}
        />
        <Card
          image={require('../images/filterStudio3.jpg')}
        />
        <Card
          image={require('../images/filterStudio4.jpg')}
        />
        <Card
          image={require('../images/filterStudio5.jpg')}
        />
        <Card
          image={require('../images/filterStudio6.jpg')}
        />
      </div>
    </div>
    <Section
      image={require('../images/vinyl-texture.jpg')}
      logo={require('../images/cloudWhite.png')}
      title='Mix, Master and Record'
      text='Awan Studio is a recording studio located on the beautiful island of Bali.
       We are primarily a music production facility. We record, mix, and master singles, demos, and full-length albums for producers and musicians.
      We specialize in walking our clients through the entire process of creating an album. Let us use our years of experience to help you get the best product possible.
      '
    />
  </Layout>
)

export default IndexPage


