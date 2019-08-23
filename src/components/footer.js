/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import { Row, Col } from 'reactstrap';
import Contact from '../components/contact'

import styles from "../styles/components/footer.module.scss"

const Footer = ({ contacts }) => (
  <Row styles={styles.row}>
    {
      contacts.map((contact, index) => {
        return(
          <Col key={index}>
            <Contact contact={contact} />
          </Col>
        )
      })
    }
  </Row>
)

Footer.propTypes = {
  contacts: PropTypes.array.isRequired,
}

export default Footer
