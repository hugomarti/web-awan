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
      <img alt='' src={require('../images/logoWhite.png')} width='500' />
          <h1>Mix | Master | Record <br/> your music</h1>
          

        <Wave />
      </div>
    </div>
    <div className='Cards' id='gallery'>
      <h2>Our setup</h2>
      <div className='CardGroup'>
        <Card
          // title='Design System'
          // text='10 sections'
          image={require('../images/filterStudio1.jpg')}
        />
        <Card
          // title='React for Deigners'
          // text='12 sections'
          image={require('../images/filterStudio2.jpg')}
        />
        <Card
          // title='Sound Design'
          // text='5 sections'
          image={require('../images/filterStudio3.jpg')}
        />
        <Card
          // title='ARKit 2'
          // text='10 sections'
          image={require('../images/filterStudio4.jpg')}
        />
        <Card
          // title='ARKit 2'
          // text='10 sections'
          image={require('../images/filterStudio5.jpg')}
        />
        <Card
          // title='ARKit 2'
          // text='10 sections'
          image={require('../images/filterStudio6.jpg')}
        />
      </div>
    </div>
    <Section
      image={require('../images/vinyl-texture.jpg')}
      logo={require('../images/cloudWhite.png')}
      title='Mix, Master and Record'
      text='Awan Studio is a recording studio located in the 
      beautiful island of Bali. Hosted in a villa surounded by nature, 
      equiped with great equipment and proper acustics to record and process your projects.
      We have been working with artists and labels around the world delivering high quaility services 
      reaching the standards from nowadays.
      '
    />
  </Layout>
)

export default IndexPage


