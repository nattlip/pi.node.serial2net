
'use strict';



const util = require("util")
const netport =  10001


const buffer = require('buffer');
var serialport = require('serialport');
-//var SerialPort = serialport.S

// list serial ports:
serialport.list(function (err, ports) {
    ports.forEach(function (port) {
        util.log(port.comName);
    });
});



var port = new serialport('/dev/ttyUSB0', {
     baudRate: 57600, dataBits: 8, stopBits: 1, parity: 'none',
});




port.on('open', function () {

    util.log('port opening');

});




//port.open(function (err) {
//    if (err) {
//        return util.log('Error opening port: ', err.message);
//    }

//    // write errors will be emitted on the port since there is no callback to write 
//    // port.write('main screen turn on');
//});





port.on('data', function (data) {
    util.log('Data from Serial: ' + data);

    var myString = JSON.stringify(data)
    util.log('second Data: ' + myString);

    //port.pipe(socket)
    if (socket)
    { socket.write(data) }

    util.log('string hex ', data.toString('hex'));
});

port.on('error', err => {

    util.log('error port', err)

})




var socket = false

//https://gist.github.com/creationix/707146

const net = require('net');
const server = net.createServer((c) => {  // c is socket connecting
    // 'connection' listener

    socket = c
    util.log('client connected');
    c.on('end', () => {
        socket = false
        util.log('client disconnected');
        c.destroy()
    });


    c.on('data', data => {

        //data is buffer of hex numbers reperesenting ascii chararcters
        util.log('data from net socket client', data)
        util.log('data from net socket client  tostring', data.toString())
       // https://stackoverflow.com/questions/94037/convert-character-to-ascii-code-in-javascript

        port.write(data)

    })

    c.on('error', err => {

        util.log(' client error ', err)
        socket = false
        c.end()
        c.destroy()
    })






});
server.on('error', (err) => {
    socket = false
    util.log('error server', err)
});
server.listen(netport, () => {
    util.log('server bound');
});


