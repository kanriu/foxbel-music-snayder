import React from "react";
import SearchInput from "../components/SearchInput";
import { Layout, Row, Col } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "../assets/css/Header.css";

const HeaderAntd = Layout.Header;

const Header = () => {
  return (
    <HeaderAntd
      className="site-layout-background"
      style={{
        paddingLeft: "2rem",
      }}
    >
      <Row justify="space-between">
        <Col lg={12}>
          <SearchInput />
        </Col>
        <Col lg={3}>
          <FontAwesomeIcon className="user-icon" icon={faUser} size="1x" />
          Francisco M.
        </Col>
      </Row>
    </HeaderAntd>
  );
};

export default Header;
