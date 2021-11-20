const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const {MONGO_URI} = require('./config/config')

const userRoutes = require('./routes/users')

const app = express();
app.use(express.json());

const port = 3000;

mongoose.connect(MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{
    console.log("Database connected")
})
.catch(err=>{
    console.log(err);
})


app.use(cors());
app.use(bodyParser.json());

app.get('/', (req,res)=>{
    res.send("Hello nihal")
})

app.use('/users',userRoutes);



app.listen(port, ()=>{
    console.log('Server started on port '+port);
})
