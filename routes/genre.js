var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/metal';

app.get('/genre',function (req,res) {

    MongoClient.connect(url,function (err,db) {
        var genre = db.collection('genre');
        genre.find().toArray(function (err,data) {
            //res.send(JSON.stringify(data));
            res.json(data);
        })
    })

})

app.get('/genre/:id',function (req,res) {

    MongoClient.connect(url,function (err,db) {
        var genre = db.collection('genre');

        genre.findOne({'_id' : ObjectId(req.params.id)},(function (err,data) {
            //res.send(JSON.stringify(data));
            res.json(data);
        }))
    })

});


app.post('/genre',function (req,res) {

    MongoClient.connect(url,function (err,db) {
        var genre = db.collection('genre');
        genre.insertOne(req.body, function (err,data) {
            //res.send(JSON.stringify(data));
            res.send({'msg':'Review created'})
        })
    })

})

module.exports = app;