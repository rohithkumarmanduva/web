/**
 * Created by Vijaya Yeruva on 5/27/2017.
 */
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://rohithkumar:Bujj!816@ds263138.mlab.com:39128/rohithkumar';

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbase = db.db("rohithkumar");
    dbase.createCollection("student", function(err, res) {
        if (err) throw err;
        console.log("Collection created!");
        db.close();
    });
});
