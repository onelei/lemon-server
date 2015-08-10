/**
 * Created by onelei on 2015/8/6.
 * Client test.
 */

var net = require('net');
var Debug = require('../Framework/Lm_Debug.js');
var LColor = require('../Framework/Lm_Color.js');
var RemoteClient = require('../Framework/Lm_RemoteClient.js');

var HOST = '127.0.0.1';
var PORT = 8080;

module.exports = Lm_MainServer;

function Lm_MainServer(bucket)
{

}

Lm_MainServer.prototype.Start = function()
{
    // Create TCP ;
    net.createServer(function(socket) {

        // 我们获得一个连接 - 该连接自动关联一个socket对象
        RemoteClient.add(socket);

        Debug.log('one client connect !');
        Debug.log('CONNECTED: ' +
            socket.remoteAddress + ':' + socket.remotePort);

        // data;
        socket.on('data', function(data) {
            Debug.log('DATA ' + socket.remoteAddress + ': ' + data);
            // 回发该数据，客户端将收到来自服务端的数据
            socket.write('You said "' + data + '"');
        });

        // close;
        socket.on('close', function() {
            Debug.log('CLOSED: ' +
                socket.remoteAddress + ' ' + socket.remotePort);
            RemoteClient.remove(socket);
        });

        // error;
        socket.on('error', function(err) {
            Debug.log('Error occurred:', err.message);
            RemoteClient.remove(socket);
        });


    }).listen(PORT, HOST);

    Debug.log('Server listening on ' + HOST +':'+ PORT,LColor.green);
}




