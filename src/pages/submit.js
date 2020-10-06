// import React, { useState, useEffect } from "react";
import React from "react";
// import { Link } from "gatsby";
import { Row, Col } from "reactstrap";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Sidebar from "../components/Sidebar";
// import { useJamsData } from "../hooks/jams";
// import StateContextProvider from "../components/stateContext";
import useClipboard from "../utils/copyToClipboard";
import StateContextProvider from "../components/stateContext";

// import "../styles/clipboard.css";
// import "../styles/index.scss";

const SubmitPage = () => {
  const [isCopied, setClipboard] = useClipboard(2000);

  const handleCopyClick = () => {
    setClipboard(document.querySelector("code").innerText);
  };

  return (
    <StateContextProvider>
      <Layout>
        <SEO title="Submit" />
        <h1>Submit</h1>
        <Row>
          <Col md="8">
            <div>
              <h2>Considering submitting your latest jam!</h2>
              <p>
                Prow scuttle parrel provost Sail ho shrouds spirits boom
                mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's
                nest nipperkin grog yardarm hempen halter furl. Swab barque
                interloper chantey doubloon starboard grog black jack gangway
                rutters. Deadlights jack lad schooner scallywag dance the hempen
                jig carouser broadside cable strike colors. Bring a spring upon
                her cable holystone blow the man down spanker Shiver me timbers
                to go on account lookout wherry doubloon chase. Belay yo-ho-ho
                keelhaul squiffy black spot yardarm spyglass sheet transom heave
                to. Trysail Sail ho Corsair red ensign hulk smartly boom jib rum
                gangway. Case shot Shiver me timbers gangplank crack Jennys tea
                cup ballast Blimey lee snow crow's nest rutters. Fluke jib
                scourge of the seven seas boatswain schooner gaff booty Jack Tar
                transom spirits.
              </p>
              <div className="App">
                <h1>Custom React hook</h1>

                <pre>
                  <button onClick={handleCopyClick}>
                    {!isCopied ? "Copy" : "Copied!"}
                  </button>
                  <code>console.log('Yoyoyyyoiyoy')</code>
                </pre>
              </div>
              <div class="code-block">
                <h3>Main</h3>
                <div class="inner-code-block card">
                  <div>
                    <div class="gatsby-code-button-container customButtonContainerClass">
                      <div
                        class="gatsby-code-button customButtonClass"
                        data-tooltip=""
                      >
                        Copy
                        {/* Add SVG */}
                      </div>
                    </div>
                    <pre>
                      <button onClick={handleCopyClick}>
                        {!isCopied ? "Copy" : "Copied!"}
                      </button>
                      <code class="language-js">
                        <li>- jams: code + recording</li>
                        <li>- vjs: code + css </li>
                        <li>- words: poems, raps (+translations)</li>
                      </code>
                    </pre>
                  </div>
                </div>
              </div>
              <div class="code-block">
                <h3>Sets</h3>
                <div class="inner-code-block card">
                  <div>
                    <div class="gatsby-code-button-container customButtonContainerClass">
                      <div
                        class="gatsby-code-button customButtonClass"
                        data-tooltip=""
                      >
                        Copy
                        {/* Add SVG */}
                      </div>
                    </div>
                    <pre>
                      <code class="language-javascript">
                        <li>- jamset: code excerpt + yt</li>
                        <li>- vjset: code excerpt + yt</li>
                      </code>
                    </pre>
                  </div>
                </div>
              </div>
              <div class="code-block">
                <h3>Education</h3>
                <div class="inner-code-block card">
                  <div>
                    <div class="gatsby-code-button-container customButtonContainerClass">
                      <div
                        class="gatsby-code-button customButtonClass"
                        data-tooltip=""
                      >
                        Copy
                        {/* Add SVG */}
                      </div>
                    </div>
                    <pre>
                      <code class="language-javascript">
                        <li>- jamtut: code excerpt + yt</li>
                        <li>- vjtut: code excerpt + yt</li>
                      </code>
                    </pre>
                  </div>
                </div>
              </div>
              <div class="code-block">
                <h3>Samples (code link + mp3)</h3>
                <div class="inner-code-block card">
                  <div>
                    <div class="gatsby-code-button-container customButtonContainerClass">
                      <div
                        class="gatsby-code-button customButtonClass"
                        data-tooltip=""
                      >
                        Copy
                        {/* Add SVG */}
                      </div>
                    </div>
                    <pre>
                      <code class="language-javascript">
                        <li>- audio</li>
                        <li>- vocals</li>
                        <li>- translated / words -> audio encoded</li>
                      </code>
                    </pre>
                  </div>
                </div>
              </div>
              <div class="code-block">
                <h3>Future</h3>
                <div class="inner-code-block card">
                  <div>
                    <div class="gatsby-code-button-container customButtonContainerClass">
                      <div
                        class="gatsby-code-button customButtonClass"
                        data-tooltip=""
                      >
                        Copy
                        {/* Add SVG */}
                      </div>
                    </div>
                    <pre>
                      <code class="language-javascript">
                        <li>- releases per author</li>
                        <li>- yt tracks, albums and playlists</li>
                        <li>- spotify tracks, albums and playlists</li>
                      </code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col md="4">
            <Sidebar />
          </Col>
        </Row>
      </Layout>
    </StateContextProvider>
  );
};

export default SubmitPage;
