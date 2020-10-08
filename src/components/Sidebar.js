import React, { useState, useEffect } from "react";
import axios from "axios";
import StateContextProvider from "../components/stateContext";
import { useJamsData } from "../hooks/jams";
import { Link } from "gatsby";
import { Card, CardBody } from "reactstrap";
import Bookmarks from "./tags/bookmarks";
import Livecoding from "../images/livecoding.jpg";
import Vjing from "../images/vjing.jpg";
import AudioCode from "../images/audio_code.jpg";
import VisualCode from "../images/visual_code.jpg";

const Sidebar = () => {
  const originalData = useJamsData();

  const [cumulBookmarkStats, setCumulBookmarkStats] = useState([]);
  useEffect(() => {
    axios
      .get("https://dojoyo.pythonanywhere.com/aggregatedbookmarks")
      .then(function (response) {
        setCumulBookmarkStats(response.data);
      })
      .catch(function (error) {});
  }, []);

  return (
    <StateContextProvider>
      <div
        style={{
          width: "100%",
          height: "100%",
          textAlign: "center",
          marginTop: "5px",
        }}
      >
        <Card className="featuredSidebarContainer">
          <CardBody>
            <h4 style={{ color: "white" }}>
              <i style={{ color: "magenta" }} className="fas fa-star"></i>{" "}
              Featured
            </h4>
            <Card className="featuredContainer">
              <div>
                <h6 style={{ color: "mediumslateblue" }}>LiveCoding Tools</h6>
                <div>
                  <ul className="featuredBlocks">
                    <Link to={`/tag/sonic-pi`}>
                      <img
                        src={Livecoding}
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "50%",
                          marginLeft: "5px",
                          marginRight: "5px",
                        }}
                        alt="Tracks Img"
                      />
                    </Link>
                    <Link to={`/tag/sonic-pi`}>
                      <img
                        src={Livecoding}
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "50%",
                          marginLeft: "5px",
                          marginRight: "5px",
                        }}
                        alt="Tracks Img"
                      />
                    </Link>
                    <Link to={`/tag/sonic-pi`}>
                      <img
                        src={Livecoding}
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "50%",
                          marginLeft: "5px",
                          marginRight: "5px",
                        }}
                        alt="Tracks Img"
                      />
                    </Link>
                  </ul>
                </div>
                <h6 style={{ color: "mediumslateblue" }}>VJ'ing Tools</h6>
                <div>
                  <ul className="featuredBlocks">
                    <Link to={`/tag/hydra`}>
                      <img
                        src={Vjing}
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "50%",
                          marginLeft: "5px",
                          marginRight: "5px",
                        }}
                        alt="Tracks Img"
                      />
                    </Link>
                    <Link to={`/tag/hydra`}>
                      <img
                        src={Vjing}
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "50%",
                          marginLeft: "5px",
                          marginRight: "5px",
                        }}
                        alt="Tracks Img"
                      />
                    </Link>
                    <Link to={`/tag/hydra`}>
                      <img
                        src={Vjing}
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "50%",
                          marginLeft: "5px",
                          marginRight: "5px",
                        }}
                        alt="Tracks Img"
                      />
                    </Link>
                  </ul>
                </div>
                <h6 style={{ color: "mediumslateblue" }}>Jams</h6>
                <div>
                  <ul className="featuredBlocks">
                    <Link to={`/20200915012762`}>
                      <img
                        src={AudioCode}
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "50%",
                          marginLeft: "5px",
                          marginRight: "5px",
                        }}
                        alt="Tracks Img"
                      />
                    </Link>
                    <Link to={`/20200915012762`}>
                      <img
                        src={AudioCode}
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "50%",
                          marginLeft: "5px",
                          marginRight: "5px",
                        }}
                        alt="Tracks Img"
                      />
                    </Link>
                    <Link to={`/20200915012762`}>
                      <img
                        src={AudioCode}
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "50%",
                          marginLeft: "5px",
                          marginRight: "5px",
                        }}
                        alt="Tracks Img"
                      />
                    </Link>
                  </ul>
                </div>
                <h6 style={{ color: "mediumslateblue" }}>Visuals</h6>
                <div>
                  <ul className="featuredBlocks">
                    <Link to={`/20200916012769`}>
                      <img
                        src={VisualCode}
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "50%",
                          marginLeft: "5px",
                          marginRight: "5px",
                        }}
                        alt="Tracks Img"
                      />
                    </Link>
                    <Link to={`/20200916012769`}>
                      <img
                        src={VisualCode}
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "50%",
                          marginLeft: "5px",
                          marginRight: "5px",
                        }}
                        alt="Tracks Img"
                      />
                    </Link>
                    <Link to={`/20200916012769`}>
                      <img
                        src={VisualCode}
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "50%",
                          marginLeft: "5px",
                          marginRight: "5px",
                        }}
                        alt="Tracks Img"
                      />
                    </Link>
                  </ul>
                </div>
              </div>
            </Card>
            <h4 style={{ color: "white" }}>
              <i style={{ color: "magenta" }} className="fas fa-users"></i>{" "}
              Community
            </h4>
            <Card className="featuredContainer">
              <h5 style={{ color: "mediumslateblue", fontWeight: "bold" }}>
                Stats
              </h5>
              <div>
                {cumulBookmarkStats.map(({ type, count }, index) => (
                  <div key={index}>
                    <div className="featuredContainerStats">
                      <i className="fas fa-chart-line"> </i> {type} : {count}
                    </div>
                  </div>
                ))}
              </div>
              <div>
                <ul className="entries">
                  <Bookmarks
                    data={originalData}
                    title="Top Bookmarks"
                    limit={3}
                    isLocal={false}
                  />
                </ul>
              </div>
            </Card>
          </CardBody>
        </Card>
      </div>
    </StateContextProvider>
  );
};

export default Sidebar;
