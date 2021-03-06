import React, { useState, useEffect } from "react";
import Fuse from "fuse.js";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Post from "../components/Post";
import { Row, Col } from "reactstrap";
import Sidebar from "../components/Sidebar";
import { useJamsData } from "../hooks/jams";

let fuseData = [];

const IndexPage = () => {
  const originalData = useJamsData();
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const hasResults = results.length > 0;

  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (results.length === 0) {
      setResults(originalData);
      fuseData = prepareFuseData(originalData);
    }
  }, [originalData.length]);

  useEffect(() => {
    if (!searchTerm) {
      setResults(originalData);
      return;
    }
    const results = fuseData.search(searchTerm).map((item) => item.item);
    setResults(results);
  }, [searchTerm]);

  if (!hasMounted) {
    return null;
  }

  return (
    <Layout>
      <SEO title="Home" />
      <Row>
        <Col md="8">
          <div
            className="search-container"
            style={{
              width: "100%",
              marginTop: "5px",
              marginBottom: "5px",
            }}
          >
            <input
              type="text"
              placeholder="find your algo rhythm..."
              style={{
                width: "100%",
                backgroundColor: "white",
                padding: "4px 8px",
                border: "1px solid lightgrey",
                borderRadius: "5px",
              }}
              value={searchTerm}
              onChange={(e) => {
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
                  slug={node.fields.slug}
                  date={node.frontmatter.date}
                  audio_url={node.frontmatter.audio_url}
                  tags={node.frontmatter.tags}
                  palette={node.frontmatter.palette}
                  fluid={node.frontmatter.image.childImageSharp.fluid}
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
  );
};

export default IndexPage;

function prepareFuseData(data) {
  const options = {
    keys: [
      {
        name: "uid",
        weight: 1,
      },
      {
        name: "tags",
        weight: 0.6,
      },
      {
        name: "title",
        weight: 0.4,
      },
    ],
    useExtendedSearch: true,
    includeMatches: true,
  };

  const list = data.map((item) => {
    return {
      ...item,
      tags: item.node.frontmatter.tags.join(","),
      uid: item.node.frontmatter.uid.toString(),
    };
  });

  return new Fuse(list, options);
}
