import * as React from 'react';

import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from '@emotion/styled';

import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';

type TFluid = {
  base64: string;
  tracedSVG: string;
  aspectRatio: number;
  src: string;
  srcSet: string;
  srcWebp: string;
  srcSetWebp: string;
  sizes: string;
  originalImg: string;
  originalName: string;
  presentationWidth: number;
  presentationHeight: number;
};

interface IIndexQueryProps {
  data: {
    poster: {
      childImageSharp: {
        fluid: TFluid;
      };
    };
  };
}

const ImageWrapper = styled.div`
  max-width: 300px;
  margin: 0 auto;
`;

export const IndexPage: React.FC<IIndexQueryProps> = ({ data }) => {
  return (
    <>
      <SEO title="home page" />

      <Layout>
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <ImageWrapper>
          <Img fluid={data.poster.childImageSharp.fluid} />
        </ImageWrapper>
      </Layout>
    </>
  );
};

export default IndexPage;

export const indexQuery = graphql`
  query IndexQuery {
    poster: file(relativePath: { eq: "poster.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
