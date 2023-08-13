import React from "react";
import style from "./Card.module.css";
import { Link } from 'react-router-dom'
import { addFav, removeFav } from "../../Redux/actions";
import { useState } from "react";
import { useEffect } from "react";
import { connect } from "react-redux";

function Card ({name, status, species, gender, origin, image, onClose, id, addFav, removeFav, myFavorites}) {

const [isFav, setIsFav] = useState(false);

useEffect((id) => {
   myFavorites.forEach((fav) => {
      if (fav.id === id) {
         setIsFav(true);
      }
   });
}, [myFavorites]);

const handleFavorite = () => {
		isFav ? removeFav(id) : addFav({ id, name, image, gender })
		setIsFav(!isFav)
	}
	const handleClose = () => {
		removeFav(id)
		onClose(id)
	}

   return (
      <div className={style.divCard}>
         <div>
         {
            isFav ? (
            <button onClick={handleFavorite}>♥️</button>
            ) : (
            <button onClick={handleClose}>💘</button>
            )
         }
         </div>
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

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites,
   }
}

const matDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => dispatch(addFav(character)),
      removeFav: (id) => dispatch(removeFav(id)),
   }
}


export default connect(mapStateToProps, matDispatchToProps)(Card);
