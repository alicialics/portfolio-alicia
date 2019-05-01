import React from 'react'
import { Keyframes, animated } from 'react-spring/renderprops'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTree, faCloud } from '@fortawesome/free-solid-svg-icons'

const Container = Keyframes.Spring(async next => {
  while (true) {
    await next({
      from: { radians: 0, color: '#247BA0' },
      to: { radians: 2 * Math.PI },
    })
  }
})

export default class Treeicon extends React.PureComponent {
  state = { items: ['item1', 'item2', 'item3', 'item4', 'item5','item6'] }

  render() {
    const Content = ({ radians, color }) =>
      this.state.items.map((_, i) => (
        <animated.svg
          key={i}
          style={{
            width: 60,
            height: 60,
            willChange: 'transform',
            transform: radians.interpolate(
              r =>
                `translate3d(0, ${15 *
                  Math.sin(r + (i * 2 * Math.PI) / 1.6)}px, 0)`
            ),
          }}
          viewBox="0 0 400 400"
        >
          <animated.g fillRule="evenodd">
            <FontAwesomeIcon icon={faTree} color="#247BA0" />
          </animated.g>
        </animated.svg>
      ))
    const { items } = this.state

    return (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '10px',
          alignItems: 'center',
        }}
      >
        <Container reset native keys={items} config={{ duration: 2000 }}>
          {Content}
        </Container>
      </div>
    )
  }
}
