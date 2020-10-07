import React, { useContext, useState, useEffect } from "react";
// import SEO from "../components/seo";
import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Button,
  Link,
} from "reactstrap";
import { useJamsData } from "../hooks/jams";
import Layout from "../components/layout";
// import { graphql, Link } from "gatsby";
import { StateContext } from "../components/stateContext";
// import GlobalTags from "../components/tags/globalTags";
// import Bookmarks from "./tags/bookmarks";
import Sidebar from "../components/Sidebar";
// import StateContextProvider from "../components/stateContext";
import axios from "axios";

import HarryImage from "../images/harry.jpg";
import discover from "../utils/discover";

// const SORTS = {
//   COUNT: "count",
//   NAME: "name",
// };

// const TagsPage = () => {
const DiscoverPage = () => {
  // const { bookmarks, handleBookmarks } = useContext(StateContext);
  const originalData = useJamsData();
  const { bookmarks } = useContext(StateContext);

  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }

  return (
    <Layout>
      <Row>
        <Col md="8">
          {" "}
          <Row className="mb-4">
            <h3>Tracks AND Playlists (Created with code)</h3>

            {/* <div>
                <ul>
                  {Object.keys(discover).map(function (key, index) {
                    <li key={index}>{discover[key]}</li>;
                  })}
                </ul>
              </div> */}

            {/* <div>
              {Object.keys(discover).map((v, index) => (
                <ul key={index} className="quicklist-content">
                  {QuickListData[v].map((item, itemIndex) => (
                    <li className="quicklist-item" key={itemIndex}>
                      <button
                        className="quicklist-item-btn"
                        onClick={this.onButtonPress}
                      >
                        {item}
                      </button>
                    </li>
                  ))}
                </ul>
              </div> */}

            <div className="col-md-8">
              {discover.map((item, index) => (
                // <div key={index}>
                //   {item.description}
                // </div>

                <Card key={index} className="tracksPlaylistContainer">
                  <CardBody className="tracksPlaylist">
                    <div className="tracksPlaylistWrapper">
                      <img
                        src={HarryImage}
                        // style={{ maxWidth: "100%" }}
                        style={{ width: "40px", height: "40px" }}
                        alt="Harry's profile"
                      />
                      <CardTitle>{item.name}</CardTitle>
                      <Button
                        className="text-uppercase"
                        color="primary"
                        href={item.audioUrl}
                      >
                        GO!
                      </Button>
                    </div>
                    {/* <CardText className="tracksPlaylistDescription">
                        {item.description}
                      </CardText> */}
                  </CardBody>
                </Card>
              ))}
            </div>
          </Row>
        </Col>
        <Col md="4">
          <Sidebar />
        </Col>
      </Row>
    </Layout>
  );
};

// export default TagsPage;
export default DiscoverPage;
