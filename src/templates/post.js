import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import Layout from '../components/Layout'
import { Container } from 'reactstrap'
import PostPagin from '../components/PostPagin'
import PageTitle from '../components/PageTitle'
import PostBody from '../components/PostBody'

const PostTemplate = ({ data, pageContext }) => {
  const { title, body, publishDate, tags } = data.contentfulPost
  const previous = pageContext.prev
  const next = pageContext.next

  return (
    <Layout topStyle="mt-5 pt-4">
      <Helmet>
        <title>{`${title} - ${config.siteTitle}`}</title>
      </Helmet>

      <PageTitle>{title}</PageTitle>

      <Container style={{ maxWidth: '50%' }}>
        <PostBody tags={tags} date={publishDate} body={body} />
      </Container>
      <PostPagin previous={previous} next={next} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      title
      slug

      publishDate(formatString: "MMMM DD, YYYY")
      publishDateISO: publishDate(formatString: "YYYY-MM-DD")
      tags {
        title
        id
        slug
      }

      body {
        childMarkdownRemark {
          html
          excerpt(pruneLength: 320)
        }
      }
    }
  }
`

export default PostTemplate
