const axios = require('axios');

const getCharById = (res, id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => response.data)
    .then(({ name, gender, species, origin, image, status }) => {
        const character = { name, gender, species, origin, image, status }
        return res.
            writeHead(200, { 'Content-Type': 'application/json' })
            .end(JSON.stringify(character));
    })
    .catch(err => {
        return res
            .writeHead(500, { 'Content-Type': 'text/plain' })
            .end(err.message);  
    });
}

module.exports = {
    getCharById
}