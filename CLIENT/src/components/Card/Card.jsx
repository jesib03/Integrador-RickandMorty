import React from "react";
import style from "./Card.module.css";
import { Link } from 'react-router-dom'

function Card ({name, status, species, gender, origin, image, onClose, id}) {
   return (
      <div className={style.divCard}>
         <button onClick={() => onClose(id)}>X</button>
         <img src={image} alt='' />
         <Link to={`/detail/${id}`} >
         <h2>{name}</h2>
         </Link>
         {/* <h3>Status: {status}</h3>
         <h3>Specie: {species}</h3>
         <h3>Gender: {gender}</h3>
         <h3>Origin: {origin}</h3> */}
      </div>
   );
}
export default Card;
