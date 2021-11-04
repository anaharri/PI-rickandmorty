const { Router } = require('express');
const { Character } = require('../db');
const axios = require('axios');
const router = Router();

router.get('/', async (req, res, next) => {
  let apiCharacters;
  let dbCharacters;

  try {
    apiCharacters = await axios.get(
      'https://rickandmortyapi.com/api/character/',
    );

    apiCharacters = apiCharacters.data.results.map((char) => {
      return {
        id: char.id,
        name: char.name,
        image: char.image,
      };
    });

    dbCharacters = await Character.findAll();

    res.json([...dbCharacters, ...apiCharacters]);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
