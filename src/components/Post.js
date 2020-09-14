import React, { useState } from "react";
import { Link } from "gatsby";
import {
  Button,
  Card,
  CardTitle,
  CardText,
  CardSubtitle,
  CardBody,
  Collapse,
} from "reactstrap";
import "../styles/index.scss";

import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
// import 'react-h5-audio-player/lib/styles.less' Use LESS
// import 'react-h5-audio-player/src/styles.scss' Use SASS

const Post = ({ title, author, path, date, audio_url, body }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

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
            style={{ marginBottom: "1rem" }}
          >
            Toggle
          </Button>
          <Collapse isOpen={isOpen}>
            {/* <Card> */}
            {/* <CardBody className="code-container"> */}
            <CardText className="card-text-sm">{body}</CardText>
            {/* </CardBody> */}
            {/* </Card> */}
          </Collapse>
        </div>
      </CardBody>
    </Card>
  );
};

export default Post;
