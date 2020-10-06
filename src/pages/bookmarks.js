import React, { useState, useEffect } from "react";
// import React, { useContext, useState, useEffect } from "react";
// import SEO from "../components/seo";
import { Row, Col } from "reactstrap";
import { useJamsData } from "../hooks/jams";
import Layout from "../components/layout";
// import { graphql, Link } from "gatsby";
// import { StateContext } from "../components/stateContext";
// import GlobalTags from "./tags/globalTags";
import Bookmarks from "../components/tags/bookmarks";
// import Bookmarks from "../tags/bookmarks";
import Sidebar from "../components/Sidebar";
import StateContextProvider from "../components/stateContext";

// import React, { useContext, useState, useEffect } from "react";
// import axios from "axios";

// const SORTS = {
//   COUNT: "count",
//   NAME: "name",
// };

const BookmarkPage = () => {
  // const TagsPage = () => {
  // const { bookmarks, handleBookmarks } = useContext(StateContext);
  const originalData = useJamsData();
  // const { bookmarks } = useContext(StateContext);

  return (
    <StateContextProvider>
      <Layout>
        <Row>
          <Col md="8">
            <h1>History</h1>
            <Bookmarks
              data={originalData}
              title="Your Bookmarks"
              isLocal={true}
            />
          </Col>
          <Col md="4">
            <Sidebar />
          </Col>
        </Row>
      </Layout>
    </StateContextProvider>
  );
};

export default BookmarkPage;
// export default TagsPage;
