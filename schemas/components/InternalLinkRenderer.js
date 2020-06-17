import React from 'react'
import PropTypes from 'prop-types'
import { FaLink } from 'react-icons/fa'

const InternalLinkRenderer = props => (
  <span>{props.children} <FaLink style={{display: 'inline'}}/></span>
)

InternalLinkRenderer.propTypes = {
  children: PropTypes.node.isRequired
}

export default InternalLinkRenderer