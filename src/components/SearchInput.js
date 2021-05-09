import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "../assets/css/Search.css";
import { Input } from "antd";
import Axios from "axios";
import { GET_SEARCH } from "../config/ApiRest";

const SearchInput = ({ setAlbums }) => {
  const [search, setSearch] = useState("");

  const getSearch = async (value) => {
    try {
      let res = await Axios.get(
        `${GET_SEARCH}track:"${value}" artist:"${value}"`
      );
      let response = await res.data;
      console.log(response);
      const values = response.data;
      setAlbums(
        values.map((item) => {
          return {
            id: item.album.id,
            cover_xl: item.album.cover_xl,
            title: item.album.title,
            artist: {
              name: item.artist.name,
            },
          };
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (search !== "") {
      getSearch(search);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  return (
    <>
      <Input
        className="searchTerm"
        placeholder="Buscar"
        suffix={
          <FontAwesomeIcon className="searchIcon" icon={faSearch} size="1x" />
        }
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
    </>
  );
};

export default SearchInput;
