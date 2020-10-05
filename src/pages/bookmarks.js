import React, { useContext, useState, useEffect } from "react";
// import SEO from "../components/seo";
import { Row, Col } from "reactstrap";
import { useJamsData } from "../hooks/jams";
import Layout from "../components/layout";
// import { graphql, Link } from "gatsby";
import { StateContext } from "../components/stateContext";
// import GlobalTags from "./tags/globalTags";
import Bookmarks from "./tags/bookmarks";
import Sidebar from "../components/Sidebar";
import StateContextProvider from "../components/stateContext";
import axios from "axios";

const SORTS = {
  COUNT: "count",
  NAME: "name",
};
const TagsPage = () => {
  // const { bookmarks, handleBookmarks } = useContext(StateContext);
  const originalData = useJamsData();
  const { bookmarks } = useContext(StateContext);

  // https://codesandbox.io/s/pokemon-axios-forked-ky3f5?file=/src/App.js:209-839
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    axios
      .get("http://dojoyo.pythonanywhere.com/aggregatedbookmarks")
      .then(function (response) {
        console.log(response);
        setPokemon(response.data);
      })
      .catch(function (error) {
        console.log("Request failed");
      });
  }, []);

  return (
    <StateContextProvider>
      <Layout>
        <Row>
          <Col md="8">
            {/* <div className="aggregatedBookmarksContainer">
              {aggregatedBookmarks.map(({ count }, index) => (
                <div className="LatestCopylog" key={index}>
                  <div className="CopylogItem">{count}</div>
                </div>
              ))}
            </div> */}
            <h3>Community Bookmark Activity</h3>
            <div className="commBookmarksContainer">
              {pokemon.map(({ count }, index) => (
                <div className="commBookmarks" key={index}>
                  <div className="commBookmarkItem">{count}</div>
                </div>
              ))}
            </div>
            <br />
            <br />
            {/* <GlobalTags data={originalData} />
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

export default TagsPage;