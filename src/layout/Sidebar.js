import React, { useContext, useState } from "react";
import logo from "../assets/images/Foxbel-Music/foxbel-music.png";
import { Layout } from "antd";
import "../assets/css/Sidebar.css";
import { UiContext } from "../context/UiContext";
import { CardBody, Row } from "reactstrap";
import { useHistory } from "react-router-dom";

const { Sider } = Layout;

const Sidebar = () => {
  const { ocultarMenu } = useContext(UiContext);
  let history = useHistory();
  const [focus, setFocus] = useState({
    recientes: false,
    artistas: false,
    albums: false,
    canciones: false,
    estaciones: false,
    metal: false,
    para_bailar: false,
    rock90s: false,
    baladas: false,
  });

  const handleClick = (value) => {
    history.push("/" + value);
    switch (value) {
      case "recientes":
        setFocus({
          recientes: true,
          artistas: false,
          albums: false,
          canciones: false,
          estaciones: false,
          metal: false,
          para_bailar: false,
          rock90s: false,
          baladas: false,
        });
        break;
      case "artistas":
        setFocus({
          recientes: false,
          artistas: true,
          albums: false,
          canciones: false,
          estaciones: false,
          metal: false,
          para_bailar: false,
          rock90s: false,
          baladas: false,
        });
        break;
      case "albums":
        setFocus({
          recientes: false,
          artistas: false,
          albums: true,
          canciones: false,
          estaciones: false,
          metal: false,
          para_bailar: false,
          rock90s: false,
          baladas: false,
        });
        break;
      case "canciones":
        setFocus({
          recientes: false,
          artistas: false,
          albums: false,
          canciones: true,
          estaciones: false,
          metal: false,
          para_bailar: false,
          rock90s: false,
          baladas: false,
        });
        break;
      case "estaciones":
        setFocus({
          recientes: false,
          artistas: false,
          albums: false,
          canciones: false,
          estaciones: true,
          metal: false,
          para_bailar: false,
          rock90s: false,
          baladas: false,
        });
        break;
      case "metal":
        setFocus({
          recientes: false,
          artistas: false,
          albums: false,
          canciones: false,
          estaciones: false,
          metal: true,
          para_bailar: false,
          rock90s: false,
          baladas: false,
        });
        break;
      case "para_bailar":
        setFocus({
          recientes: false,
          artistas: false,
          albums: false,
          canciones: false,
          estaciones: false,
          metal: false,
          para_bailar: true,
          rock90s: false,
          baladas: false,
        });
        break;
      case "rock90s":
        setFocus({
          recientes: false,
          artistas: false,
          albums: false,
          canciones: false,
          estaciones: false,
          metal: false,
          para_bailar: false,
          rock90s: true,
          baladas: false,
        });
        break;
      case "baladas":
        setFocus({
          recientes: false,
          artistas: false,
          albums: false,
          canciones: false,
          estaciones: false,
          metal: false,
          para_bailar: false,
          rock90s: false,
          baladas: true,
        });
        break;

      default:
        break;
    }
  };

  return (
    <Sider
      className="sidebar"
      width="280"
      collapsedWidth="0"
      breakpoint="md"
      hidden={ocultarMenu}
    >
      <img className="logo" src={logo} alt="logo" />
      <Row>
        <CardBody className="titulo">Mi librería</CardBody>
      </Row>
      <Row>
        <CardBody
          className={`${focus.recientes ? "selected" : "no-selected"}`}
          onClick={() => handleClick("recientes")}
        >
          Recientes
        </CardBody>
      </Row>
      <Row>
        <CardBody
          className={`${focus.artistas ? "selected" : "no-selected"}`}
          onClick={() => handleClick("artistas")}
        >
          Artistas
        </CardBody>
      </Row>
      <Row>
        <CardBody
          className={`${focus.albums ? "selected" : "no-selected"}`}
          onClick={() => handleClick("albums")}
        >
          Álbums
        </CardBody>
      </Row>
      <Row>
        <CardBody
          className={`${focus.canciones ? "selected" : "no-selected"}`}
          onClick={() => handleClick("canciones")}
        >
          Canciones
        </CardBody>
      </Row>
      <Row>
        <CardBody
          className={`${focus.estaciones ? "selected" : "no-selected"}`}
          onClick={() => handleClick("estaciones")}
        >
          Estaciones
        </CardBody>
      </Row>
      <Row>
        <CardBody className="titulo">Playlist</CardBody>
      </Row>
      <Row>
        <CardBody
          className={`${focus.metal ? "selected" : "no-selected"}`}
          onClick={() => handleClick("metal")}
        >
          Metal
        </CardBody>
      </Row>
      <Row>
        <CardBody
          className={`${focus.para_bailar ? "selected" : "no-selected"}`}
          onClick={() => handleClick("para_bailar")}
        >
          Para bailar
        </CardBody>
      </Row>
      <Row>
        <CardBody
          className={`${focus.rock90s ? "selected" : "no-selected"}`}
          onClick={() => handleClick("rock90s")}
        >
          Rock 90s
        </CardBody>
      </Row>
      <Row>
        <CardBody
          className={`${focus.baladas ? "selected" : "no-selected"}`}
          onClick={() => handleClick("baladas")}
        >
          Baladas
        </CardBody>
      </Row>
    </Sider>
  );
};

export default Sidebar;
