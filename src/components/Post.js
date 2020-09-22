import React, { useState } from "react";
import { Link } from "gatsby";
import {
  Badge,
  Button,
  Card,
  CardTitle,
  // CardText,
  CardSubtitle,
  CardBody,
  Collapse,
} from "reactstrap";

import "../styles/index.scss";
import { slugify } from "../utils/utilityFunctions";
import useLocalStorage from "../hooks/useLocalStorage";

import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { node } from "prop-types";
// import 'react-h5-audio-player/lib/styles.less' Use LESS
// import 'react-h5-audio-player/src/styles.scss' Use SASS

const Post = ({ uid, title, author, path, date, audio_url, tags, body }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState("Show");

  const toggle = () => setIsOpen(!isOpen);
  const onEntered = () => setStatus("Hide");
  const onExited = () => setStatus("Show");

  // Local Storage (Begin)
  const [bookmarks, setBookmarks] = useLocalStorage("bookmarks", []);

  const handleBookmarks = (uid) => {
    const storedBookmarks = JSON.parse(
      window.localStorage.getItem("bookmarks") || "[]"
    );
    if (storedBookmarks.indexOf(uid) === -1) {
      return setBookmarks([uid, ...storedBookmarks]);
    }

    setBookmarks(storedBookmarks.filter((item) => item !== uid));
  };
  // Local Storage (End)

  return (
    <Card>
      <CardBody>
        <CardTitle>
          <Link to={path}>{title}</Link>
        </CardTitle>
        <CardSubtitle>
          <span className="text-info">{date}</span> by{" "}
          <span className="text-info">{author}</span> by{" "}
          <span className="text-info">{uid}</span>
        </CardSubtitle>

        <ul className="post-tags">
          {tags.map((tag) => (
            <li key={tag}>
              <Link to={`/tag/${slugify(tag)}`}>
                {/* <Badge color="primary" className="text-uppercase"> */}
                <Badge color="primary">{tag}</Badge>
              </Link>
            </li>
          ))}
        </ul>

        <div>
          <AudioPlayer
            src={audio_url}
            // autoPlay and other props here
            // src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
            onPlay={(e) => console.log("onPlay")}
          />
        </div>
        <br />
        <br />

        <div>
          <div>
            {/* localStorage start */}

            <Button
              color="primary"
              onClick={() => handleBookmarks(uid)}
              style={{
                marginBottom: "1rem",
                backgroundColor: bookmarks.indexOf(uid) ? "#8CFACA" : "blue",
                color: "black",
                border: "1px solid grey",
                margin: "6px 0px",
              }}
            >
              Bookmark
            </Button>

            {/* localStorage end */}
          </div>

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
