const socket = io()

socket.on('start', (data) => {
    console.log(`The received message is: ${data.message}`)
})