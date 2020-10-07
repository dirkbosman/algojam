import React, { useState, useEffect } from "react";
import { Row, Col, Card, CardBody } from "reactstrap";
import { useJamsData } from "../hooks/jams";
import Layout from "../components/layout";
import Bookmarks from "../components/tags/bookmarks";
import Sidebar from "../components/Sidebar";

const BookmarkPage = () => {
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
      <Row>
        <Col md="8">
          <div className="pageSymbols">
            <i className="fas fa-bookmark"></i>
          </div>
          <h1>Bookmarks</h1>
          <Card>
            <CardBody>
              <Bookmarks
                data={originalData}
                title="Your Bookmark History"
                isLocal={true}
              />
            </CardBody>
          </Card>
        </Col>
        <Col md="4">
          <Sidebar />
        </Col>
      </Row>
    </Layout>
  );
};

export default BookmarkPage;
