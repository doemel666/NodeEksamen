var express = require('express');
var app = express();
var BodyParser = require('body-parser');

app.use(BodyParser.urlencoded({
    extended: true
}));
app.use(BodyParser.json());

var album_reviews = require('./routes/album');
app.use(album_reviews);

var concert_reviews = require('./routes/concert');
app.use(concert_reviews);

var genre = require('./routes/genre')
app.use(genre);

app.listen(3000);