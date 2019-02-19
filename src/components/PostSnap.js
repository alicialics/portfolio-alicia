import React from 'react'

import { Link } from 'gatsby'
import { CardText, CardBody, CardSubtitle } from 'reactstrap'

const PostSnap = ({ slug, title, publishDate, body, ...props }) => {
  return (
    <div>
      <hr />
      <Link to={`/${slug}/`} style={{ textDecoration: 'none' }}>
        <CardBody>
          <h3 className="text-dark ">{title}</h3>

          <CardSubtitle className="text-muted  mb-4">
            {publishDate}
          </CardSubtitle>
          <CardText className="text-dark ">{props.children}</CardText>
        </CardBody>
      </Link>
    </div>
  )
}

export default PostSnap
