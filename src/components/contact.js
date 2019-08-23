/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// import styles from "../styles/components/footer.module.scss"

const Contact = ({ contact }) => (
  <a href={contact.url}>
    <FontAwesomeIcon icon={contact.icon} size='2x' />
  </a>
)

Contact.propTypes = {
  contact: PropTypes.shape({
    icon: PropTypes.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
}

export default Contact
