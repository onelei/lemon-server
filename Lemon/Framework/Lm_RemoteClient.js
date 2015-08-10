/**
 * Created by onelei on 2015/8/7.
 */

var Debug = require('../Framework/Lm_Debug.js');

// 内部变量私有的,不能给下面的静态函数调用;
var Lm_RemoteClient = function()
{

};

var clients = [];
var client_num = 0;

module.exports = Lm_RemoteClient;

// 添加客户端;
Lm_RemoteClient.add = function(socket)
{
    clients.push(socket);
    ++client_num;
    Debug.log('connect!');
    Debug.log('client_num: '+client_num);
};

// 删除客户端;
Lm_RemoteClient.remove = function(socket)
{
    var index = clients.indexOf(socket);
    clients.splice(index, 1);
    --client_num;
    Debug.log('disconnect!');
    Debug.log('client_num: '+client_num);
    Debug.log('clients.length: '+clients.length);
}