var express = require("express");
var app = express();
var http = require('http').Server(app);
var path = require("path");
var io = require('socket.io')(http);

app.use(express.static(__dirname + '/src/dist'));

app.get('/*', function (req, res) {
    res.sendFile(path.resolve(__dirname + '/index.html'));
});

io.on('connection', function (socket) {
    console.log('a user connected');

    socket.on("update", function(data){
        console.log(data);
    })

    socket.on('disconnect', function () {
        console.log('user disconnected');
    });
});

http.listen(3000, function () {
    console.log('listening on *:3000');
});
