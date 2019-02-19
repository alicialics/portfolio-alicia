import React from 'react'
import { Card } from 'reactstrap'
import { Link } from 'gatsby'

const CoverCard = props => {
  return (
    <Card body outline color="info">
      <Link to={props.link} style={{ textDecoration: 'none' }}>
        <h5
          className="text-body font-weight-bold"
          style={{ fontFamily: 'Arial' }}
        >
          {props.title}
        </h5>
      </Link>
    </Card>
  )
}

export default CoverCard
