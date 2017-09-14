var express=require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var PORT = process.env.PORT ||3000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))


app.get('/',function(req,res){
    res.send('Hello world')
});


app.listen(PORT,function(){
    console.log('running on port 3000')
})