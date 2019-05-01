import React, { useState, useEffect } from 'react'
import { useSpring, useSprings, useTransition, animated } from 'react-spring'


const roles = [
  'Full Stack Software Engineer',
  'Web Developer',
  'ReactJS',
  'NodeJS',
  'ES2015+',
  'Headless CMS',
  'GraphQL',
]
const Roles = () => {
  const [index, setIndex] = useState(0)
  const transitions = useTransition(roles[index], null, {
    from: {
      position: 'absolute',
      opacity: 0,
      height: 0,
      innerHeight: 0,
      color: '#888',
    },
    enter: [
      { opacity: 1, height: 80, innerHeight: 100 },
      { color: 'palevioletred' },
    ],
    leave: [{ innerHeight: 0 }, { opacity: 0 }],
  })
 

  useEffect(
    () =>
      void setInterval(
        () => setIndex(index => (index + 1) % roles.length),
        3000
      ),
    []
  )

  return (
    <div>
    <div className="cover" style={{ marginTop:'65px', marginBottom:'50px'}}>
        {transitions.map(({ item, props: { innerHeight, ...rest }, key }) => (
          <animated.div key={key} className="role" style={rest}>
            <animated.div style={{ overflow: 'hidden', height: innerHeight }}>
              {item}
            </animated.div>
          </animated.div>
        ))}
      </div>
    </div>
  )
}

export default Roles
