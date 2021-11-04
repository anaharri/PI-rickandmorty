import React from 'react'
import { useSelector } from 'react-redux'
import Cards from '../components/Cards'

const Home = () => {
    const characters = useSelector(state => state.characters)
    return (
        <div>
            SOY HOME
            <Cards characters={characters} />
        </div>
    )
}

export default Home
