/**
 * Created by onelei on 2015/8/6.
 * Client test.
 */

var net = require('net');
var Debug = require('../../framework/lmDebug.js');
module.exports = Client;

function Client()
{
    // load config;
    var config = require('../../server/config/config.json');
    this.HOST = config.host;
    this.PORT = config.port;
}

Client.prototype.Start = function()
{
    var client = new net.Socket();
    client.connect(this.PORT, this.HOST, function() {

        console.log('CONNECTED TO: ' + this.HOST + ':' + this.PORT);
        // send data to server;
        client.write('I am 卧龙!');

    });

    // 为客户端添加“data”事件处理函数
    // data是服务器发回的数据
    client.on('data', function(data) {

        Debug.log('DATA: ' + data);
        // 完全关闭连接
        client.destroy();

    });

    // 为客户端添加“close”事件处理函数
    client.on('close', function() {
        Debug.log('Connection closed');
    });
}
