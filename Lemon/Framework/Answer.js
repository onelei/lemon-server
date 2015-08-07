/**
 * Created by onelei on 2015/8/6.
 * Answer the client request.
 */
var Client = require('Client.js');

var Answer = function()
{

};

module.exports = Answer;

// Answer request;
Answer.write = function(server,data)
{
    server.write('You said "' + data + '"');
};

Answer.sendAll = function(socket,data)
{
    Client.clients.forEach(function(otherSocket) {
         if (otherSocket !== socket)
         {
            otherSocket.write(data);
         }
    });
};
