const express = require('express')
const cors = require('cors')

const redis = require("redis");
const redisPort = 6379
const client = redis.createClient(redisPort);

client.on("error", (err) => {
    console.log(err);
});

const app = express()

app.use(express.json())
app.use(cors())

app.get('/api/leaderboard', (req, res) => {
    client.zrevrange("score", 0, 9, 'WITHSCORES', (err, result) => {
        let leaderboard = []
        for (const [idx, value] of result.entries()) {
            if (idx % 2 === 0) {
                let tmp = {}
                tmp["name"] = result[idx]
                tmp["score"] = result[idx+1]
                leaderboard.push(tmp)
            }
        }
        return res.status(200).json(leaderboard)
    })
})

app.get('/api/game/:id', (req, res) => {
    const username = req.params.id
    client.hget("game", username, (err, result) => {
        if (result) return res.json(JSON.parse(result))
        else return res.status(204).end()
    })
})

app.post('/api/game', (req, res) => {
    const body = req.body
    const username = body.username
    const score = body.wins
    client.hset("game", username, JSON.stringify(body), (err, result) => {
        client.zadd("score", score, username, (err, result1) => {
            return res.json(200)
        })
    })
})

const PORT = process.env.port || 8081
app.listen(PORT, () => {
    console.log('Server is running...')
})
