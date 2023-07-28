import React from "react";
import { useSelector } from "react-redux";
import Card from "../Card/Card";

const Favorites = () => {

    const favorites = useSelector(state => state.myFavorites)
    return (
        <div>
               {favorites?.map(({name, status, species, gender, origin, image, id }) => {
                 return (
                 <Card 
                 name = {name} 
                 status={status} 
                 species = {species}
                 gender={gender} 
                 origin = {origin.name} 
                 image = {image} 
                 key = {id} 
                 id = {id}
                  />
                 )
               })
              }  
        </div>
     );
}; 


export default Favorites;