import React, { useState, useEffect } from "react";
import { Row, Col, Card } from "reactstrap";
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

  // console.log(testDirk);

  return (
    <Layout>
      <SEO title="Submit" />

      <Row>
        <Col md="8">
          <div className="pageSymbols">
            <i className="fas fa-cloud-upload-alt"></i>
          </div>
          <h1>Submit</h1>
          <div className="submitPageTitle">
            <h5>Top Algo Tracks &amp; Playlists</h5>
            <p>
              Prow scuttle parrel provost Sail ho shrouds spirits boom
              mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's
              nest nipperkin grog yardarm hempen halter furl. Swab barque
              interloper chantey doubloon starboard grog black jack gangway
              rutters.
            </p>
          </div>

          {originalData.map(({ node }) => {
            if (node.frontmatter.uid === 20200913012760) {
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
        </Col>
        <Col md="4">
          <Sidebar />
        </Col>
      </Row>
    </Layout>
  );
};

export default SubmitPage;
