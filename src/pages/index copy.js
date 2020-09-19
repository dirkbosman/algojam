import React, { useState, useEffect } from "react";
import Fuse from "fuse.js";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { graphql, StaticQuery } from "gatsby";
import Post from "../components/Post";
import { Row, Col } from "reactstrap";
import Sidebar from "../components/Sidebar";
import { useJamsData } from "../hooks/jams";

const IndexPage = () => {
  const [data, setData] = useJamsData();
  const [content, setContent] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState("");
  let fuseData = [];

  useEffect(() => {
    // index with fuse
    const options = {
      keys: [
        {
          name: "tags",
          weight: 0.8,
        },
        {
          name: "title",
          weight: 1,
        },
      ],
      includeMatches: true,
    };
    const list = content.map((item) => {
      return {
        tags: item.node.frontmatter.tags.join(","),
        title: item.node.frontmatter.title,
        id: item.node.id,
      };
    });
    fuseData = new Fuse(list, options);
  }, [content.length]);

  const doSearch = (term) => {
    debugger;
    const result = fuseData.search(term);
    console.log("result :>> ", result);
  };

  return (
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
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
            />
            <button
              type="submit"
              disabled={searchTerm === ""}
              onClick={doSearch}
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
              setContent(data.allMarkdownRemark.edges);
              return (
                <div>
                  {content.map(({ node }) => (
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
};

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
