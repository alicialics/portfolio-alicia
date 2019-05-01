import React, { useRef, useState, useEffect, useCallback } from 'react'
import Icon from './Icon'
import { useSpring, useSprings, useTransition, animated } from 'react-spring'
import './styles.css'

const Greeting = () => {
  const headerAnimation = useSpring({ opacity: 1, from: { opacity: 0 } })

  return (
    <div className="cover">
      <animated.div className="greeting" style={headerAnimation}>
        Hello,I'm Alicia!
      </animated.div>
    </div>
  )
}

export default Greeting
