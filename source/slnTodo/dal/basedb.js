var mongodb = require('mongodb');

var MongoClient = mongodb.MongoClient;

var url = 'mongodb://localhost:10000/todosdb';

MongoClient.connect(url, function(err, db) {
    if (err) {
        console.log('unable to connect to the mongdoDB server. error:', err)
    } else {
        console.log('Connection established to', url);
        db.close();
    }
});


module.exports = MongoClient;