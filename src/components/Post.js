import React, { useState, useContext } from "react";
import { Link } from "gatsby";

import {
  Badge,
  Button,
  Card,
  CardTitle,
  CardSubtitle,
  CardBody,
  Collapse,
} from "reactstrap";

import { StateContext } from "../components/stateContext";
import "../styles/index.scss";
import { slugify } from "../utils/utilityFunctions";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import Img from "gatsby-image";

const Post = ({
  uid,
  title,
  author,
  path,
  date,
  audio_url,
  tags,
  fluid,
  body,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState("Show");

  const toggle = () => setIsOpen(!isOpen);
  const onEntered = () => setStatus("Hide");
  const onExited = () => setStatus("Show");

  // Local Storage (Begin)

  const { bookmarks, handleBookmarks } = useContext(StateContext);

  return (
    <Card>
      <CardBody>
        <div className="cardOverallContent">
          <div className="cardTopContent">
            <Img
              className="card-image-top"
              fluid={fluid}
              style={{
                width: "60px",
                height: "60px",
                marginRight: "10px",
              }}
            />
            <div className="cardTitleContent">
              <CardTitle>
                <Link to={path}>{title}</Link>
              </CardTitle>
              <CardSubtitle>
                <span className="text-info">{date}</span> by{" "}
                <span className="text-info">{author}</span>
              </CardSubtitle>
            </div>
          </div>

          <Button
            size="sm"
            color="primary"
            onClick={() => handleBookmarks(uid)}
            style={{
              marginBottom: "1rem",
              backgroundColor: bookmarks.includes(uid) ? "blue" : "#8CFACA",
              color: "black",
              border: "1px solid grey",
              margin: "5px",
            }}
          >
            {bookmarks.includes(uid) ? "🔖" : "💾"}
          </Button>
        </div>

        <div className="cardTags">
          <ul className="postTags">
            {tags.map((tag) => (
              <li key={tag}>
                <Link to={`/tag/${slugify(tag)}`}>
                  <Badge color="primary">{tag}</Badge>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <AudioPlayer
            src={audio_url}
            // autoPlay and other props here
            // src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
            onPlay={(e) => console.log("onPlay")}
          />
        </div>

        <div>
          <Button
            color="primary"
            onClick={toggle}
            style={{
              marginBottom: "1rem",
              backgroundColor: "#ff00ff",
              color: "black",
              border: "1px solid grey",
              margin: "6px 0px",
            }}
          >
            {status}
          </Button>
          <Collapse isOpen={isOpen} onEntered={onEntered} onExited={onExited}>
            <div className="code-block">
              <Card
                // className="card-text-md"
                className="inner-code-block"
                dangerouslySetInnerHTML={{ __html: `<div>${body}</div>` }}
              ></Card>
            </div>
          </Collapse>
        </div>
      </CardBody>
    </Card>
  );
};

export default Post;

// export const SaveJams = () => {
//   function useLocalState(localItem) {
//     const [loc, setState] = useState(localStorage.getItem(localItem));

//     function setLoc(newItem) {
//       localStorage.setItem(localItem, newItem);
//       setState(newItem);
//     }
//     return [loc, setLoc];
//   }

//   const [fruit, setFruit] = useLocalState("fruit");
//   return (
//     <div>
//       <p>Fruit: {fruit}</p>
//       <button onClick={() => setFruit("Apple")}>Apple</button>
//       <button onClick={() => setFruit("Banana")}>Banana</button>
//     </div>
//   );
// };
