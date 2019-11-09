import * as React from 'react'

import { graphql } from 'gatsby'

import { Layout } from '../components/Layout'
import { SEO } from '../components/SEO'

interface IIndexQueryProps {
  data: any
}

export const IndexPage: React.FC<IIndexQueryProps> = ({ data }) => {
  const articles = data.allMarkdownRemark.edges

  return (
    <>
      <SEO title="home page" />

      <Layout>
        <h1>Articles from Netlify CMS</h1>
        <ul>
          {articles.map((acticle: any) => {
            const title = acticle.node.frontmatter.title

            return <li key={title}>{title}</li>
          })}
        </ul>
      </Layout>
    </>
  )
}

export default IndexPage

export const indexQuery = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            slug
          }
        }
      }
    }
  }
`
