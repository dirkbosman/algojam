import React, { useState, useEffect } from "react";
import { Row, Col, Card, CardBody, Button } from "reactstrap";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Sidebar from "../components/Sidebar";

import { useJamsData } from "../hooks/jams";

const SubmitPage = () => {
  const originalData = useJamsData();
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
          <Row>
            <Card className="submitPage">
              <CardBody>
                <h5>Public Algojam Repo</h5>
                <p>
                  The 80's gave us not only funky hair dues and aerobics on TV,
                  it was also the formative years in which retro synths and
                  synthesized beats went mainstream. Today we carry the torch
                  forward as programmers / performers / composers as we create
                  beats on SuperCollider, TidalCycles, Sonic Pi and ChucK.
                  Consider becoming a contributor today by copying the template
                  below and submitting your beat as a PR on Algojam's public
                  jams-repo.
                </p>
                <h5>Algojam's Posts Include</h5>
                <div>
                  <div className="submitPageFocus">
                    <h6>Main Tags</h6>
                    <ul>
                      <li>jams (code + audio recording)</li>
                      <li>vjs (code + color palette)</li>
                      <li>lyrics (poems, raps, translations)</li>
                    </ul>
                  </div>
                  <div className="submitPageFocus">
                    <h6>Session Tags</h6>
                    <ul>
                      <li>jamset (code excerpt + youtube video)</li>
                      <li>vjset (code excerpt + youtube video)</li>
                    </ul>
                  </div>
                  <div className="submitPageFocus">
                    <h6>Education Tags</h6>
                    <ul>
                      <li>jamtut (code excerpt + youtube video)</li>
                      <li>vjtut (code excerpt + youtube video)</li>
                    </ul>
                  </div>
                  <div className="submitPageFocus">
                    <h6>Sample Tags (code link + mp3)</h6>
                    <ul>
                      <li>audio</li>
                      <li>vocals</li>
                    </ul>
                  </div>
                  <div className="submitPageFocus">
                    <h6>(Future Tags)</h6>
                    <ul>
                      <li>releases per author</li>
                      <li>youtube tracks, albums and playlists</li>
                      <li>spotify tracks, albums and playlists</li>
                    </ul>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Row>
          <Row>
            <Card className="submitPage">
              <CardBody>
                <h5>Algojam's Submit Template</h5>
                {originalData.map(({ node }) => {
                  if (node.frontmatter.uid === 20200701312343) {
                    return (
                      <div className="code-block">
                        <Card
                          className="inner-code-block"
                          dangerouslySetInnerHTML={{
                            __html: `<div>${node.html}</div>`,
                          }}
                        ></Card>
                      </div>
                    );
                  }
                })}
                <div className="algojamsPR">
                  <h6>Wanna contribute your algo jams?</h6>
                  <Button
                    style={{
                      marginBottom: "1rem",
                      backgroundColor: "#ff00ff",
                      color: "black",
                      border: "1px solid grey",
                      margin: "4px 0",
                    }}
                    size="sm"
                    href="https://github.com/dirkbosman/algojam/tree/master/src/pages/jams"
                  >
                    Submit a PR
                  </Button>
                </div>
              </CardBody>
            </Card>
          </Row>
        </Col>
        <Col md="4">
          <Sidebar />
        </Col>
      </Row>
    </Layout>
  );
};

export default SubmitPage;
