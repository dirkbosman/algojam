import React, { useState } from "react";
import { Link } from "gatsby";
import {
  Button,
  Card,
  CardTitle,
  CardText,
  CardSubtitle,
  CardBody,
  Collapse,
} from "reactstrap";

const Post = ({ title, author, path, date, body }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Card>
      <CardBody>
        <CardTitle>
          <Link to={path}>{title}</Link>
        </CardTitle>
        <CardSubtitle>
          <span className="text-info">{date}</span> by{" "}
          <span className="text-info">{author}</span>
        </CardSubtitle>
        {/* <Link to={path} className="btn btn-outline-primary float-right">
          More...
        </Link> */}

        <div>
          <Button
            color="primary"
            onClick={toggle}
            style={{ marginBottom: "1rem" }}
          >
            Toggle
          </Button>
          <Collapse isOpen={isOpen}>
            <Card>
              <CardBody className="code-container">
                <CardText>{body}</CardText>
              </CardBody>
            </Card>
          </Collapse>
        </div>
      </CardBody>
    </Card>
  );
};

export default Post;
