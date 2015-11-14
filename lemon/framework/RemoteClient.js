/**
 * Created by onelei on 2015/8/7.
 */

var Debug = require('../Framework/Debug.js');

// �ڲ�����˽�е�,���ܸ�����ľ�̬��������;
var RemoteClient = function()
{
    //
};

var clients = [];
var client_num = 0;

module.exports = RemoteClient;

// ��ӿͻ���;
RemoteClient.add = function(socket)
{
    clients.push(socket);
    Debug.log('connect!');
    Debug.log('client_num');
    ++client_num;
    Debug.log(client_num);
};

// ɾ���ͻ���;
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