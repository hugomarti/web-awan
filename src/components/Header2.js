// import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"
import { Link } from 'react-scroll'

import './header.css'

class Header2 extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            hasScrolled: false
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
    }

    handleScroll = (event) => {
        const scrollTop = window.pageYOffset

        if (scrollTop > 50) {
            this.setState({ hasScrolled: true })
        } else {
            this.setState({ hasScrolled: false })
        }
    }


    render() {
        return (
            <div className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
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
    }
}

export default Header2