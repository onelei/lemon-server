/**
 * Created by onelei on 2015/8/6.
 * Client test.
 */

var net = require('net');
var Debug = require('../framework/lmDebug.js');
var LColor = require('../framework/lmColor.js');
var RemoteClient = require('../framework/lmRemoteClient.js');
var Response = require('../framework/lmResponse.js');
var couchbase = require('../framework/lmCouchbase.js');
var transform = require('../framework/lmTransform');

module.exports = Lm_MainServer;

function Lm_MainServer()
{
    // load config;
    var config = require('./config/config.json');
    this.HOST = config.host;
    this.PORT = config.port;

    // test json switch;
    /*var json = {
        'host': '127.0.0.1',
        'port': '8001'
    };
    var string = transform.stringify(json);
    json = transform.parse(string);
    transform.stringify(json);*/

}

// create server;
Lm_MainServer.prototype.Start = function()
{
    // Create TCP ;
    net.createServer(function(socket) {

        // record client;
        RemoteClient.add(socket);

        Debug.log('one client connect !');
        Debug.log('CONNECTED: ' +
            socket.remoteAddress + ':' + socket.remotePort);

        // data;
        socket.on('data', function(data) {
            Debug.log('DATA ' + socket.remoteAddress+':'+socket.remotePort + ' said: ' + data);
            // 回发该数据，客户端将收到来自服务端的数据
            //socket.write('You said "' + data + '"');
            Response.send(socket,data);

            // test couchbase;
           /* var bucketname = "test";
            var douchment_name = "test02";
            var value = "tmp2";
            couchbase.insert(bucketname,douchment_name,value);
            */


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


    }).listen(this.PORT, this.HOST);

    Debug.log('server listening on ' + this.HOST +':'+ this.PORT,LColor.green);
}




