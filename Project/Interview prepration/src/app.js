const exp = require('constants');
const express = require('express');
const path = require('path');
require('./db/conn');
const app = express();

const PORT = process.env.PORT || 3000;

//settting the static path
// const staticpath = path.join(__dirname,"../public");

// console.log(path.join(__dirname))

//middleware
// app.use('./css',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/css")));
// app.use('./js',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/js")));
// app.use('./jq',express.static(path.join(__dirname,"../node_modules/jquery/dist")));
// app.use(express.static(staticpath));
// app.set("view engine","hbs");

//routing
//app.get(path, callback)
// app.get("/",(req,res)=>{
    // res.render("index");
    // console.log(path.join(__dirname+'/public/index.html'));
    // res.sendFile(path.join(__dirname+"../public/index.html"));
// })



app.get('./',(req,res,next)=>{
    // res.sendFile(path.join(__dirname+"inde.html"));
    res.render('inde'); 
})

app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`);
})