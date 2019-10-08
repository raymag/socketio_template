const express = require('express')
const app = express()
const http = require('http').createServer(app)
const io = require('socket.io')(http)

app.use('/static', express.static(__dirname+'/assets/'))

app.get('/', (req, res) => {
    res.sendFile(__dirname+'/views/index.html')
})

io.on('connection', (socket) => {
    io.emit('start', {message: '. -.-. .... .. .-.. . -.--     .. ...     -... . .- ..- - .. ..-. ..- .-..'})
})

const PORT = process.env.PORT || 3000
http.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})