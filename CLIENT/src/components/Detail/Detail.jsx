import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Detail = () => {
    const [character, setCharacter] = useState({});
    const { id } = useParams();

    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`)
        .then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
            window.alert("Character not found");
           }
        });
        return setCharacter({});
     }, [id]);

    return (
        <div>
            {character.name ? (
                <>
                    <h1>CHARACTER DETAIL</h1>
                    <h2>Name: {character.name}</h2>
                    <h3>Status: {character.status}</h3>
                    <h3>Specie: {character.species}</h3>
                    <h3>Gender: {character.gender}</h3>
                    <h3>Origin: {character.origin?.name}</h3>
                    <img src={character.image} alt="img" />
                </>
            ) : (
                <h3>LOADING...</h3>
                )
            }
            <Link to="/home">
            <button>HOME</button>
            </Link>
        </div>

    )
}

export default Detail;