/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import { Container } from 'reactstrap';

import styles from "../styles/components/layout.scss"

const Layout = ({ children }) => (
  <Container styles={styles.container}>{children}</Container>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
