/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from "gatsby"  

import Header2 from './Header2'
import Footer from "./Footer"

import "./layout.css"


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`   
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
          keywords
        }
      }
    }
  `)

  return (
    <>
    <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: 'description', content: data.site.siteMetadata.description },
          { name: 'keywords', content: data.site.siteMetadata.keywords }
        ]}
      />
      <Header2 />
      <main>{children}</main>
      <Footer id='contact'>
      Feel free to contact us if you have any questions or want to know more about our services. Send us an email to <br /> <a href='mailto:hgmarti@gmail.com'>hgmarti@gmail.com</a> <br />© 2018 - 
      Terms of Service - Privacy Policy
      </Footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
