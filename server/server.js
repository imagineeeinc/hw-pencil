const express = require('express')
const app = express()
const port = 3000

const { BrainlyAPI, Server } = require('brainly-api');

Server.US

app.get('/', (req, res) => {
    BrainlyAPI.startWorker({ experimental: true, server: Server.ID }, async brainly => {
        // find question
        console.log(await brainly.findQuestion(req.query.q));
    });
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})