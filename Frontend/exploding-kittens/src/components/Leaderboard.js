import React from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import './Leaderboard.css'
import { initializeLeaderBoard } from '../reducers/leaderboardReducer';

const Leaderboard = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        const interval = setInterval(() => {
            dispatch(initializeLeaderBoard())
        }, 1500)
        return () => clearInterval(interval)
    }, [dispatch])

    const leaderboard = useSelector(state => state.leaderboard)

    const tableBody = leaderboard.map((player, index) => (
        <tr key={index}>
            <td>{index + 1}</td>
            <td>{player.name}</td>
            <td>{player.score}</td>
        </tr>
    ));

    return (
        <div className="leaderboard">
            <table>
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Name</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    {tableBody}
                </tbody>
            </table>
        </div>
    )
}

export default Leaderboard