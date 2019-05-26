import * as React from 'react';

import { graphql, StaticQuery } from 'gatsby';
import styled from '@emotion/styled';

interface ILayout {
  children: React.ReactNode;
}

const layoutQuery = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

const Container = styled.div`
  margin: 0 auto;
  max-width: 800px;
`;

export const Layout = ({ children }: ILayout) => (
  <StaticQuery
    query={layoutQuery}
    render={() => (
      <Container>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </Container>
    )}
  />
);
