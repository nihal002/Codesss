const express = require('express');
const router = express.Router();


const bookInterview = require('../models/bookInterview')

router.post('/bookinterview',async (req,res) =>{
    const newInterview = new bookInterview(req.body);

    try{
        const interview = await newInterview.save();
        if(!interview) throw Error('something went wrong while booking interview');

        res.status(200).json(interview);
    }
    catch (err) {
        res.status(400).json({ msg: err })
    }
})



module.exports = router;