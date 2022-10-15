import mongodb from 'mongodb'

var client = mongodb.MongoClient;
var url = "mongodb://localhost:27017/";

const client.connect(url, function (err, client) {
    
    var db = client.db("bt");
    var collection = db.collection("user");
    
    var query = {};
    
    var cursor = collection.find(query);
    
    cursor.forEach(
        function(doc) {
            console.log(doc);
        }, 
        function(err) {
            client.close();
        }
    );

    
});