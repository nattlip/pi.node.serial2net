
'use strict';



var util = require("util")



const buffer = require('buffer');
var serialport = require('serialport');
var SerialPort = serialport.SerialPort;

// list serial ports:
serialport.list(function (err, ports) {
    ports.forEach(function (port) {
        console.log(port.comName);
    });
});



var port = new SerialPort('/dev/ttyUSB0', {
    encoding: 'hex', baudRate: 38400, dataBits: 8, stopBits: 1, parity: 'none',
});




port.on('open', function () {

    console.log('port opening');

});




//port.open(function (err) {
//    if (err) {
//        return console.log('Error opening port: ', err.message);
//    }

//    // write errors will be emitted on the port since there is no callback to write 
//    // port.write('main screen turn on');
//});





port.on('data', function (data) {
    console.log('Data: ' + data);

    var myString = JSON.stringify(data)
    console.log('second Data: ' + myString);

    //port.pipe(socket)
    if (socket)
    { socket.write(data) }

    console.log('string hex ', data.toString('hex'));
});

port.on('error', err => {

    console.log('error port', err)

})




var socket = false

//https://gist.github.com/creationix/707146

const net = require('net');
const server = net.createServer((c) => {  // c is socket connecting
    // 'connection' listener

    socket = c
    console.log('client connected');
    c.on('end', () => {
        socket = false
        console.log('client disconnected');
        c.destroy()
    });


    c.on('data', data => {

        console.log('data from client', data)

        port.write(data)

    })

    c.on('error', err => {

        console.log(' client error ', err)
        socket = false
        c.end()
        c.destroy()
    })






});
server.on('error', (err) => {
    socket = false
    console.log('error server', err)
});
server.listen(10001, () => {
    console.log('server bound');
});


