import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cards from '../components/Cards';
import NavBar from '../components/NavBar/index';
import { filterOrigin } from './../redux/actions/index';

const Home = () => {
  const characters = useSelector((state) => state.filteredCharacters);
  const dispatch = useDispatch();

  const handleFilterOrigin = (e) => {
    dispatch(filterOrigin(e.target.value));
  };

  //un estado que nos tome la pagina actual
  //un estado que nos tome la cantidad de cards por pagina
  //estado con arreglo de paginas

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  //necesito 3 variables para saber cuantos items tengo y saber cuantas paginas voy a necesitar
  let lastItemPerPage = currentPage * itemsPerPage; // --> 4 * 5 --> 20
  
  let firsItemPerPage = lastItemPerPage - itemsPerPage; // 20 - 5  --> 15

  let currentPageItems = characters?.slice(firsItemPerPage, lastItemPerPage);

  let pages = []; 
  //                                    21       /   5 
  const numOfPages = Math.ceil(characters.length / itemsPerPage) // --> resultado total de paginas === 5

  for(let i = 1 ; i<= numOfPages ; i++){
      pages.push(i)
  }

  function pagination(e, page){
      e.preventDefault();
      setCurrentPage(page)
  }

  const renderPages = pages.map(page => (
      <li key={page} >
          <div>
              <button onClick={e => pagination(e, page)}>
                  {page}
              </button>
          </div>
      </li>
  ))

 

  return (
    <>
      <NavBar />

      <select onChange={(e) => handleFilterOrigin(e)}>
        <option selected value='all' disabled>
          Filter By Origin
        </option>
        <option value='all'>All</option>
        <option value='created'>Created</option>
        <option value='api'>Api</option>
      </select>

      <Cards characters={currentPageItems} />

    <ul style={{display:'flex'}}>{renderPages}</ul>
    </>
  );
};

export default Home;
