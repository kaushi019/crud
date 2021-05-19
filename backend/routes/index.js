var express = require('express');
const mongoose = require('mongoose');
var router = express.Router()
const courseData = require('../DB/courseSchema.js')

router.get('/courses',(req,res)=>{
    res.render('courses.ejs');
})

router.post('/courses',(req,res)=>{
    var a = req.body.choose;

    if(a == 0) console.log("Please select an option")
    else{
        var data = new courseData({
            course : a,
            articles : "",
            isDeleted : false
        });
        data.save((err,data)=>{
            if(err)console.log('ERROR : '+err.message);
            else console.log(data)
        })
    }
    res.redirect('/courses')
});

router.get('/api/courses',(req,res)=>{

    courseData.find({},(err,obj)=>{
        if(err)console.log(err)
        else{
            var Data = {
                status : "ok",
                objects : obj
            }
            // console.log(Data)
            res.json(Data)
        }
    });
})















module.exports = router