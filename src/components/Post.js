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
  // Table,
  // Col,
  // Row,
} from "reactstrap";

import { StateContext } from "../components/stateContext";
import "../styles/index.scss";
import { slugify } from "../utils/utilityFunctions";
import { makePostRequest } from "../utils/common";
// import AudioPlayer from "react-h5-audio-player";
import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import Img from "gatsby-image";
// import MetaData from "../data/meta";
import PyMetaData from "../data/pymeta";
import axios from "axios";

// console.log(MetaData);

const Post = ({
  uid,
  title,
  author,
  slug,
  date,
  audio_url,
  palette,
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

  // console.log(MetaData[uid]);
  const recommendations = PyMetaData.find((track) => track.uid === uid) || null;
  // console.log(recommendations);

  // returnFlaskPost() {
  //   return fetch( 'http://localhost:5000/api/v1', {
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json'
  //     },
  //     method: 'POST',
  //     body: {
  //       'user1':'1234'
  //     }
  //   });
  // }

  // const saveBookmarkStats = () => {
  //   fetch('http://localhost:3000/game', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       name: formData, // Use your own property name / key
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then((result) => setData(result.rows))
  //     .catch((err) => console.log('error'))
  // }

  // $(function () {
  //   $(".action-vote").bind("click", function () {
  //     item_id = $(this).data("item-id");
  //     $(this).addClass("active");
  //     $.ajax({
  //       // async: true,
  //       url: "/vote",
  //       type: "POST",
  //       data: { item_id: item_id },
  //       dataType: "json",
  //     }).done(function (reply) {});
  //   });
  // });

  // useEffect(() => {
  //   // POST request using axios inside useEffect React hook
  //   const article = { title: "React Hooks POST Request Example" };
  //   axios
  //     .post("http://dojoyo.pythonanywhere.com/vote", article)
  //     .then((response) => setArticleId(response.data.id));
  // }, []);

  // queryObj = { item_id: handleBookmarks(uid, title, tags) };
  // queryObj = { "item_id": handleBookmarks(uid) };
  // makePostRequest("http://dojoyo.pythonanywhere.com/vote", queryObj);

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

          {/* <Button
            onClick={() =>
              makePostRequest("http://dojoyo.pythonanywhere.com/vote", {
                item_id: uid,
              })
            }
          >
            Log Stats
          </Button> */}

          <Button
            color="primary"
            size="sm"
            onClick={() => {
              handleBookmarks(uid, title, tags);
              makePostRequest("http://dojoyo.pythonanywhere.com/mark", {
                item_id: uid,
                item_type: bookmarks.find((item) => item.uid === uid)
                  ? "unbookmark"
                  : "bookmark",
              });
            }}
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

        <div className="mainPlayerVisualContainer">
          {audio_url ? (
            <AudioPlayer
              src={audio_url}
              // autoPlay and other props here
              // src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
              onPlay={(e) => console.log("onPlay")}
              // layout="horizontal-reverse"
              customVolumeControls={[]}
              customAdditionalControls={[]}
            />
          ) : (
            <>
              <h5 className="text-center">VJ Color Palette</h5>
              <ul className="paletteContainer1" style={{ marginBottom: 0 }}>
                {/* {palette(([Math.floor(Math.random() * palette.length)]) => ( */}
                {palette.map((palette_item) => (
                  <li
                    key={palette_item}
                    style={{ backgroundColor: palette_item }}
                  >
                    {""}
                  </li>
                ))}
              </ul>

              <ul className="paletteContainer2" style={{ marginBottom: 0 }}>
                {palette
                  .slice(0)
                  .reverse()
                  .map((palette_item) => (
                    <li
                      key={palette_item}
                      style={{ backgroundColor: palette_item }}
                    >
                      {""}
                    </li>
                  ))}
              </ul>
              <ul className="paletteContainer3" style={{ marginBottom: 0 }}>
                {palette.map((palette_item) => (
                  <li
                    key={palette_item}
                    style={{ backgroundColor: palette_item }}
                  >
                    {""}
                  </li>
                ))}
              </ul>
              <ul className="paletteContainer4" style={{ marginBottom: 0 }}>
                {palette
                  .slice(0)
                  .reverse()
                  .map((palette_item) => (
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
        </div>

        <div className="jamsContainer">
          <div className="text-center">
            <Button
              color="primary"
              size="sm"
              onClick={toggle}
              style={{
                // textAlign: "center",
                marginBottom: "1rem",
                backgroundColor: "#ff00ff",
                color: "black",
                border: "1px solid grey",
                margin: "10px 0",
                // marginLeft: "auto",
                // marginRight: "auto",
                // marginTop: "10px",
                // marginButton: "10px",
              }}
            >
              {status}
            </Button>
          </div>
          <Collapse isOpen={isOpen} onEntered={onEntered} onExited={onExited}>
            {/* //// */}
            <div className="audioFeaturesBigContainer">
              {recommendations ? (
                <div className="audioFeaturesContainer">
                  {/* <h5 className="text-center">Stats</h5> */}
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
                        centroid: {recommendations.spectral_centroid.toString()}
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
            {/* //// */}
            <div className="code-block">
              {/* <h5 className="text-center">Code</h5> */}
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
            <h5>Similar JAMS</h5>
            <div className="recos">
              <Fragment>
                <div className="reco_0">
                  <AudioPlayer
                    // className="reco_1" {"reco"+index}
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
                  <Link to={"/" + recommendations.neighbour_1}>
                    {/* {recommendations.neighbour_1} */} info
                  </Link>
                </div>
                <div className="reco_1">
                  <AudioPlayer
                    // className="reco_1" {"reco"+index}
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
                  <Link to={"/" + recommendations.neighbour_2}>
                    {/* {recommendations.neighbour_2} */} info
                  </Link>
                </div>
              </Fragment>
            </div>
          </div>
        ) : (
          ""
        )}
      </CardBody>
    </Card>
  );
};

export default Post;
