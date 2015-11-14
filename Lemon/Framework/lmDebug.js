/**
 * Created by onelei on 2015/8/6.
 * Use to print log in console.
 */
var colors = require('colors/safe');
var LColor = require('./lmColor');

var Lm_Debug = function()
{

};

module.exports = Lm_Debug;

// print log;
Lm_Debug.log = function(msg)
{
    console.log(msg);
};

// print log;
Lm_Debug.log = function(msg,color)
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
        default:
        {
            console.log(msg);
        }break;
    }
};