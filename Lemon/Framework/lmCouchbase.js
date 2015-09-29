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

// insert ;
Lm_Couchbase.insert = function(bucket,document_name,value)
{
    var myBucket = myCluster.openBucket(bucket);
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

// get;
Lm_Couchbase.get = function(bucket,document_name)
{
    var myBucket = myCluster.openBucket(bucket);
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

// replace;
Lm_Couchbase.replace = function(bucket,document_name,value)
{
    var myBucket = myCluster.openBucket(bucket);
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

// remove;
Lm_Couchbase.remove = function(bucket,document_name)
{
    var myBucket = myCluster.openBucket(bucket);
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

// getMulti;
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
