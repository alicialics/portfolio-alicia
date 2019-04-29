import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Cover from '../components/Cover'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'

const Index = ({ data, pageContext }) => {
  const { currentPage } = pageContext
  const isFirstPage = currentPage === 1

  return (
    <Layout>
      {!isFirstPage && (
        <Helmet>
          <title>{config.siteTitle}</title>
        </Helmet>
      )}

      <Cover />
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

export default Index
