import React from 'react'
import { graphql } from 'gatsby'
import orderBy from 'lodash/orderBy'
import Helmet from 'react-helmet'
import moment from 'moment'
import config from '../utils/siteConfig'
import Layout from '../components/Layout'
import PostSnap from '../components/PostSnap'
import PageTitle from '../components/PageTitle'
import { Container } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const ProjectPage = ({ data, pageContext }) => {
  const posts = orderBy(
    data.contentfulTag.post,
    // eslint-disable-next-line
    [object => new moment(object.publishDateISO)],
    ['desc']
  )

  const { title, slug } = data.contentfulTag

  const currentPage = pageContext.currentPage
  const isFirstPage = currentPage === 1

  return (
    <Layout topStyle="mt-5 pt-4">
      {isFirstPage ? (
        <Helmet>
          <title>{`Tag: ${title} - ${config.siteTitle}`}</title>
          <meta
            property="og:title"
            content={`Tag: ${title} - ${config.siteTitle}`}
          />
          <meta property="og:url" content={`${config.siteUrl}/tag/${slug}/`} />
        </Helmet>
      ) : (
        <Helmet>
          <title>{`Tag: ${title} - Page ${currentPage} - ${
            config.siteTitle
          }`}</title>
          <meta
            property="og:title"
            content={`Tag: ${title} - Page ${currentPage} - ${
              config.siteTitle
            }`}
          />
          <meta property="og:url" content={`${config.siteUrl}/tag/${slug}/`} />
        </Helmet>
      )}

      <Container style={{ maxWidth: '50%' }}>
        <PageTitle>Projects</PageTitle>
        {posts.map(post => (
          <PostSnap {...post} key={post.id}>
            <p
              dangerouslySetInnerHTML={{
                __html: post.summary.childMarkdownRemark.html,
              }}
            />
          </PostSnap>
        ))}
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulTag(slug: { eq: $slug }) {
      title
      id
      slug
      post {
        id
        title
        slug
        publishDate(formatString: "MMMM DD, YYYY")
        publishDateISO: publishDate(formatString: "YYYY-MM-DD")

        body {
          childMarkdownRemark {
            html
            excerpt(pruneLength: 80)
          }
        }
        summary {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
`

export default ProjectPage
