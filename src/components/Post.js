import React, { useState } from "react";
import { Link } from "gatsby";
import {
  Badge,
  Button,
  Card,
  CardTitle,
  CardText,
  CardSubtitle,
  CardBody,
  Collapse,
} from "reactstrap";
import "../styles/index.scss";
import { slugify } from "../utils/utilityFunctions";

import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
// import 'react-h5-audio-player/lib/styles.less' Use LESS
// import 'react-h5-audio-player/src/styles.scss' Use SASS

const Post = ({ key, title, author, path, date, audio_url, tags, body }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState("Show");

  const toggle = () => setIsOpen(!isOpen);
  const onEntered = () => setStatus("Hide");
  const onExited = () => setStatus("Show");

  //   onClickButton = () => {
  //     toggle()
  //     saveToLS()
  //   }

  //   <Button
  //     onClick={onClickButton}
  //     ...
  //   />

  return (
    <Card>
      <CardBody>
        <CardTitle>
          <Link to={path}>{title}</Link>
        </CardTitle>
        <CardSubtitle>
          <span className="text-info">{date}</span> by{" "}
          <span className="text-info">{author}</span>
        </CardSubtitle>
        {/* <Link to={path} className="btn btn-outline-primary float-right">
          More...
        </Link> */}

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
            // autoPlay
            src={audio_url}
            // src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
            onPlay={(e) => console.log("onPlay")}
            // other props here
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
            <div>
              <CardText
                className="card-text-md"
                // dangerouslySetInnerHTML={{ __html: `<div> ${body} </div>` }}
                dangerouslySetInnerHTML={{ __html: body }}
              ></CardText>
            </div>
          </Collapse>
        </div>
      </CardBody>
    </Card>
  );
};

export default Post;
