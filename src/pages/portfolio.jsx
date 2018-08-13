import "../App.css";
import React from "react";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardGroup,
  CardSubtitle,
  CardBody
} from "reactstrap";

export const Portfolio = () => (
  <div className="container">
    <h1>Portfolio Page</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper porta
      dictum. Fusce gravida faucibus quam, quis convallis orci rhoncus quis.
      Praesent sodales risus neque, ut suscipit sapien bibendum at. Aliquam erat
      volutpat. Pellentesque sit amet elementum est. Ut id ligula nec turpis
      ultrices varius eu non risus. Nulla metus lacus, ultrices in tortor ac,
      dignissim fringilla lacus. Sed gravida enim dolor. Donec nec blandit
      justo, commodo suscipit est. Cras et diam id ligula hendrerit pellentesque
      quis a felis. Sed tempus lectus tortor, vehicula accumsan nulla sagittis
      ut. Duis et nisi nisi.
    </p>
    <CardGroup>
      <Card>
        <CardImg
          top
          width="100%"
          src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg
          top
          width="100%"
          src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>
            This card has supporting text below as a natural lead-in to
            additional content.
          </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg
          top
          width="100%"
          src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </CardGroup>

    <hr />
    <CardGroup>
      <Card>
        <CardImg
          top
          width="100%"
          src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg
          top
          width="100%"
          src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>
            This card has supporting text below as a natural lead-in to
            additional content.
          </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg
          top
          width="100%"
          src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </CardGroup>
  </div>
);
