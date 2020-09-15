import React from "react";
import {
  Card,
  CardTitle,
  CardBody,
  Form,
  FormGroup,
  Input,
  Button,
} from "reactstrap";

const Sidebar = () => (
  <div>
    <Card>
      <CardBody>
        <CardTitle className="text-center text-uppercase mb-3">
          Newsletter
        </CardTitle>
        <Form className="text-center">
          <FormGroup>
            <Input
              type="email"
              name="email"
              placeholder="Your email address ..."
            />
          </FormGroup>
          <Button className="btn btn-outline-success text-uppercase">
            Subscribe
          </Button>
        </Form>
      </CardBody>
    </Card>
  </div>
);

export default Sidebar;
