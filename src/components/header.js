// import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"
import { Link } from 'react-scroll'

import './Header.css'

const Header = props => (
  <div className='Header HeaderScrolled'>
    <div className='HeaderGroup'>
      <Link
        activeClass="active"
        to='main'
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        <img alt='' src={require('../images/cloudWhite.png')} width="40" />
      </Link>
      <Link
        activeClass="active"
        to='gallery'
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        Gallery
      </Link>
      <Link
        activeClass="active"
        to='about'
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        About
      </Link>
      <Link
        activeClass="active"
        to='contact'
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        Contact
      </Link>
      

    </div>
  </div>
)

export default Header
// <Link to='/buy'><button>Buy</button></Link>

