import React, { useState, useEffect } from "react";
// import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Badge, Button } from "reactstrap";
import { slugify } from "../utils/utilityFunctions";
import { Row, Col } from "reactstrap";
import Sidebar from "../components/Sidebar";
import StateContextProvider from "../components/stateContext";

const TagsPage = ({ pageContext }) => {
  const { tags, tagPostCounts } = pageContext;

  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return (
    // <StateContextProvider>
    <Layout pageTitle="All tags">
      <SEO title="All tags" keywords={["tags", "topics"]} />
      <Row>
        <Col md="8">
          <h1>All Tags</h1>
          <div className="cardTagsPage">
            <h5>Browse your fav jams by tag:</h5>
            <ul className="postTagsPage">
              {tags.map((tag) => (
                <li key={tag} style={{ marginBottom: "10px" }}>
                  <Button
                    className="postTagsBadge"
                    href={`/tag/${slugify(tag)}`}
                  >
                    {tag} <Badge color="light">{tagPostCounts[tag]}</Badge>
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        </Col>
        <Col md="4">
          <Sidebar />
        </Col>
      </Row>
    </Layout>
    // </StateContextProvider>
  );
};

export default TagsPage;
