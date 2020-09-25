import React, { useContext } from "react";
import { StateContext } from "../components/stateContext";
import {
  // Badge,
  Button,
  Card,
  CardTitle,
  CardSubtitle,
  CardBody,
  // Collapse,
  Form,
  FormGroup,
  Input,
} from "reactstrap";

const Sidebar = ({ uid }) => {
  const { bookmarks, handleBookmarks } = useContext(StateContext);

  const listItems = bookmarks.map((key) => (
    <li key={key} className="BookMarkedItem" style={{ padding: "5px" }}>
      {key}{" "}
      <Button
        color="primary"
        size="sm"
        onClick={() => handleBookmarks(key)}
        style={{
          marginBottom: "1rem",
          backgroundColor: bookmarks.includes(uid) ? "#8CFACA" : "blue",
          color: "black",
          border: "1px solid grey",
          margin: "6px 0px",
        }}
      >
        {bookmarks.includes(uid) ? "💾" : "🔖"}
      </Button>
    </li>
  ));

  return (
    <div
      style={{
        padding: "20px 0px 0px 0px",
        width: "100%",
        height: "100%",
        border: "1px solid grey",
        textAlign: "center",
      }}
    >
      <Card>
        <CardBody>
          {/* <Card>
            <CardTitle className="text-center text-uppercase mb-3">
              Newsletter
            </CardTitle>
            <Form className="text-center">
              <FormGroup>
                <Input
                  type="email"
                  name="email"
                  placeholder="Your email address ..."
                />
              </FormGroup>
              <Button className="btn btn-outline-success text-uppercase">
                Subscribe
              </Button>
            </Form>
          </Card> */}
          <Card>
            <CardTitle className="text-center text-uppercase mb-3">
              Featured Creators
            </CardTitle>
            <div>
              <ul className="featuredBlocks">
                <li>One</li>
                <li>Two</li>
                <li>Three</li>
                <li>Four</li>
              </ul>
            </div>
          </Card>
          <Card>
            <CardTitle className="text-center text-uppercase mb-3">
              Featured Languages
            </CardTitle>
            <div>
              <ul className="featuredBlocks">
                <li>Ruby</li>
                <li>Python</li>
                <li>Haskell</li>
                <li>Javascript</li>
              </ul>
            </div>
          </Card>

          <Card>
            <CardTitle className="text-center text-uppercase mb-3">
              Featured Tools
            </CardTitle>
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
          </Card>

          <Card>
            <CardTitle className="text-center text-uppercase mb-3">
              Featured JAMS
            </CardTitle>
            <div>
              <ul className="featuredBlocks">
                <li>One</li>
                <li>Two</li>
                <li>Three</li>
                <li>Four</li>
              </ul>
            </div>
          </Card>
          <Card>
            <CardTitle className="text-center text-uppercase mb-3">
              Featured Samples
            </CardTitle>
            <div>
              <ul className="featuredBlocks">
                <li>One</li>
                <li>Two</li>
                <li>Three</li>
                <li>Four</li>
              </ul>
            </div>
          </Card>
          <Card>
            <CardTitle className="text-center text-uppercase mb-3">
              Featured Tracks
            </CardTitle>
            <div>
              <ul className="featuredBlocks">
                <li>One</li>
                <li>Two</li>
                <li>Three</li>
                <li>Four</li>
              </ul>
            </div>
          </Card>
          <Card>
            <CardTitle className="text-center text-uppercase mb-3">
              Featured Visuals
            </CardTitle>
            <div>
              <ul className="featuredBlocks">
                <li>One</li>
                <li>Two</li>
                <li>Three</li>
                <li>Four</li>
              </ul>
            </div>
          </Card>

          <Card>
            <CardTitle className="text-center text-uppercase mb-3">
              Bookmarked JAMS
            </CardTitle>
            <ul className="entries">{listItems}</ul>
          </Card>
        </CardBody>
      </Card>
    </div>

    // <div
    //   style={{
    //     padding: "20px 0px 0px 0px",
    //     width: "100%",
    //     height: "100%",
    //     border: "1px solid grey",
    //     textAlign: "center",
    //   }}
    // >
    //   <h4>Bookmarked JAMS</h4>
    //   <ul className="entries">{listItems}</ul>
    // </div>
  );
};

export default Sidebar;
