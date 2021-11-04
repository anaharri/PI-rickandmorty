import React from 'react';
import Card from '../Card';

const Cards = ({ characters }) => {
  return (
    <section>
     {characters?.map(character => <Card name={character.name} image={character.image} key={character.id} />)}
    </section>
  );
};

export default Cards;
