/**
 * Created by Vijaya Yeruva on 5/27/2017.
 */

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://rohithkumar:Bujj!816@ds263138.mlab.com:39128/rohithkumar';

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbase = db.db("rohithkumar");
    dbase.collection("student").find({}).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});
