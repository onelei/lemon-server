/**
 * Created by onelei on 2015/8/6.
 * Use to print log in console.
 */

var Debug = function()
{

};

module.exports = Debug;

// print log;
Debug.log = function(msg)
{
    console.log(msg);
};
