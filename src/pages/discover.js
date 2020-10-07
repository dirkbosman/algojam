import React, { useState, useEffect } from "react";
import { Row, Col, Card, CardBody, CardTitle, Button } from "reactstrap";
import Layout from "../components/layout";
import Sidebar from "../components/Sidebar";
import TracksImg from "../images/algo_tracks.jpg";
import PlaylistsImg from "../images/algo_playlists.jpg";
import discoverAlgoTracks from "../utils/discoverAlgoTracks";
import discoverAlgoPlaylists from "../utils/discoverAlgoPlaylists";

const DiscoverPage = () => {
  // const originalData = useJamsData();
  // const { bookmarks } = useContext(StateContext);

  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }

  return (
    <Layout>
      <Row>
        <Col md="8">
          <div className="pageSymbols">
            <i className="fab fa-itunes-note"></i>
          </div>
          <h1>Discover</h1>
          <Row>
            <div className="col-xl-8 discoverSubHeaders">
              <h5>Top Algo Tracks &amp; Playlists</h5>
              <Card className="tracksPlaylistContainer">
                <CardBody className="tracksPlaylist">
                  <CardTitle>Algo Tracks</CardTitle>
                  {discoverAlgoTracks.map((item, index) => (
                    <div key={index} className="tracksPlaylistWrapper">
                      <img
                        src={TracksImg}
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "50%",
                        }}
                        alt="Tracks Img"
                      />
                      <div className="tracksPlaylistWrapperItem">
                        <i className="fas fa-headphones-alt"></i>{" "}
                        <a href={item.audioUrl}>{item.name}</a>
                      </div>
                    </div>
                  ))}
                  <div className="tracksPlaylistPR">
                    <h6>Wanna share your own track?</h6>
                    <Button
                      style={{
                        marginBottom: "1rem",
                        backgroundColor: "#ff00ff",
                        color: "black",
                        border: "1px solid grey",
                        margin: "4px 0",
                      }}
                      // className="text-uppercase"
                      // color="primary"
                      size="sm"
                      href="https://github.com/dirkbosman/algojam/blob/master/src/utils/discoverAlgoTracks.js"
                    >
                      Submit a PR
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </div>
            <div className="col-xl-8">
              <Card className="tracksPlaylistContainer">
                <CardBody className="tracksPlaylist">
                  <CardTitle>Algo Albums / Playlists</CardTitle>
                  {discoverAlgoPlaylists.map((item, index) => (
                    <div key={index} className="tracksPlaylistWrapper">
                      <img
                        src={PlaylistsImg}
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "50%",
                        }}
                        alt="Playlists Img"
                      />
                      <div className="tracksPlaylistWrapperItem">
                        <i className="fas fa-headphones-alt"></i>{" "}
                        <a href={item.audioUrl}>{item.name}</a>
                      </div>
                    </div>
                  ))}
                  <div className="tracksPlaylistPR">
                    <h6>Wanna share your own playlist?</h6>
                    <Button
                      style={{
                        marginBottom: "1rem",
                        backgroundColor: "#ff00ff",
                        color: "black",
                        border: "1px solid grey",
                        margin: "4px 0",
                      }}
                      // className="text-uppercase"
                      // color="primary"
                      size="sm"
                      href="https://github.com/dirkbosman/algojam/blob/master/src/utils/discoverAlgoPlaylists.js"
                    >
                      Submit a PR
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </div>
          </Row>
        </Col>
        <Col md="4">
          <Sidebar />
        </Col>
      </Row>
    </Layout>
  );
};

export default DiscoverPage;
