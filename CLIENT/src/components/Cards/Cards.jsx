import Card from "../Card/Card";
import style from "./Cards.module.css";

export default function Cards({characters, onClose}) {
   return (
      <div className={style.container}>
             {characters.map(({name, status, species, gender, origin, image, id}) => {
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
               onClose={onClose}
                />
               )
             })
            }  
      </div>
   );
}
