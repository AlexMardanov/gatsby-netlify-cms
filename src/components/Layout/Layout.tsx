import * as React from 'react';

import { graphql, StaticQuery } from 'gatsby';
import styled from '@emotion/styled';

import { Image } from '../Image';

interface ILayoutProps {
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

export const Layout = ({ children }: ILayoutProps) => (
  <StaticQuery
    query={layoutQuery}
    render={() => (
      <Container>
        <Image filename="poster.jpg" />
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
