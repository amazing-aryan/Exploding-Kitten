import gameService from "../services/gameService"

const initialState =
{
    username: '',
    wins: 0,
    deckCount: 5,
    currentCard: 'Draw a card',
    defuse: 0,
}

const names = {
    0: "Cat Card",
    1: "Defuse card",
    2: "Exploding kitten card",
    3: "Shuffle card",
    4: "Start",
    5: "You Lost",
    6: "You Won"
}

const gameReducer = (state = [], action) => {
    const cstate = {...state}
    switch (action.type) {
        case 'initGameState':
            return action.data
        case 'CAT':
            cstate.deckCount--
            cstate.currentCard = action.data
            break
        case 'DEFUSE':
            cstate.deckCount--
            cstate.defuse++
            cstate.currentCard = action.data
            break
        case 'EXPLODE':
            if (cstate.defuse >= 1) {
                cstate.defuse--
                cstate.deckCount--
            } else {
                cstate.deckCount = 5
                cstate.defuse = 0
                cstate.currentCard = action.data
                return cstate
            }
            cstate.currentCard = action.data
            break
        case 'SHUFFLE':
            cstate.deckCount = 5
            cstate.defuse = 0
            cstate.currentCard = action.data
            break
        default:
            return state;
    }
    if (cstate.deckCount === 0) {
        cstate.deckCount = 5
        cstate.defuse = 0
        cstate.wins++
        cstate.currentCard = names[6]
    }
    return cstate
}

export const cardAction = ([content, idx]) => {
    return {
        type: content,
        data: names[idx],
    }
}

export const initializeGame = (content) => {
    return async dispatch => {
        if(!content) content = 'unknown'
        let gameState = await gameService.getGame(content)
        if(gameState === '') {
            let newObj = initialState
            initialState.username = content
            await gameService.create(newObj)
            gameState = newObj
        }
        dispatch({
            type: 'initGameState',
            data: gameState
        })
    }
}

export default gameReducer