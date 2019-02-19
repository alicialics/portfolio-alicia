import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import Layout from '../components/Layout'
import { Container } from 'reactstrap'
import PageTitle from '../components/PageTitle'
import PageBody from '../components/PageBody'
import 'bootstrap/dist/css/bootstrap.min.css'


const PageTemplate = ({ data }) => {
  const { title, body } = data.contentfulPage

  return (
    <Layout topStyle="mt-5 pt-4">
      <Helmet>
        <title>{`${title} - ${config.siteTitle}`}</title>
      </Helmet>

      <Container style={{ maxWidth: '50%' }}>
        <PageTitle>{title}</PageTitle>
        <PageBody body={body} />
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulPage(slug: { eq: $slug }) {
      title
      slug

      body {
        childMarkdownRemark {
          html
          excerpt(pruneLength: 320)
        }
      }
    }
  }
`

export default PageTemplate
