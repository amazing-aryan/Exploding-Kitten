import React from 'react'
import Instructions from './Instructions'
import Leaderboard from './Leaderboard'
import Game from './Game'
import './Home.css'
import { useDispatch } from 'react-redux'
import { initializeGame } from '../reducers/gameReducer';

const Home = () => {
    const dispatch = useDispatch()

    const addUsername = (event) => {
        event.preventDefault()
        const content = event.target.username.value
        event.target.username.value = ''
        dispatch(initializeGame(content))
    }

    return (
        <div className="container">
            <div className="home-row">
                <form onSubmit={addUsername}>
                    Username: <input name="username" />
                    <button type="submit">Start Game</button>
                </form>
            </div>
            <div className="home-row">
                <Game />
                <Leaderboard />
            </div>
            <Instructions />
        </div>
    )
}

export default Home