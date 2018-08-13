import "../App.css";
import React from "react";
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from "reactstrap";

export const Contact = () => (
  <div className="container">
    <h1>Contact</h1>
    <Form>
      <FormGroup row>
        <Label for="exampleName" sm={2}>
          Name
        </Label>
        <Col sm={10}>
          <Input
            type="name"
            name="name"
            id="exampleName"
            placeholder="please put your name here"
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleEmail" sm={2}>
          Email
        </Label>
        <Col sm={10}>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="please put your email here"
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="examplePhone" sm={2}>
          Phone
        </Label>
        <Col sm={10}>
          <Input
            type="phone"
            name="phone"
            id="examplePhone"
            placeholder="please put your phone here"
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleText" sm={2}>
          Text Message
        </Label>
        <Col sm={10}>
          <Input type="textarea" name="text" id="exampleText" placeholder="please put your message here" />
        </Col>
      </FormGroup>
      <FormGroup check row>
        <Col sm={{ size: 10, offset: 2 }}>
          <Button>Submit</Button>
        </Col>
      </FormGroup>
    </Form>
  </div>
);
