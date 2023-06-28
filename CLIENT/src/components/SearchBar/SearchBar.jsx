import { useState } from "react";
import style from "./SearchBar.module.css";
import React from "react";

export default function SearchBar(props) {
  const { onSearch } = props;

  const [id, setId] = useState("");

  const handleChange = (event) => {
    setId(event.target.value);
  };

  return (
    <div className={style.searchbar}>
      <input type="search" onChange={handleChange} value={id} />
      <button onClick={() => onSearch(id)}>BUSCAR </button>
    </div>
  );
}
