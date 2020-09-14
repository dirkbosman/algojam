import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { graphql, StaticQuery } from "gatsby";
import Post from "../components/Post";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Ready to jam?!</h1>
    <StaticQuery
      query={IndexQuery}
      render={(data) => {
        return (
          <div>
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <Post
                title={node.frontmatter.title}
                author={node.frontmatter.author}
                path={node.frontmatter.path}
                date={node.frontmatter.date}
                audio_url={node.frontmatter.audio_url}
                body={node.excerpt}
              />
            ))}
          </div>
        );
      }}
    />
  </Layout>
);

const IndexQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "YYYY-MM-DD ")
            author
            path
            audio_url
          }
          excerpt
        }
      }
    }
  }
`;

export default IndexPage;
