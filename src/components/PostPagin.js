import React from 'react'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap'

const PostPagin = props => {
  return (
    <Pagination listClassName="justify-content-center">
      <PaginationItem disabled={!props.previous}>
        <PaginationLink
          previous
          href={props.previous && `/${props.previous.slug}/`}
        >
          Previous
        </PaginationLink>
      </PaginationItem>

      <PaginationItem disabled={!props.next}>
        <PaginationLink next href={props.next && `/${props.next.slug}/`}>
          Next
        </PaginationLink>
      </PaginationItem>
    </Pagination>
  )
}

export default PostPagin
