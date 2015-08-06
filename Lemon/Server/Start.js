/**
 * Created by onelei on 2015/8/6.
 * Server test.
 */

var net = require('net');
var Debug = require('../Framework/Debug.js');

var HOST = '127.0.0.1';
var PORT = 6969;

//// 创建一个TCP服务器实例，调用listen函数开始监听指定端口
//// 传入net.createServer()的回调函数将作为”connection“事件的处理函数
//// 在每一个“connection”事件中，该回调函数接收到的socket对象是唯一的
//net.createServer(function(server) {
//
//
//    // 我们获得一个连接 - 该连接自动关联一个socket对象
//    console.log('CONNECTED: ' +
//        server.remoteAddress + ':' + server.remotePort);
//
//    // 为这个socket实例添加一个"data"事件处理函数
//    server.on('data', function(data) {
//        console.log('DATA ' + server.remoteAddress + ': ' + data);
//        // 回发该数据，客户端将收到来自服务端的数据
//        server.write('You said "' + data + '"');
//    });
//
//    // 为这个socket实例添加一个"close"事件处理函数
//    server.on('close', function(data) {
//        console.log('CLOSED: ' +
//            server.remoteAddress + ' ' + server.remotePort);
//    });
//
//}).listen(PORT, HOST);
//
//console.log('Server listening on ' + HOST +':'+ PORT);


//服务端也可以用稍不同的方式接受TCP连接，即显式处理"connection"事件:
var server = net.createServer();

// listen;
server.listen(PORT, HOST);
Debug.log('Server listening on '
    + HOST
    + ':' + PORT);

// connect;
server.on('connection', function(socket) {

    Debug.log('CONNECTED: ' +
         socket.remoteAddress +':'+ socket.remotePort);

    // data;
    socket.on('data', function(data) {
        Debug.log('DATA ' + socket.remoteAddress + ': ' +socket.remotePort+"=>"+ data);
        // 回发该数据，客户端将收到来自服务端的数据
        socket.write('You said "' + data + '"');
    });

    // close;
    socket.on('close', function() {
        Debug.log('CLOSED: ' +
            socket.remoteAddress + ':' + socket.remotePort);
    });

});
