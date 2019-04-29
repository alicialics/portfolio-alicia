import React, { Fragment } from 'react'
import config from '../utils/siteConfig'
import favicon from '../images/cover.png'
import Helmet from 'react-helmet'
import Menu from './Menu'
import { Container, Row, Col } from 'reactstrap'

const Layout = props => {
  return (
    <Fragment>
      <Container>
        <Helmet>
          <title>{config.siteTitle}</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href={favicon} />
        </Helmet>

        <Row>
          <Menu />
        </Row>
      </Container>

      <div>{props.children}</div>
    </Fragment>
  )
}
export default Layout
