var express = require('express');
const mongoose = require('mongoose');
var router = express.Router()
const courseData = require('../DB/courseSchema.js')

router.get('/courses',(req,res)=>{
    res.render('courses.ejs');
})


//create
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


//retrieve
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


//delete
router.delete('/api/courses/:id',(req,res)=>{
    var ind = req.params.id;
    console.log(ind);

    courseData.deleteOne({ _id : ind },(err,obj)=>{
        if(err)console.log(err)
        else{
            console.log(obj)
            console.log("Document deleted !!")
        }
    })
})


//update
router.put('/api/courses/:id',(req,res)=>{
    var ind = req.params.id;
    console.log(ind)

    // res.redirect('/courses')
})











module.exports = router