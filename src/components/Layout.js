import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import config from '../../config'

import '../assets/sass/index.scss'

class Layout extends Component {
  render () {
    const { children } = this.props
    const { metadata } = config
    return (
      <>
        <Helmet
          title={config.siteTitle}
          meta={
            Object.keys(metadata).map(name =>
              ({
                name,
                content: metadata[name]
              })
            )
          }
        >
          <html lang="en" />
        </Helmet>
        <div className={'page-top'}>{children}</div>
      </>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
