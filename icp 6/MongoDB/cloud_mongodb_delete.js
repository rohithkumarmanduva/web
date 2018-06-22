/**
 * Created by Vijaya Yeruva on 5/27/2017.
 */

var http = require('http');
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://rohithkumar:Bujj!816@ds263138.mlab.com:39128/rohithkumar';

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbase = db.db("rohithkumar");
    var myquery = { address: 'ongole' };
    dbase.collection("student").deleteOne(myquery, function(err, obj) {
        if (err) throw err;
        console.log(obj.result.n + " document(s) deleted");
        db.close();
    });
});