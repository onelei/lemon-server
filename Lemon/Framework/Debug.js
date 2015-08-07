/**
 * Created by onelei on 2015/8/6.
 * Use to print log in console.
 */
var colors = require('colors/safe');
var LColor = require('../Framework/LColor');

var Debug = function()
{

};

module.exports = Debug;

// print log;
Debug.log = function(msg)
{
    console.log(msg);
};

// print log;
Debug.log = function(msg,color)
{
    switch(color)
    {
        case LColor.yellow:
        {
            console.log(colors.yellow(msg));
        }break;
        case LColor.green:
        {
            console.log(colors.green(msg));
        }break;
        case LColor.rainbow:
        {
            console.log(colors.rainbow(msg));
        }break;
        case LColor.red:
        {
            console.log(colors.red(msg));
        }break;
        case LColor.blue:
        {
            console.log(colors.blue(msg));
        }break;
    }
    console.log(msg);
};