// import React from "react";
import React, { useState, useEffect } from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Post from "../components/Post";
import { Row, Col } from "reactstrap";
import Sidebar from "../components/Sidebar";
// import StateContextProvider from "../components/stateContext";

// import { slugify } from "../utils/utilityFunctions";

const TagPosts = ({ data, pageContext }) => {
  const { tag } = pageContext;
  const { totalCount } = data.allMarkdownRemark;
  const pageHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`;

  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return (
    <Layout>
      <Row>
        <Col md="8">
          <div className="tagPostsTitle">
            <h5>{pageHeader}</h5>
          </div>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <Post
              key={node.id}
              uid={node.frontmatter.uid}
              // slug={node.fields.slug}
              title={node.frontmatter.title}
              author={node.frontmatter.author}
              date={node.frontmatter.date}
              body={node.excerpt}
              tags={node.frontmatter.tags}
              fluid={node.frontmatter.image.childImageSharp.fluid}
              audio_url={node.frontmatter.audio_url}
              palette={node.frontmatter.palette}
              body={node.html}
            />
          ))}
        </Col>
        <Col md="4">
          <Sidebar />
        </Col>
      </Row>
    </Layout>
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

export default TagPosts;
