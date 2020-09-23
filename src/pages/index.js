import React, { useState, useEffect } from "react";
import Fuse from "fuse.js";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Post from "../components/Post";
import { Row, Col } from "reactstrap";
import Sidebar from "../components/Sidebar";
import { useJamsData } from "../hooks/jams";
import StateContextProvider from "../components/stateContext";

let fuseData = [];
const IndexPage = () => {
  const originalData = useJamsData();
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  // triggered only once if there is some data
  useEffect(() => {
    if (results.length === 0) {
      setResults(originalData);
      // also prepare the fuse data so that we can search from this data
      fuseData = prepareFuseData(originalData);
    }
  }, [originalData.length > 0]);

  // gets triggered everytime the search is changed
  useEffect(() => {
    if (!searchTerm) {
      setResults(originalData);
      return;
    }
    const results = fuseData.search(searchTerm).map((item) => item.item);
    setResults(results);
  }, [searchTerm]);

  const hasResults = results.length > 0;
  return (
    <StateContextProvider>
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
                  width: "100%",
                  backgroundColor: "white",
                  padding: "4px 8px",
                  border: "1px solid grey",
                  borderRadius: "5px",
                  margin: "0px 4px 0px 4px",
                }}
                value={searchTerm}
                onChange={(e) => {
                  // setSearchTerm(e.target.value);

                  setSearchTerm(e.target.value);
                }}
              />
            </div>
            <div>
              {searchTerm && hasResults && (
                <strong>Found {results.length} items</strong>
              )}
              {searchTerm && !hasResults && <strong>No items found</strong>}
            </div>
            <div>
              {results.map(({ node }) => {
                return (
                  <Post
                    key={node.id}
                    uid={node.frontmatter.uid}
                    title={node.frontmatter.title}
                    author={node.frontmatter.author}
                    path={node.frontmatter.path}
                    date={node.frontmatter.date}
                    audio_url={node.frontmatter.audio_url}
                    tags={node.frontmatter.tags}
                    // body={node.excerpt}
                    body={node.html}
                  />
                );
              })}
            </div>
          </Col>
          <Col md="4">
            <Sidebar />
          </Col>
        </Row>
      </Layout>
    </StateContextProvider>
  );
};

export default IndexPage;

function prepareFuseData(data) {
  const options = {
    keys: [
      {
        name: "tags",
        weight: 0.8,
      },
      {
        name: "title",
        weight: 0.6,
      },
    ],
    includeMatches: true,
  };
  const list = data.map((item) => {
    return {
      ...item,
      tags: item.node.frontmatter.tags.join(","),
    };
  });
  return new Fuse(list, options);
}
