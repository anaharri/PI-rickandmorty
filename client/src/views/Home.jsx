import React from 'react'
import { useSelector } from 'react-redux'
import Cards from '../components/Cards'
import NavBar from '../components/NavBar/index';

const Home = () => {
    const characters = useSelector(state => state.characters)
    return (
        <>
            <NavBar/>
            <Cards characters={characters} />
            </>
            )
}

export default Home
