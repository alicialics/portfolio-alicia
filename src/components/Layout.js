import React from 'react'
import config from '../utils/siteConfig'
import favicon from '../images/cover.png'
import Helmet from 'react-helmet'
import Menu from './Menu'

const Layout = props => {
  return (
    <div>
      <Helmet>
        <title>{config.siteTitle}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={favicon} />
      </Helmet>

      <Menu />
      <div className={props.topStyle}>{props.children}</div>
    </div>
  )
}
export default Layout
