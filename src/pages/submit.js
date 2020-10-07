import React, { useState, useEffect } from "react";
import { Row, Col } from "reactstrap";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Sidebar from "../components/Sidebar";

const SubmitPage = () => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return (
    <Layout>
      <SEO title="Submit" />

      <Row>
        <Col md="8">
          <div className="pageSymbols">
            <i className="fas fa-cloud-upload-alt"></i>
          </div>
          <h1>Submit</h1>
          <div>
            <h2>Considering submitting your latest jam!</h2>
            <p>
              Prow scuttle parrel provost Sail ho shrouds spirits boom
              mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's
              nest nipperkin grog yardarm hempen halter furl. Swab barque
              interloper chantey doubloon starboard grog black jack gangway
              rutters.
            </p>

            <div className="code-block">
              <h3>Main</h3>
              <div className="inner-code-block card">
                <div>
                  <div className="gatsby-code-button-container customButtonContainerClass">
                    <div
                      className="gatsby-code-button customButtonClass"
                      data-tooltip=""
                    >
                      Copy
                      {/* Add SVG */}
                    </div>
                  </div>
                  <pre>
                    <code className="language-js">
                      <div>
                        <h3>Main</h3>
                        <ul>
                          <li>- jams: code + recording</li>
                          <li>- vjs: code + css </li>
                          <li>- words: poems, raps (+translations)</li>
                        </ul>
                      </div>
                      <div>
                        <h3>Sets</h3>
                        <ul>
                          <li>- jamset: code excerpt + yt</li>
                          <li>- vjset: code excerpt + yt </li>
                        </ul>
                      </div>
                      <div>
                        <h3>Education</h3>
                        <ul>
                          <li>- jamtut: code excerpt + yt</li>
                          <li>- vjtut: code excerpt + yt </li>
                        </ul>
                      </div>
                      <div>
                        <h3>Samples (code link + mp3)</h3>
                        <ul>
                          <li>- audio</li>
                          <li>- vocals</li>
                          <li>- translated / words -> audio encoded</li>
                        </ul>
                      </div>
                      <div>
                        <h3>Future</h3>
                        <ul>
                          <li>- releases per author</li>
                          <li>- yt tracks, albums and playlists</li>
                          <li>- spotify tracks, albums and playlists</li>
                        </ul>
                      </div>
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
  );
};

export default SubmitPage;
