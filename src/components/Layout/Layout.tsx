import * as React from 'react'

import { graphql, StaticQuery } from 'gatsby'
import styled from '@emotion/styled'

interface ILayoutProps {
  children: React.ReactNode
}

const QUERY = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

const Container = styled.div`
  margin: 0 auto;
  max-width: 800px;
`

export const Layout = ({ children }: ILayoutProps) => (
  <StaticQuery
    query={QUERY}
    render={() => (
      <Container>
        <main>{children}</main>
      </Container>
    )}
  />
)
