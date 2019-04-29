import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import PostSnap from '../components/PostSnap'
import Helmet from 'react-helmet'
import Pagination from '../components/Pagination'
import config from '../utils/siteConfig'
import { Container } from 'reactstrap'
import PageTitle from '../components/PageTitle'

const BlogsPage = ({ data, pageContext }) => {
  const posts = data.allContentfulPost.edges
  const { currentPage } = pageContext
  const isFirstPage = currentPage === 1

  return (
    <Layout topStyle="mt-5 pt-4">
      {!isFirstPage && (
        <Helmet>
          <title>{`${config.siteTitle} - Page ${currentPage}`}</title>
        </Helmet>
      )}
      <Container style={{ maxWidth: '50%' }}>
        <PageTitle>Blog Posts</PageTitle>
        {posts.map(({ node: post }) => (
          <PostSnap {...post} key={post.id}>
            {post.body.childMarkdownRemark.excerpt}
          </PostSnap>
        ))}
        <Pagination context={pageContext} />
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allContentfulPost(
      sort: { fields: [publishDate], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          title
          id
          slug
          publishDate(formatString: "MMMM DD, YYYY")

          body {
            childMarkdownRemark {
              html
              excerpt(pruneLength: 80)
            }
          }
        }
      }
    }
  }
`

export default BlogsPage
