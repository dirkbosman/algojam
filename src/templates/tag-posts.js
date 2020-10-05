import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Post from "../components/Post";
import StateContextProvider from "../components/stateContext";
import { slugify } from "../utils/utilityFunctions";

const tagPosts = ({ data, pageContext }) => {
  const { tag } = pageContext;
  const { totalCount } = data.allMarkdownRemark;
  const pageHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`;

  return (
    <StateContextProvider>
      {/* <Layout pageTitle={pageHeader}> */}
      <Layout>
        <h1>{pageHeader}</h1>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Post
            key={node.id}
            uid={node.frontmatter.uid}
            slug={node.fields.slug}
            title={node.frontmatter.title}
            author={node.frontmatter.author}
            date={node.frontmatter.date}
            body={node.excerpt}
            tags={node.frontmatter.tags}
            fluid={node.frontmatter.image.childImageSharp.fluid}
            // audio_url={node.frontmatter.audio_url}
            // palette={node.frontmatter.palette}
            // body={node.html}
          />
        ))}
      </Layout>
    </StateContextProvider>
  );
};

export const tagQuery = graphql`
  query($tag: String!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            uid
            title
            date(formatString: "MMMM Do YYYY")
            author
            tags
            audio_url
            palette
            image {
              childImageSharp {
                fluid(maxWidth: 650, maxHeight: 370) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
          excerpt
          html
        }
      }
    }
  }
`;

export default tagPosts;
