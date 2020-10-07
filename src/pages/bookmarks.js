import React, { useState, useEffect } from "react";
import { Row, Col } from "reactstrap";
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
          <Bookmarks
            data={originalData}
            title="Your Bookmarks"
            isLocal={true}
          />
        </Col>
        <Col md="4">
          <Sidebar />
        </Col>
      </Row>
    </Layout>
  );
};

export default BookmarkPage;
