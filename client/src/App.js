import './App.css';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCharacters, getEpisodes } from './redux/actions';
import { Route, Switch } from 'react-router';
import Landing from './views/Landing';
import Home from './views/Home';
import CreateCharacter from './views/CreateCharacter';

function App() {
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getCharacters());
    dispatch(getEpisodes());
  }, [dispatch]);

  return (
    <>
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/home' component={Home} />
    
        <Route exact path='/createCharacter' component={CreateCharacter} />
      </Switch>
    </>
  );
}

export default App;
