const mongoose = require("mongoose")

mongoose.connect("mongodb://27017/Test",
{
    // useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("connection successful");
}).catch((error)=>{
    console.log(error);
})