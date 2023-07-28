const axios = require("axios");
// require("dotenv").config();

// const { URL } = process.env;
// console.log(URL)
const URL = 'https://rickandmortyapi.com/api/character/';
const getCharById = async (req, res) => {
  try {
    const { id } = req.params;
    const { data } = await axios(`${URL}/${id}`);
    const { status, name, species, origin, gender, image } = data;

      if(name) {
        const character = {
          id,  
          name,
          status,
          species,
          origin,
          gender, 
          image,
        }
        return res.status(200).json(character)
      }
      return res.status(404).send("Not found")
    } catch (err) {
     res.status(500).json({error: err.message})
    }
      
};

module.exports = { getCharById };
