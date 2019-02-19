import React from 'react'
import { Jumbotron, CardDeck } from 'reactstrap'
import CoverCard from '../components/CoverCard'

const Cover = props => {
  return (
    <Jumbotron fluid className="bg-white">
      <h1 className="display-3 text-center font-weight-bold">Alicia Li</h1>
      <div className="mx-auto  pt-5 mt-4" style={{ width: '55%' }}>
        <CardDeck>
          <CoverCard title="View Projects" link="/project/" />

          <CoverCard title="Know More About Me" link="/about/" />
        </CardDeck>
        <CardDeck className="mt-2">
          <CoverCard title="Blog" link="/blog/" />
          <CoverCard title="Skills" link="/skills/" />
        </CardDeck>
      </div>
    </Jumbotron>
  )
}

export default Cover
