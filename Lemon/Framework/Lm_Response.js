/**
 * Created by onelei on 2015/8/6.
 * Answer the client request.
 */
var Client = require('Client.js');

var Lm_Response = function()
{

};

module.exports = Lm_Response;

// Answer request;
Lm_Response.write = function(server,data)
{
    server.write('You said "' + data + '"');
};

Lm_Response.sendAll = function(socket,data)
{
    Client.clients.forEach(function(otherSocket) {
         if (otherSocket !== socket)
         {
            otherSocket.write(data);
         }
    });
};
