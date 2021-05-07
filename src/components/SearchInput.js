import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "../assets/css/Search.css";
import { Input } from "antd";

const SearchInput = () => {
  return (
    <>
      <Input
        className="searchTerm"
        placeholder="Buscar"
        suffix={
          <FontAwesomeIcon className="searchIcon" icon={faSearch} size="1x" />
        }
      />
    </>
  );
};

export default SearchInput;
