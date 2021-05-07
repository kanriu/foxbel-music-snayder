import React from "react";
import {
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardText,
  CardSubtitle,
} from "reactstrap";
import Adele from "../assets/images/Artists/adele.jpg";
import { Col, Row, Button } from "antd";
import "../assets/css/Card.css";

const CardPrincipal = () => {
  return (
    <Card>
      <Row justify="center">
        <Col lg={6} md={8} sm={9}>
          <CardImg width="100%" src={Adele} alt="adele" />
        </Col>
        <Col lg={15} md={15} sm={15}>
          <CardBody className="body">
            <CardTitle tag="h2" className="title">
              Adele 21
            </CardTitle>
            <CardSubtitle tag="h3" className="subtitle">
              <Row>
                <Col>Lo mejor de Adele</Col>
                <Col className="seguidores">321, 123 seguidores</Col>
              </Row>
            </CardSubtitle>
            <CardText className="text">
              Adele Laurie Blue Adkins (Tottenham, Londres, Inglaterra, 5 de
              mayo de 1988), conocida simplemente como Adele, es una cantante,
              compositora y multinstrumentista británica.8​
            </CardText>
            <Row>
              <Col lg={4} style={{ marginRight: "1rem" }}>
                <Button className="btn-reproducir" shape="round">
                  Reproducir
                </Button>
              </Col>
              <Col lg={4}>
                <Button className="btn-seguir" shape="round">
                  Seguir
                </Button>
              </Col>
            </Row>
          </CardBody>
        </Col>
      </Row>
    </Card>
  );
};

export default CardPrincipal;
