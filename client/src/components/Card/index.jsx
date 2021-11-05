import React from 'react';
import { Link } from 'react-router-dom';
import style from './Card.module.css'

const index = ({ name, image, key }) => {
  return (
    <div className={style.cardContainer}>

    <Link className={style.link} to={`/character/${key}`}>
        <h2>Name: {name}</h2>
        <img src={image} alt={name} />
    </Link>
    </div>
  );
};

export default index;
