import React, { useContext, useState, useEffect } from "react";
// import SEO from "../components/seo";
import { Row, Col } from "reactstrap";
import { useJamsData } from "../hooks/jams";
import Layout from "../components/layout";
// import { graphql, Link } from "gatsby";
import { StateContext } from "../components/stateContext";
import GlobalTags from "./tags/globalTags";
// import Bookmarks from "./tags/bookmarks";
import Sidebar from "../components/Sidebar";
import StateContextProvider from "../components/stateContext";
import axios from "axios";

const SORTS = {
  COUNT: "count",
  NAME: "name",
};
// const TagsPage = () => {
const DiscoverPage = () => {
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
            <GlobalTags data={originalData} />
            <br />
            <br />
            <h3>Tracks AND Playlists (Created with code)</h3>
            <div>
              <ul>
                <li>item 1</li>
                <li>item 2</li>
                <li>item 3</li>
              </ul>
            </div>
            <br />
            <br />
            <h3>Tracks AND Playlists (Created with no-code)</h3>
            <div>
              <ul>
                <li>item 1</li>
                <li>item 2</li>
                <li>item 3</li>
              </ul>
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

// export default TagsPage;
export default DiscoverPage;
