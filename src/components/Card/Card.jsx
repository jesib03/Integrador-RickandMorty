import style from "./Card.module.css";

function Card ({name, status, species, gender, origin, image, onClose, id}) {
   return (
      <div className={style.divCard}>
         <button onClick={() => onClose(id)}>X</button>
         <img src={image} alt='' />
         <h2>Name: {name}</h2>
         <h2>Status: {status}</h2>
         <h2>Specie: {species}</h2>
         <h2>Gender: {gender}</h2>
         <h2>Origin: {origin}</h2>
      </div>
   );
}
export default Card;
