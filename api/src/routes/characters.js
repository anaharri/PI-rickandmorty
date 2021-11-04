const { Router } = require('express');
const { Character } = require('../db');
const axios = require('axios');
const router = Router();

router.get('/:id', async (req, res, next) => {
  const { id } = req.params
  let character
  
  try {
    if (id.includes('-')) {
      character = await Character.findByPk(id, { include: Episode })

      character = {
        id: character.id,
        name: character.name,
        image: character.image,
        episodes: character.Episodes.map((episode) => {
          return {
            id: episode.id,
            name: episode.name,
          }
        }),
      }
    } else {
      let characterResponse = await axios.get(
        `https://rickandmortyapi.com/api/character/${id}`
      )
      characterResponse = characterResponse.data

      let episodesList = characterResponse.episode.map((episode) =>
        episode.split('/').pop()
      )

      episodesList = episodesList.join(',')

      let episodes = await axios.get(
        `https://rickandmortyapi.com/api/episode/${episodesList}`
      )
      episodes = episodes.data.map((episodes) => {
        return {
          id: episodes.id,
          name: episodes.name,
        }
      })

      character = {
        id: characterResponse.id,
        name: characterResponse.name,
        image: characterResponse.image,
        episodes: episodes,
      }
    }

    res.json(character)
  } catch (error) {
    next(error)
  }
})

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

router.post('/', async (req, res, next) => {
  const { name, image, episodes } = req.body

  try {
    let character = await Character.create({ name, image })
    await character.setEpisodes(episodes)

    let charWithEpisodes = await Character.findOne({
      where: { name: name },
      attributes: {
        exclude: ['updatedAt', 'createdAt'],
      },
      include: {
        model: Episode,
        through: {
          attributes: [],
        },
      },
    })

    res.json(charWithEpisodes)
  } catch (error) {
    next(error)
  }
})

module.exports = router
