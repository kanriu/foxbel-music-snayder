import React from "react";
import { Layout } from "antd";
import { Card, CardBody, CardImg, CardTitle, CardSubtitle } from "reactstrap";
import Pablo from "../assets/images/Artists/21.jpg";
import { Row, Col } from "antd";
const FooterAntd = Layout.Footer;
const Footer = () => {
  return (
    <FooterAntd style={{ padding: 0 }}>
      <Row style={{ background: "#EB5757", height: "120px" }}>
        <Col lg={6}>
          <Card>
            <Row>
              <Col lg={5}>
                <CardImg width="100%" src={Pablo} alt="adele" />
              </Col>

              <Col lg={10}>
                <CardBody style={{ padding: "1rem" }}>
                  <CardTitle
                    tag="h3"
                    style={{ color: "white", fontWeight: "bold", margin: 0 }}
                  >
                    Canción
                  </CardTitle>
                  <CardSubtitle tag="h4" style={{ color: "white" }}>
                    Artista - Álbum
                  </CardSubtitle>
                </CardBody>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </FooterAntd>
  );
};

export default Footer;
