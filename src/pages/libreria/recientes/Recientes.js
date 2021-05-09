import React, { useEffect, useState } from "react";
import { Container, Label } from "reactstrap";
import CardPrincipal from "../../../components/CardPrincipal";
import CardSecondary from "../../../components/CardSecondary";
import { GET_RELEASES, GET_ALBUM } from "../../../config/ApiRest";
import { DEEZER_CONNECT_TEST } from "../../../config/website/Url";
import Axios from "axios";
import { Row, Col } from "antd";
import Header from "../../../layout/Header";
import { useHistory } from "react-router-dom";

const Recientes = () => {
  let history = useHistory();
  const params = new URLSearchParams(window.location.search);
  const code = params.get("code");
  const [albums, setAlbums] = useState([]);
  const [albumPrincipal, setAlbumPrincipal] = useState({
    id: "",
    nombreArtista: "",
    nombreAlbum: "",
    imagen: "",
  });

  const [song, setSong] = useState("");

  const getConnect = async () => {
    try {
      let res = await Axios.get(DEEZER_CONNECT_TEST + code);
      let response = await res.data;
      console.log(response);
      getRecientes(response);
    } catch (error) {
      console.log(error);
    }
  };

  const getRecientes = async (token) => {
    try {
      let res = await Axios.get(`${GET_RELEASES}?${token}`);
      let response = await res.data;
      console.log(response);

      setAlbums(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getAlbum = async (id, nombreArtista, nombreAlbum, imagen) => {
    setAlbumPrincipal({
      id: id,
      nombreArtista: nombreArtista,
      nombreAlbum: nombreAlbum,
      imagen: imagen,
    });
    try {
      let res = await Axios.get(`${GET_ALBUM}/${id}`);
      let response = await res.data;
      console.log(response);
      setSong(response.tracks.data[0].preview);
    } catch (error) {
      console.log(error);
    }
  };

  const start = () => {
    let audio = new Audio(song);
    audio.play();
  };

  const prueba = () => {
    history.push("/autenticacion");
  };

  useEffect(() => {
    if (code !== null) {
      getConnect();
    } else {
      history.push("/autenticacion");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (albums.length !== 0) {
      getAlbum(
        albums[0].id,
        albums[0].artist.name,
        albums[0].title,
        albums[0].cover_xl
      );
    }
  }, [albums]);

  return (
    <Container>
      <Header setAlbums={setAlbums} />
      <Row>
        <CardPrincipal
          albumPrincipal={albumPrincipal}
          start={start}
          prueba={prueba}
        />
      </Row>
      <Row>
        <Label
          style={{
            color: "#E86060",
            fontSize: "x-large",
            fontWeight: "bold",
            marginBottom: "1rem",
          }}
        >
          Resultados
        </Label>
      </Row>
      <Row justify="space-around">
        {albums.map((item, index) => {
          return (
            <Col lg={5} key={index}>
              <CardSecondary
                id={item.id}
                imagen={item.cover_xl}
                nombreAlbum={item.title}
                nombreArtista={item.artist.name}
                getAlbum={getAlbum}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Recientes;
