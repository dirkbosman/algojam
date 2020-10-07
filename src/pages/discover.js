import React, { useContext, useState, useEffect } from "react";
import { Row, Col, Card, CardBody, CardTitle, Button } from "reactstrap";
import { useJamsData } from "../hooks/jams";
import Layout from "../components/layout";
import { StateContext } from "../components/stateContext";
import Sidebar from "../components/Sidebar";
import HarryImage from "../images/harry.jpg";
import discover from "../utils/discover";

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
          {" "}
          <Row className="mb-4">
            <h3>Tracks AND Playlists (Created with code)</h3>
            <div className="col-md-8">
              {discover.map((item, index) => (
                <Card key={index} className="tracksPlaylistContainer">
                  <CardBody className="tracksPlaylist">
                    <div className="tracksPlaylistWrapper">
                      <img
                        src={HarryImage}
                        style={{ width: "40px", height: "40px" }}
                        alt="Harry's profile"
                      />
                      <CardTitle>{item.name}</CardTitle>
                      <Button
                        className="text-uppercase"
                        color="primary"
                        href={item.audioUrl}
                      >
                        GO!
                      </Button>
                    </div>
                  </CardBody>
                </Card>
              ))}
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
