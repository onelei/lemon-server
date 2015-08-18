/**
 * Created by onelei on 2015/8/18.
 */

var couchbase = require('couchbase');
var myCluster = new couchbase.Cluster();
var myBucket = myCluster.openBucket('default');

var Lm_Couchbase = function()
{

};

module.exports = Lm_Couchbase;

// 增加;
Lm_Couchbase.insert = function(document_name,value)
{
    var myBucket = myCluster.openBucket();
    myBucket.insert(document_name, {some:value}, function(err, res)
    {
        if (err)
        {
            console.log('operation failed', err);
            return;
        }
        console.log('success!', res);
    });
}

// 查询;
Lm_Couchbase.get = function(document_name)
{
    var myBucket = myCluster.openBucket();
    myBucket.get(document_name, function(err, res)
    {
        if (err)
        {
            console.log('operation failed', err);
            return;
        }
        console.log('success!', res);
    });
}

// 更新;
Lm_Couchbase.replace = function(document_name,value)
{
    var myBucket = myCluster.openBucket();
    myBucket.replace(document_name, {some: value}, function(err, res)
    {
        if (err)
        {
            console.log('operation failed', err);
            return;
        }
        console.log('success!', res);
    });
}

// 删除;
Lm_Couchbase.remove = function(document_name)
{
    var myBucket = myCluster.openBucket();
    myBucket.remove(document_name, function(err, res)
    {
        if (err)
        {
            console.log('operation failed', err);
            return;
        }
        console.log('success!', res);
    });
}

// 获取多张表;
Lm_Couchbase.getMulti = function(document_name_1,document_name_2)
{
    var myBucket = myCluster.openBucket();
    myBucket.getMulti(
        [document_name_1, document_name_2],
        function(err, res)
        {
            if (err)
            {
                console.log('one or more operations failed', err);
                return;
            }
            console.log('success!', res);
        });
}
