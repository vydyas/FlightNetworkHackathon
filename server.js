const express=require('express');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const app=express();
const router=express.Router();
const path=require('path');
const port=process.env.port || 9999;

app.use(express.static(path.join(__dirname,'public')));
app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use(bodyParser.json());

//listen to server 3000
app.listen(port,()=>{
    console.log(app.get('port'));
});