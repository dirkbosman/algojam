import React, { Fragment, useState, useContext } from "react";
import { Link } from "gatsby";

import {
  Badge,
  Button,
  Card,
  CardTitle,
  CardSubtitle,
  CardBody,
  Collapse,
  // Col,
  // Row,
} from "reactstrap";

import { StateContext } from "../components/stateContext";
import "../styles/index.scss";
import { slugify } from "../utils/utilityFunctions";
// import AudioPlayer from "react-h5-audio-player";
import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import Img from "gatsby-image";
// import MetaData from "../data/meta";
import PyMetaData from "../data/pymeta";

// console.log(MetaData);

const Post = ({
  uid,
  title,
  author,
  slug,
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

  // const getRecommendations = (uid) => {
  //   const recommendations = MetaData[uid] || [];
  //   // console.log(recommendations);
  //   return recommendations;
  // };

  // const getRecommendations = (uid) => {
  //   const recommendations = PyMetaData.find((uid) => {
  //     console.log(recommendations);
  //     return recommendations;
  //     // if (item.uid === uid) {
  //     //   console.log(recommendations);
  //     // }
  //   });
  // };

  // console.log(MetaData[uid]);
  const recommendations = PyMetaData.find((track) => track.uid === uid) || null;
  console.log(recommendations);
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
                <Link to={slug}>{title}</Link>
              </CardTitle>
              <CardSubtitle>
                <span className="text-info">{date}</span> by{" "}
                <span className="text-info">{author}</span>
              </CardSubtitle>
            </div>
          </div>
          <Button
            color="primary"
            size="sm"
            onClick={() => handleBookmarks(uid, title)}
            style={{
              marginBottom: "1rem",
              backgroundColor: bookmarks.find((item) => item.uid === uid)
                ? "blue"
                : "#8CFACA",
              color: "black",
              border: "1px solid grey",
              margin: "6px 0px",
            }}
          >
            {bookmarks.find((item) => item.uid === uid) ? "🔖" : "💾"}
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

        <div className="mainPlayer">
          <AudioPlayer
            src={audio_url}
            // autoPlay and other props here
            // src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
            onPlay={(e) => console.log("onPlay")}
            // layout="horizontal-reverse"
            customVolumeControls={[]}
            customAdditionalControls={[]}
          />
        </div>

        <div className="jamsContainer">
          <div className="jamsBtnContainer">
            <Button
              color="primary"
              onClick={toggle}
              style={{
                marginBottom: "1rem",
                backgroundColor: "#ff00ff",
                color: "black",
                border: "1px solid grey",
                margin: "6px 0px",
                marginLeft: "50%",
                marginRight: "50%",
                marginTop: "15px",
              }}
            >
              {status}
            </Button>
          </div>
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

        {/* <div className="recommenderContainer">
          <h5>Similar JAMS</h5>
          <div className="recos">
            <AudioPlayer
              className="reco_1"
              src={audio_url}
              onPlay={(e) => console.log("onPlay")}
              layout="horizontal-reverse"
              showJumpControls={false}
              customVolumeControls={[]}
              customAdditionalControls={[]}
              showDownloadProgress={false}
              customProgressBarSection={[RHAP_UI.PROGRESS_BAR]}
            />
            <AudioPlayer
              className="reco_2"
              src={audio_url}
              onPlay={(e) => console.log("onPlay")}
              layout="horizontal-reverse"
              showJumpControls={false}
              customVolumeControls={[]}
              customAdditionalControls={[]}
              showDownloadProgress={false}
              customProgressBarSection={[RHAP_UI.PROGRESS_BAR]}
            />
          </div>
        </div> */}

        {/* <div className="recommenderContainer">
          {getRecommendations(uid).map(({ uid, title, audio_url }, index) => (
            <Fragment key={uid} className="recos">
              <div className={"reco_" + index}>
                <Link to={"/" + uid}>{title}</Link>
                <AudioPlayer
                  // className="reco_1" {"reco"+index}
                  // className={"reco_" + index}
                  src={audio_url}
                  layout="horizontal-reverse"
                  showJumpControls={false}
                  customVolumeControls={[]}
                  customAdditionalControls={[]}
                  showDownloadProgress={false}
                  customProgressBarSection={[RHAP_UI.PROGRESS_BAR]}
                />
              </div>
            </Fragment>
          ))}
        </div> */}

        {recommendations ? (
          <div className="recommenderContainer">
            <h1>Fey is cool!x</h1>

            <Fragment className="recos">
              <div className={"reco_"}>
                <Link to={"/" + recommendations.neighbour_1}>Blahhhh</Link>
                <AudioPlayer
                  // className="reco_1" {"reco"+index}
                  src={recommendations.neighbour_1}
                  layout="horizontal-reverse"
                  showJumpControls={false}
                  customVolumeControls={[]}
                  customAdditionalControls={[]}
                  showDownloadProgress={false}
                  customProgressBarSection={[RHAP_UI.PROGRESS_BAR]}
                />
              </div>
              <div className={"reco_"}>
                <Link to={"/" + recommendations.neighbour_2}>Blahhhh</Link>
                <AudioPlayer
                  // className="reco_1" {"reco"+index}
                  src={recommendations.neighbour_2}
                  layout="horizontal-reverse"
                  showJumpControls={false}
                  customVolumeControls={[]}
                  customAdditionalControls={[]}
                  showDownloadProgress={false}
                  customProgressBarSection={[RHAP_UI.PROGRESS_BAR]}
                />
              </div>
            </Fragment>
          </div>
        ) : (
          ""
        )}
      </CardBody>
    </Card>
  );
};

export default Post;
