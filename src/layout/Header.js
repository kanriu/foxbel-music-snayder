import React from "react";
import SearchInput from "../components/SearchInput";
import { Layout, Row, Col } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "../assets/css/Header.css";

const HeaderAntd = Layout.Header;

const Header = ({ setAlbums }) => {
  return (
    <HeaderAntd
      className="site-layout-background"
      style={{
        paddingLeft: "2rem",
        marginBottom: "1rem",
      }}
    >
      <Row justify="space-between">
        <Col lg={12}>
          <SearchInput setAlbums={setAlbums} />
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
