import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Badge, Button } from "reactstrap";
import { slugify } from "../utils/utilityFunctions";
import { Row, Col } from "reactstrap";
import Sidebar from "../components/Sidebar";
import StateContextProvider from "../components/stateContext";

const tagsPage = ({ pageContext }) => {
  const { tags, tagPostCounts } = pageContext;

  // console.log(tags);
  // console.log(tagPostCounts);

  return (
    <StateContextProvider>
      <Layout pageTitle="All tags">
        <SEO title="All tags" keywords={["tags", "topics"]} />
        <Row>
          <Col md="8">
            <ul>
              {tags.map((tag) => (
                <li key={tag} style={{ marginBottom: "10px" }}>
                  <Button color="primary" href={`/tag/${slugify(tag)}`}>
                    {tag} <Badge color="light">{tagPostCounts[tag]}</Badge>
                  </Button>
                </li>
              ))}
            </ul>
          </Col>
          <Col md="4">
            <Sidebar />
          </Col>
        </Row>
      </Layout>
    </StateContextProvider>
  );
};

export default tagsPage;