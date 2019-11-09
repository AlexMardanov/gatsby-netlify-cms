import * as React from 'react'

import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'

interface IImageProps {
  filename: string
  alt?: string
}

const IMAGE_QUERY = graphql`
  query ImageQuery {
    images: allFile(filter: { sourceInstanceName: { eq: "images" } }) {
      edges {
        node {
          relativePath
          name
          childImageSharp {
            sizes(maxWidth: 2048) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`

export const Image = (props: IImageProps) => (
  <StaticQuery
    query={IMAGE_QUERY}
    render={data => {
      const image = data.images.edges.find((n: any) => {
        return n.node.relativePath.includes(props.filename)
      })

      if (!image) {
        return null
      }

      const imageSizes = image.node.childImageSharp.sizes
      return <Img alt={props.alt} sizes={imageSizes} />
    }}
  />
)
