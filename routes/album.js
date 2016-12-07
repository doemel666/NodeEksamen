var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/metal';

app.get('/album',function (req,res) {

    MongoClient.connect(url,function (err,db) {
        var review = db.collection('album_review');
        review.find().toArray(function (err,data) {
            //res.send(JSON.stringify(data));
            res.json(data);
        })
    })

})


app.get('/album/:id',function (req,res) {

    MongoClient.connect(url,function (err,db) {
        var review = db.collection('album_review');

        review.findOne({'_id' : ObjectId(req.params.id)},(function (err,data) {
            //res.send(JSON.stringify(data));
            res.json(data);
        }))
    })

});


app.post('/album',function (req,res) {

    MongoClient.connect(url,function (err,db) {
        var review = db.collection('album_review');
        review.insertOne(req.body, function (err,data) {
            //res.send(JSON.stringify(data));
            res.send({'msg':'Review created'})
        })
    })

})

app.delete('/album/:id',function (req,res) {

    MongoClient.connect(url,function (err,db) {
        var review = db.collection('album_review');

        review.deleteOne({'_id' : ObjectId(req.params.id)},function (err,data) {
            res.send({'msg' : 'User Deleted'});
        })
    })
});

app.put('/album/:id',function (req,res) {

    MongoClient.connect(url,function (err,db) {
        var review = db.collection('album_review');

        review.updateOne({'_id' : ObjectId(req.params.id)},{$set: req.body},function (err,data) {
            res.send({'msg' : 'User Updated'});
        })
    })
});
module.exports = app;