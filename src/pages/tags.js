import React, { useContext, useState } from "react";
import SEO from "../components/seo";
import { Row, Col } from "reactstrap";
import { useJamsData } from "../hooks/jams";
import Layout from "../components/layout";
import { graphql, Link } from "gatsby";
import { StateContext } from "../components/stateContext";
import GlobalTags from "./tags/globalTags";
import Bookmarks from "./tags/bookmarks";
import Sidebar from "../components/Sidebar";
import StateContextProvider from "../components/stateContext";

const SORTS = {
  COUNT: "count",
  NAME: "name",
};
const TagsPage = () => {
  // const { bookmarks, handleBookmarks } = useContext(StateContext);
  const originalData = useJamsData();
  const { bookmarks } = useContext(StateContext);
  const [copylog, setCopyLog] = useState([]);

  return (
    <StateContextProvider>
      <Layout>
        <Row>
          <Col md="8">
            <GlobalTags data={originalData} />
            <br />
            <br />
            <Bookmarks data={originalData} title="Bookmarks" isLocal={true} />
          </Col>

          <Col md="4">
            <Sidebar />
          </Col>
        </Row>
      </Layout>
    </StateContextProvider>
  );
};

export default TagsPage;
