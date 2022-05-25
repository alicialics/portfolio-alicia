import React, { useRef, useState, useEffect, useCallback } from 'react'

import { useSpring, useSprings, useTransition, animated } from 'react-spring'
import './styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faStar, faCloud } from '@fortawesome/free-solid-svg-icons'
import { Container, Row, Col } from 'reactstrap'
import range from 'lodash/range'

const Cover = ({children,props} )=> {
  return (
    <Container fluid>
      {children}
      <div className="cover">
        <a href="https://github.com/alicialics" className="socialicon">
          <FontAwesomeIcon icon={faGithub} size="3x" />
        </a>
        <a href="https://linkedin.com/in/alicialics" className="socialicon">
          <FontAwesomeIcon icon={faLinkedin} size="3x" />
        </a>
      </div>
    </Container>
  )
}

export default Cover
