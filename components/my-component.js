import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

const propTypes = {
  /** Site title and this comment has an unclosed tag <div> */
  siteTitle: PropTypes.string,
}

const defaultProps = {
  siteTitle: '',
}

const MyComponent = ({ siteTitle }) => (
  <div>
    <div>
      <h1>
        <Link to="/">{siteTitle}</Link>
      </h1>
    </div>
  </div>
)

MyComponent.propTypes = propTypes
MyComponent.defaultProps = defaultProps

export default MyComponent
