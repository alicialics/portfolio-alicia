import React from 'react'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap'

class PaginationCom extends React.Component {
  render() {
    const { numPages, currentPage, slug } = this.props.context
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages

    const prevPageNum = currentPage - 1 === 1 ? `` : currentPage - 1
    const nextPageNum = currentPage + 1

    const pathPrefix = typeof slug === 'string' ? `/tag/${slug}` : `/blog/`
    const prevPageLink = isFirst ? null : `${pathPrefix}/${prevPageNum}/`
    const nextPageLink = isLast ? null : `${pathPrefix}/${nextPageNum}/`
    const page = []

    console.log(page)
    return (
      <Pagination
        aria-label="Page navigation example"
        listClassName="justify-content-center"
      >
        <PaginationItem disabled={isFirst}>
          <PaginationLink previous href={prevPageLink} />
        </PaginationItem>

        {Array.from({ length: numPages }).map((_, i) => {
          const href = `${pathPrefix}/${i + 1 === 1 ? `` : i + 1}/`
          return (
            <PaginationItem active={currentPage === i + 1} key={i}>
              <PaginationLink href={href}>{i + 1}</PaginationLink>
            </PaginationItem>
          )
        })}

        <PaginationItem disabled={isLast}>
          <PaginationLink next href={nextPageLink} />
        </PaginationItem>
      </Pagination>
    )
  }
}

export default PaginationCom
