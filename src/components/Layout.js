import React, { Fragment } from 'react'
import config from '../utils/siteConfig'
import favicon from '../images/cover.png'
import Helmet from 'react-helmet'
import Menu from './Menu'
import { Container, Row, Col } from 'reactstrap'
import Icon from './Icon'
import Treeicon from './Treeicon'

const Layout = props => {
  return (
    <Fragment>
      <Container>
        <Helmet>
          <title>{config.siteTitle}</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href={favicon} />
        </Helmet>{' '}
        <Menu />
        <div>{props.children}</div>
        <div className="fixed-bottom">
          <Treeicon />
        </div>
      </Container>
    </Fragment>
  )
}
export default Layout
