var express = require('express');
const mongoose = require('mongoose');
var router = express.Router()

const courseData = require('../DB/courseSchema.js')
const userData = require('../DB/userSchema.js')




router.get('/',(req,res)=>{
    res.render('home.ejs')
})

//dashboard
router.get('/dashboard',(req,res)=>{
    res.render('dashboard.ejs')
})

//login-register
router.get('/register',(req,res)=>{
    res.render('register.ejs');
})
router.get('/login',(req,res)=>{
    res.render('login.ejs');
})

//register
router.post('/register',(req,res)=>{
    var x = req.body;
    if(!x.name || !x.mobile || !x.username || !x.password)res.send({"msg":"Fill details"});
    else{
        var data = new userData({
            name : req.body.name,
            mobile : req.body.mobile,
            username : req.body.username,
            password : req.body.password
        });
        data.save((err,data)=>{
            if(err){
                console.log('ERROR : '+err.message);
                res.send({"msg":"Invalid details"})
            }
            else{
                console.log(data)
                res.send({"msg":"success"})
            }
        })
    }
})

//login
router.post('/login',(req,res)=>{

    var uname = req.body.username;
    var upass = req.body.password;

    if(!uname || !upass)res.send({"msg":"Fill details"})
    else{
        userData.findOne({username : uname},(err,result)=>{
            if(result){
                if(result.password == upass){
                    console.log(result)
                    res.send({
                        "msg" : "success",
                        "username" : uname
                    })
                }
                else{
                    res.send({"msg":"Invalid details"})
                }
            }
            else{
                console.log(err)
                res.send({"msg":"Login Invalid"})
            }
        })
    }
})





//courses
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
router.put('/api/courses/:id/:article',(req,res)=>{
    var ind1 = req.params.id;
    var ind2 = req.params.article;
    console.log(ind1)
    console.log(ind2)

    courseData.findByIdAndUpdate(ind1,{ articles : ind2 },(err,obj)=>{
        if(err)console.log(err)
        else{
            console.log('Record Updated !!')
            console.log(obj)
        }
    });

})


























module.exports = router