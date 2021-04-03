import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cardAction } from '../reducers/gameReducer'
import gameService from '../services/gameService'
import './Game.css'

const Details = ({ state }) => (
    <div className="block">
        <div className="inner-block">
            <p>Cards in deck : {state.deckCount}</p>
            <br />
            <p>Card : {state.currentCard}</p>
            <br />
            <p>Defuse Cards left: {state.defuse}</p>
        </div>
    </div>)

const Button = (props) => (
    <div className="block">
        <div className="inner-block">
            <button onClick={props.handleClick}>
                Draw a card
            </button>
        </div></div>
)

const Stats = ({ state }) => {

    return (
        <div className="block">
            <div className="inner-block">
                <p>Wins : {state.wins}</p>
                <br />
                <p>Username : {state.username}</p>
            </div>
        </div>
    )
}

const nextCard = () => {
    const cards = ['CAT', 'DEFUSE', 'EXPLODE', 'SHUFFLE']
    const idx = Number((Math.random() * 3).toFixed(0))
    const chosenOne = cards[idx]
    return [chosenOne, idx]
}

const Game = () => {
    const dispatch = useDispatch()

    const gameState = useSelector(state => state.gameState)

    const handleClick = async () => {
        await dispatch(cardAction(nextCard()))
        gameService.create(gameState)
    }

    return (
        <div className="container">
            <div className="row">
                <Stats state={gameState} />
                <Details state={gameState} />
                <Button handleClick={handleClick} />
            </div>
        </div>
    )
}

export default Game