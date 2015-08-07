/**
 * Created by onelei on 2015/8/7.
 */

var TableCtr = module.exports;

// ¶Á±í;
TableCtr.load = function (key, val) {
    val = require(val);
    this.set(key, val);
};

