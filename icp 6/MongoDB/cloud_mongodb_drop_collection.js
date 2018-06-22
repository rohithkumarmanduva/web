/**
 * Created by Vijaya Yeruva on 5/27/2017.
 */

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://rohithkumar:Bujj!816@ds263138.mlab.com:39128/rohithkumar';

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbase = db.db("rohithkumar");
    dbase.dropCollection("student", function(err, delOK) {
        if (err) throw err;
        if (delOK) console.log("Collection deleted");
        db.close();
    });
});