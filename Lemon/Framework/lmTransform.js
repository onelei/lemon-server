/**
 * Created by onelei on 15-8-18.
 *
 * this is a message transform script;
 */

var Lm_Transform= function()
{

};

module.exports = Lm_Transform;

/**
* parse json ;
*/
Lm_Transform.parse = function(string)
{
    console.log('parse');
    var json = JSON.parse(string);
    console.log(json);
    return json;
};

/**
 * stringfy json
 * return string;
 */
Lm_Transform.stringify = function(json)
{
    console.log('stringify');
    var string = JSON.stringify(json);
    console.log(string);
    return string;
};
