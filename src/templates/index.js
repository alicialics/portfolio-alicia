import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Cover from '../components/Cover'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

const Index = ({ data, pageContext }) => {
  const { currentPage } = pageContext
  const isFirstPage = currentPage === 1
  library.add(faGithub, faLinkedin)
  return (
    <Layout>
      {!isFirstPage && (
        <Helmet>
          <title>{config.siteTitle}</title>
        </Helmet>
      )}

      <Cover />
      <FontAwesomeIcon icon="github" color="green" />
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
