/**
 * Created by onelei on 2015/8/7.
 */

var Debug = require('../Framework/Debug.js');

// 内部变量私有的,不能给下面的静态函数调用;
var RemoteClient = function()
{

};

var clients = [];
var client_num = 0;

module.exports = RemoteClient;

// 添加客户端;
RemoteClient.add = function(socket)
{
    clients.push(socket);
    Debug.log('connect!');
    Debug.log('client_num');
    ++client_num;
    Debug.log(client_num);
};

// 删除客户端;
RemoteClient.remove = function(socket)
{
    var index = clients.indexOf(socket);
    clients.splice(index, 1);

    --client_num;
    Debug.log('disconnect!');
    Debug.log('client_num');
    Debug.log(client_num);
    Debug.log('clients.length');
    Debug.log(clients.length);
}