import React from 'react'
import { Badge } from 'reactstrap'

const TagList = props => {
  return props.tags.map(tag => (
    <Badge key={tag.id} href={`/tag/${tag.slug}/`}>
      {tag.title}
    </Badge>
  ))
}

export default TagList
