import React from 'react';
import Card from '../Card';
import style from './Cards.module.css'

const Cards = ({ characters }) => {
  return (
    <section className={style.cardWrapper}>
     {characters?.map(character => <Card name={character.name} image={character.image} key={character.id} />)}
    </section>
  );
};

export default Cards;
