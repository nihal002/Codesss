const express = require("express");
require("./db/conn");
const app = express();

const port = process.env.PORT || 3000;

app.get("/",(req,res)=>{
    res.send("Hello")
})

app.listen(port, ()=>{
    console.log(`server is running on${port}`);
})