import leaderboardService from "../services/leaderboardService"

const leaderboardReducer = (state=[], action) => {
    switch(action.type) {
        case 'initializeLeaderBoardState':
            return action.data
        default:
            return state
    }
}

export const initializeLeaderBoard = () => {
    return async dispatch => {
        const leaderboard = await leaderboardService.getLeaderboard()
        dispatch({
            type: 'initializeLeaderBoardState',
            data: leaderboard
        })
    } 
} 

export default leaderboardReducer
