import React from "react"
import PropTypes from "prop-types"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ExternalLink = ({url, icon}) => (
  <div>
    <a href={url}>
      <FontAwesomeIcon
        icon={icon}
        size='2x'
      />
    </a>
  </div>
)

ExternalLink.propTypes = {
  icon: PropTypes.isRequired,
  url: PropTypes.isRequired,
}

export default ExternalLink
