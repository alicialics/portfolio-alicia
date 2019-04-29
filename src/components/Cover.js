import React, { useRef, useState, useEffect } from 'react'
import { Link } from 'gatsby'
import { useSpring, useTransition, animated } from 'react-spring'
import './styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
    enter: [{ color: '#bd5d38' },{ opacity: 1, height: 80, innerHeight: 80 }],
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
  }, 3000)

  return (
    <Container fluid>
      <div
        className="cover"
        style={{ paddingTop: '100px', paddingBottom: '50px' }}
      >
        <animated.div className="greeting" style={headerAnimation}>
          Hello, I'm Alicia!
        </animated.div>
      </div>
      <div className="cover">
        {transitions.map(({ item, props: { innerHeight, ...rest }, key }) => (
          <animated.div key={key} className="role" style={rest}>
            <animated.div style={{ overflow: 'hidden', height: innerHeight }}>
              {item}
            </animated.div>
          </animated.div>
        ))}
      </div>
      <div className="cover">
        <FontAwesomeIcon icon="github" color="green" />
      </div>
    </Container>
  )
}

export default Cover
