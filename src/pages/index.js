import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { graphql, StaticQuery } from "gatsby";
import Post from "../components/Post";
import { Row, Col } from "reactstrap";
import Sidebar from "../components/Sidebar";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    {/* <h1>Ready to jam?!</h1> */}
    <Row>
      <Col md="8">
        <div
          className="search-container"
          style={{
            width: "100%",
            // backgroundColor: "grey",
            padding: "4px",
            margin: "2px",
          }}
        >
          <input
            type="text"
            placeholder="Search.."
            style={{
              width: "80%",
              backgroundColor: "white",
              padding: "4px 8px",
              border: "1px solid grey",
              borderRadius: "5px",
              margin: "0px 4px 0px 4px",
            }}
          />
          <button
            type="submit"
            style={{
              padding: "4px 12px",
              border: "1px solid grey",
              borderRadius: "5px",
              margin: "0px 4px 0px 4px",
              backgroundColor: "#ff00ff",
            }}
          >
            GO!
          </button>
        </div>
        <StaticQuery
          query={IndexQuery}
          render={(data) => {
            return (
              <div>
                {data.allMarkdownRemark.edges.map(({ node }) => (
                  <Post
                    key={node.id}
                    title={node.frontmatter.title}
                    author={node.frontmatter.author}
                    path={node.frontmatter.path}
                    date={node.frontmatter.date}
                    audio_url={node.frontmatter.audio_url}
                    tags={node.frontmatter.tags}
                    // body={node.excerpt}
                    body={node.html}
                  />
                ))}
              </div>
            );
          }}
        />
      </Col>
      <Col md="4">
        <Sidebar />
      </Col>
    </Row>
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
            tags
          }
          excerpt
          html
        }
      }
    }
  }
`;

export default IndexPage;
