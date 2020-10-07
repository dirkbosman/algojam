import React, { useState, useEffect } from "react";
import axios from "axios";
import StateContextProvider from "../components/stateContext";
import { useJamsData } from "../hooks/jams";
import { Link } from "gatsby";
import { Card, CardTitle, CardSubtitle, CardBody } from "reactstrap";
import Bookmarks from "./tags/bookmarks";

const Sidebar = () => {
  const originalData = useJamsData();

  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    axios
      .get("https://dojoyo.pythonanywhere.com/aggregatedbookmarks")
      .then(function (response) {
        console.log(response);
        setPokemon(response.data);
      })
      .catch(function (error) {
        console.log("Request failed");
      });
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
            <h4>Featured Tools</h4>
            <Card className="featuredContainer">
              <CardSubtitle className="text-center text-uppercase mb-3">
                LiveCoding
              </CardSubtitle>
              <div>
                <ul className="featuredBlocks">
                  <Link to={`/discover`}>
                    <li className="featuredBlockItem">SP</li>
                  </Link>
                  <Link to={`/discover`}>
                    <li className="featuredBlockItem">SC</li>
                  </Link>
                  <Link to={`/discover`}>
                    <li className="featuredBlockItem">FD</li>
                  </Link>
                  <Link to={`/discover`}>
                    <li className="featuredBlockItem">Gibber</li>
                  </Link>
                </ul>
              </div>
              <CardSubtitle className="text-center text-uppercase mb-3">
                VJ'ing
              </CardSubtitle>
              <div>
                <ul className="featuredBlocks">
                  <Link to={`/discover`}>
                    <li className="featuredBlockItem">Hydra</li>
                  </Link>
                  <Link to={`/discover`}>
                    <li className="featuredBlockItem">P5.js</li>
                  </Link>
                  <Link to={`/discover`}>
                    <li className="featuredBlockItem">Visor</li>
                  </Link>
                  <Link to={`/discover`}>
                    <li className="featuredBlockItem">glsl</li>
                  </Link>
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
            </Card>
            <h4>Community Bookmarks</h4>
            <Card className="featuredContainer">
              <h5>Overview</h5>
              <div>
                {pokemon.map(({ count }, index) => (
                  <div key={index}>
                    <div>{count}</div>
                  </div>
                ))}
              </div>

              <div>
                <ul className="entries">
                  <Bookmarks
                    data={originalData}
                    title="Recent Bookmarks"
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
