import React, { useContext } from "react";
// import { StateContext } from "../components/stateContext";
import StateContextProvider from "../components/stateContext";
// import { Link } from "gatsby";
import { useJamsData } from "../hooks/jams";

import {
  // Button,
  Card,
  CardTitle,
  CardSubtitle,
  CardBody,
  // Collapse,
  // Form,
  // FormGroup,
  // Input,
} from "reactstrap";
// import Img from "gatsby-image";
import Bookmarks from "../pages/tags/bookmarks";

const Sidebar = ({ uid }) => {
  // const { bookmarks, handleBookmarks } = useContext(StateContext);
  const originalData = useJamsData();
  // const originalData = useJamsData();
  // const test = originalData.map(({ node }) => {
  //   node.frontmatter.path;
  //   node.fields.slug;
  // })}

  return (
    <StateContextProvider>
      <div
        style={{
          // padding: "20px 0px 0px 0px",
          width: "100%",
          height: "100%",
          border: "1px solid grey",
          textAlign: "center",
        }}
      >
        <Card className="featuredSidebarContainer">
          <CardBody>
            <h4>Featured Tools</h4>
            <Card className="featuredContainer">
              <CardSubtitle className="text-center text-uppercase mb-3">
                LiveCoding
              </CardSubtitle>
              <div>
                <ul className="featuredBlocks">
                  <li>One</li>
                  <li>Two</li>
                  <li>Three</li>
                  <li>Four</li>
                </ul>
              </div>
              <CardSubtitle className="text-center text-uppercase mb-3">
                VJ'ing
              </CardSubtitle>
              <div>
                <ul className="featuredBlocks">
                  <li>One</li>
                  <li>Two</li>
                  <li>Three</li>
                  <li>Four</li>
                </ul>
              </div>
              <CardTitle className="text-center text-uppercase mb-3">
                Languages
              </CardTitle>
              <div>
                <ul className="featuredBlocks">
                  <li>.ruby</li>
                  <li>.py</li>
                  <li>.lhs</li>
                  <li>.js</li>
                </ul>
              </div>
            </Card>
            <h4>Featured Activity</h4>
            <Card className="featuredContainer">
              <CardTitle className="text-center text-uppercase mb-3">
                JAMS
              </CardTitle>
              <div>
                <ul className="featuredBlocks">
                  <li>One</li>
                  <li>Two</li>
                  <li>Three</li>
                  <li>Four</li>
                </ul>
              </div>
              <CardTitle className="text-center text-uppercase mb-3">
                Samples
              </CardTitle>
              <div>
                <ul className="featuredBlocks">
                  <li>One</li>
                  <li>Two</li>
                  <li>Three</li>
                  <li>Four</li>
                </ul>
              </div>
              <CardTitle className="text-center text-uppercase mb-3">
                Tracks
              </CardTitle>
              <div>
                <ul className="featuredBlocks">
                  <li>One</li>
                  <li>Two</li>
                  <li>Three</li>
                  <li>Four</li>
                </ul>
              </div>
              <CardTitle className="text-center text-uppercase mb-3">
                Visuals
              </CardTitle>
              <div>
                <ul className="featuredBlocks">
                  <li>One</li>
                  <li>Two</li>
                  <li>Three</li>
                  <li>Four</li>
                </ul>
              </div>
              <CardTitle className="text-center text-uppercase mb-3">
                Creators
              </CardTitle>
              <div>
                <ul className="featuredBlocks">
                  <li>One</li>
                  <li>Two</li>
                  <li>Three</li>
                  <li>Four</li>
                </ul>
              </div>
              <CardTitle className="text-center text-uppercase mb-3">
                Companies
              </CardTitle>
              <div>
                <ul className="featuredBlocks">
                  <li>One</li>
                  <li>Two</li>
                  <li>Three</li>
                  <li>Four</li>
                </ul>
              </div>
              <CardTitle className="text-center text-uppercase mb-3">
                Bookmarked JAMS
              </CardTitle>
              <div>
                <ul className="entries">
                  <Bookmarks
                    data={originalData}
                    title="Recent Bookmarks"
                    limit={3}
                    isLocal={false}
                  />
                </ul>
              </div>
            </Card>
          </CardBody>
        </Card>
      </div>
    </StateContextProvider>
  );
};

export default Sidebar;
