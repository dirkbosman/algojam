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
import axios from "axios";

const SORTS = {
  COUNT: "count",
  NAME: "name",
};

const BookmarkPage = () => {
  // const TagsPage = () => {
  // const { bookmarks, handleBookmarks } = useContext(StateContext);
  const originalData = useJamsData();
  // const { bookmarks } = useContext(StateContext);

  // const [pokemon, setPokemon] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("https://dojoyo.pythonanywhere.com/aggregatedbookmarks")
  //    // .get("http://dojoyo.pythonanywhere.com/aggregatedbookmarks")
  //     .then(function (response) {
  //       console.log(response);
  //       setPokemon(response.data);
  //     })
  //     .catch(function (error) {
  //       console.log("Request failed");
  //     });
  // }, []);

  return (
    <StateContextProvider>
      <Layout>
        <Row>
          <Col md="8">
            {/* <h3>Community Bookmark Activity</h3>
            <div className="commBookmarksContainer">
              {pokemon.map(({ count }, index) => (
                <div className="commBookmarks" key={index}>
                  <div className="commBookmarkItem">{count}</div>
                </div>
              ))}
            </div>
            <br />
            <br /> */}
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
