import React from "react";
// import { Link } from "gatsby";
import SEO from "../components/seo";
import Layout from "../components/layout";
import {
  Button,
  Card,
  CardText,
  CardBody,
  CardTitle,
  Row,
  Col,
} from "reactstrap";
import HarryImage from "../images/harry.jpg";
import SallyImage from "../images/sally.jpg";
import authors from "../utils/authors";
import { slugify } from "../utils/utilityFunctions";
import Sidebar from "../components/Sidebar";

const CodersPage = () => (
  // const TribePage = () => (
  <Layout pageTitle="Our Team">
    <SEO title="Our Team" keywords={[`gatsby`, `application`, `react`]} />
    <Row>
      <Col md="8">
        {" "}
        <Row className="mb-4">
          <div className="col-md-3">
            <img
              src={HarryImage}
              style={{ maxWidth: "100%" }}
              alt="Harry's profile"
            />
          </div>
          <div className="col-md-8">
            <Card style={{ minHeight: "100%" }}>
              <CardBody>
                <CardTitle>{authors[0].name}</CardTitle>
                <CardText>{authors[0].bio}</CardText>
                <Button
                  className="text-uppercase"
                  color="primary"
                  href={`/author/${slugify(authors[0].name)}`}
                >
                  View posts
                </Button>
              </CardBody>
            </Card>
          </div>
        </Row>
        <Row className="mb-4">
          <div className="col-md-3">
            <img
              src={SallyImage}
              style={{ maxWidth: "100%" }}
              alt="Sally's profile"
            />
          </div>
          <div className="col-md-8">
            <Card style={{ minHeight: "100%" }}>
              <CardBody>
                <CardTitle>{authors[1].name}</CardTitle>
                <CardText>{authors[1].bio}</CardText>
                <Button
                  className="text-uppercase"
                  color="primary"
                  href={`/author/${slugify(authors[1].name)}`}
                >
                  View posts
                </Button>
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

export default CodersPage;
// export default TribePage;
