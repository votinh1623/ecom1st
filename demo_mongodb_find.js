var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://vnthienloi03:9jFnP2DSLJx9ggy8@cluster0.e7js0.mongodb.net/ecommerce_db?retryWrites=true&w=majority&appName=Cluster0";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("Cluster0");
  dbo.collection("products").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});