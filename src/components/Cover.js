import React, { useRef, useState, useEffect } from 'react'
import { Link } from 'gatsby'
import { useSpring, useTransition, animated } from 'react-spring'
import './styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { Container, Row } from 'reactstrap'

function useInterval(callback, delay) {
  const savedCallback = useRef()
  // Remember the latest callback.
  useEffect(
    () => {
      savedCallback.current = callback
    },
    [callback]
  )
  // Set up the interval.
  useEffect(
    () => {
      function tick() {
        savedCallback.current()
      }
      if (delay !== null) {
        let id = setInterval(tick, delay)
        return () => clearInterval(id)
      }
    },
    [delay]
  )
}

const Cover = props => {
  const [role, setRole] = useState('Full Stack Software Engineer')
  const transitions = useTransition(role, null, {
    from: {
      position: 'absolute',
      opacity: 0,
      height: 0,
      innerHeight: 0,
    },
    enter: [{ opacity: 1, height: 80, innerHeight: 80 }, { color: '#bd5d38' }],
    leave: [{ innerHeight: 0 }, { opacity: 1 }],
  })

  const headerAnimation = useSpring({ opacity: 1, from: { opacity: 0 } })

  useInterval(() => {
    const roles = [
      'Web Developer',
      'ReactJS',
      'NodeJS',
      'Javascript',
      'Headless CMS',
      'GraphQL',
      'Full Stack Software Engineer',
    ]
    setRole(roles[(roles.findIndex(item => item === role) + 1) % roles.length])
  }, 2000)

  
  return (
    <Container fluid>
      <div className="cover" style={{ paddingTop:'13vh' ,height: '30vh' }}>
        <animated.div className="greeting" style={headerAnimation}>
          Hello, I'm Alicia!
        </animated.div>
      </div>
      <div className="cover" style={{ height: '18vh' }}>
        {transitions.map(({ item, props: { innerHeight, ...rest }, key }) => (
          <animated.div key={key} className="role" style={rest}>
            <animated.div style={{ overflow: 'hidden', height: innerHeight }}>
              {item}
            </animated.div>
          </animated.div>
        ))}
      </div>
      <div className="cover" style={{ height: '10vh' }}>
        <a href="https://github.com/zhuoli99" >
        <FontAwesomeIcon icon={faGithub} size="3x" style={{ margin: '20px' }} color="black"/>
        </a>
        <a href="https://linkedin.com/in/alicialics" >
        <FontAwesomeIcon
          icon={faLinkedin}
          size="3x"
          style={{ margin: '20px' }}
          color="black"
        />
        </a>
      </div>
    </Container>
  )
}

export default Cover
