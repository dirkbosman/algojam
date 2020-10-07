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
} from "reactstrap";
import StateContextProvider from "../components/stateContext";
import { StateContext } from "../components/stateContext";
import "../styles/index.scss";
import { slugify } from "../utils/utilityFunctions";
import { makePostRequest } from "../utils/common";
import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import Img from "gatsby-image";
import PyMetaData from "../utils/pymeta";

const Post = ({
  uid,
  title,
  author,
  slug,
  date,
  audio_url,
  palette = [],
  tags,
  fluid,
  body,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState("Show Code");

  const toggle = () => setIsOpen(!isOpen);
  const onEntered = () => setStatus("Hide Code");
  const onExited = () => setStatus("Show Code");

  const netflifyAudioHostingUrl =
    "https://confident-ritchie-5e6b2d.netlify.app/";
  const audioFileFormat = ".mp3";

  const { bookmarks, handleBookmarks } = useContext(StateContext);
  const recommendations = PyMetaData.find((track) => track.uid === uid) || null;

  // let { bookmarks, handleBookmarks } = useContext(StateContext);
  // if (!bookmarks) {
  //   bookmarks = [];
  // }

  return (
    <StateContextProvider>
      <Card>
        {audio_url ? (
          <div className="audioPaletteContainer"></div>
        ) : (
          <>
            <ul className="vjPaletteContainer" style={{ marginBottom: 0 }}>
              {palette.map((palette_item) => (
                <li
                  key={palette_item}
                  style={{ backgroundColor: palette_item }}
                >
                  {""}
                </li>
              ))}
            </ul>
          </>
        )}
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
                <CardTitle className="cardTitleText">
                  <Link to={slug}>{title}</Link>
                </CardTitle>
                <CardSubtitle className="cardSubtitleText">
                  On <span className="text-info">{date}</span> by{" "}
                  <span className="text-info">{author}</span>
                </CardSubtitle>
              </div>
            </div>
            <Button
              color="primary"
              size="sm"
              onClick={() => {
                handleBookmarks(uid, title, tags);
                makePostRequest("https://dojoyo.pythonanywhere.com/mark", {
                  item_id: uid,
                  item_type:
                    bookmarks && bookmarks.find((item) => item.uid === uid)
                      ? "unbookmark"
                      : "bookmark",
                });
              }}
              style={{
                marginBottom: "1rem",
                backgroundColor: "mediumslateblue",
                color: "white",
                border: "1px solid grey",
                borderRadius: "50%",
                height: "40px",
                width: "40px",
                margin: "6px 0px",
              }}
            >
              {bookmarks && bookmarks.find((item) => item.uid === uid) ? (
                <i className="fas fa-bookmark"></i>
              ) : (
                <i className="far fa-bookmark"></i>
              )}
            </Button>
          </div>
          <div className="cardTags">
            <ul className="postTags">
              {tags.map((tag) => (
                <li key={tag}>
                  <Link to={`/tag/${slugify(tag)}`}>
                    <Badge className="postTagsBadge">{tag}</Badge>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="mainPlayerVisualContainer">
            {audio_url ? (
              <AudioPlayer
                src={audio_url}
                onPlay={(e) => console.log("onPlay")}
                customVolumeControls={[]}
                customAdditionalControls={[]}
              />
            ) : (
              ""
            )}
          </div>

          <div className="jamsContainer">
            <div className="text-center">
              <Button
                color="primary"
                size="sm"
                onClick={toggle}
                style={{
                  marginBottom: "1rem",
                  backgroundColor: "#ff00ff",
                  color: "black",
                  border: "1px solid grey",
                  margin: "4px 0",
                }}
              >
                {status}
              </Button>
            </div>
            <Collapse isOpen={isOpen} onEntered={onEntered} onExited={onExited}>
              <div className="audioFeaturesBigContainer">
                {recommendations ? (
                  <div className="audioFeaturesContainer">
                    <div>
                      <ul className="audioFeatures">
                        <li>bpm: {recommendations.bpm.toString()}</li>
                        <li>stft: {recommendations.chroma_stft.toString()}</li>
                        <li>rmse: {recommendations.rmse.toString()}</li>
                        <li>
                          crossing:{" "}
                          {recommendations.zero_crossing_rate.toString()}
                        </li>
                        <li>
                          bandwidth:{" "}
                          {recommendations.spectral_bandwidth.toString()}
                        </li>
                        <li>
                          centroid:{" "}
                          {recommendations.spectral_centroid.toString()}
                        </li>
                        <li>
                          rolloff: {recommendations.spectral_rolloff.toString()}
                        </li>
                      </ul>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div className="code-block">
                <Card
                  className="inner-code-block"
                  dangerouslySetInnerHTML={{ __html: `<div>${body}</div>` }}
                ></Card>
              </div>
            </Collapse>
          </div>

          {recommendations ? (
            <div className="recommenderContainer">
              <h5>Similar JAMS</h5>
              <div className="recos">
                <Fragment>
                  <div className="reco_0">
                    <AudioPlayer
                      src={
                        netflifyAudioHostingUrl +
                        recommendations.neighbour_1.toString() +
                        audioFileFormat
                      }
                      layout="horizontal-reverse"
                      showJumpControls={false}
                      customVolumeControls={[]}
                      customAdditionalControls={[]}
                      showDownloadProgress={false}
                      customProgressBarSection={[RHAP_UI.PROGRESS_BAR]}
                    />
                    <Link to={"/" + recommendations.neighbour_1}>info</Link>
                  </div>
                  <div className="reco_1">
                    <AudioPlayer
                      src={
                        netflifyAudioHostingUrl +
                        recommendations.neighbour_2.toString() +
                        audioFileFormat
                      }
                      layout="horizontal-reverse"
                      showJumpControls={false}
                      customVolumeControls={[]}
                      customAdditionalControls={[]}
                      showDownloadProgress={false}
                      customProgressBarSection={[RHAP_UI.PROGRESS_BAR]}
                    />
                    <Link to={"/" + recommendations.neighbour_2}>info</Link>
                  </div>
                </Fragment>
              </div>
            </div>
          ) : (
            ""
          )}
        </CardBody>
      </Card>
    </StateContextProvider>
  );
};

export default Post;
