import React from "react";
import { Card, CardBody, CardImg, CardSubtitle, CardTitle } from "reactstrap";

const CardSecondary = ({
  id,
  imagen,
  nombreAlbum,
  nombreArtista,
  getAlbum,
}) => {
  return (
    <Card
      style={{ cursor: "pointer" }}
      onClick={() => getAlbum(id, nombreArtista, nombreAlbum, imagen)}
    >
      <CardImg width="100%" alt="adele" src={imagen} />
      <CardBody style={{ paddingTop: "1rem" }}>
        <CardTitle style={{ fontWeight: "bold", marginBottom: 0 }} tag="h3">
          {nombreAlbum}
        </CardTitle>
        <CardSubtitle tag="h4">{nombreArtista}</CardSubtitle>
      </CardBody>
    </Card>
  );
};

export default CardSecondary;
