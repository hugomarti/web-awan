/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"  //Checker esto cuando llegue el momento

import Header2 from './Header2'

import "./layout.css"
import Footer from "./Footer"

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`   //Checker esto cuando llegue el momento
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <>
      <Header2 />
      <main>{children}</main>
      <Footer id='contact'>
      If you have any question or want to know more about our services, send us an email to hgmarti@gmail.com <br />© 2018 - 
      Terms of Service - Privacy Policy
      </Footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
