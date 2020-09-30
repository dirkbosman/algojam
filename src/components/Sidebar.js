import React, { useContext } from "react";
import { StateContext } from "../components/stateContext";
import { Link } from "gatsby";
// import { useJamsData } from "../hooks/jams";
import {
  // Badge,
  Button,
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

const Sidebar = ({ uid }) => {
  const { bookmarks, handleBookmarks } = useContext(StateContext);

  // const originalData = useJamsData();
  // const test = originalData.map(({ node }) => {
  //   node.frontmatter.path;
  //   node.fields.slug;
  // })}

  const listItems = bookmarks.map((bookmark) => (
    <li
      key={bookmark.uid}
      className="BookMarkedItem"
      style={{ padding: "5px" }}
    >
      {/* <Link to={path}>{key}</Link>{" "} */}
      {/* <Link to={node.frontmatter.path}>{key}</Link>{" "} */}
      {/* <Link to={node.fields.slug}>{key}</Link>{" "} */}
      {/* <Link to={node.fields.slug}>{key}</Link>{" "} */}

      <Link to={"/" + bookmark.uid}>{bookmark.title} </Link>

      <Button
        color="primary"
        size="sm"
        onClick={() => handleBookmarks(bookmark.uid, bookmark.title)}
        style={{
          marginBottom: "1rem",
          backgroundColor: bookmarks.find((item) => item.uid === uid)
            ? "#8CFACA"
            : "blue",
          color: "black",
          border: "1px solid grey",
          margin: "6px 0px",
        }}
      >
        {/* {bookmarks.includes(uid) ? "💾" : "🔖"} */}
        {bookmarks.find((item) => item.uid === uid) ? "💾" : "🔖"}
      </Button>
    </li>
  ));

  return (
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
          <h4>Featured Tools</h4>
          <Card className="featuredContainer">
            {/* <CardTitle className="text-center text-uppercase mb-3">
              Featured Tools
            </CardTitle> */}
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
              <ul className="entries">{listItems}</ul>
            </div>
          </Card>
          {/* <h4>Featured Ad</h4>
          <Card className="featuredContainer">
            <CardTitle className="text-center text-uppercase mb-3">
              Want to advertise here?
            </CardTitle>
            <div className="featuredBlocks">
              <Img
                className="card-image-top"
                fluid={originalData.fluid}
                style={{
                  width: "60px",
                  height: "60px",
                  marginRight: "10px",
                }}
              />
            </div>
          </Card> */}
          {/* <Card className="featuredContainer">
            <CardTitle className="text-center text-uppercase mb-3">
              Bookmarked JAMS
            </CardTitle>
            <ul className="entries">{listItems}</ul>
          </Card> */}
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
