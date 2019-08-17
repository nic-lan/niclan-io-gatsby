import React from "react"
import PropTypes from "prop-types"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from "../styles/components/externalLink.module.scss"

const ExternalLink = ({url, icon}) => (
  <div className={styles.container}>
    <a className={styles.a} href={url}>
      <FontAwesomeIcon
        icon={icon}
        size='2x'
      />
    </a>
  </div>
)

ExternalLink.propTypes = {
  icon: PropTypes.object.isRequired,
  url: PropTypes.string.isRequired,
}

export default ExternalLink
