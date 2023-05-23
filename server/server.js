var express=require('express');
var app=express();
var cor=require('cors');
var mysql=require('mysql');
var session=require('express-session');
var cookie=require('cookie-parser');

app.use(cor());
app.use(express.json());
app.use(express.urlencoded({extended:true}))

var db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    port:3306,
    database:"abhees_db"
})

db.connect((err)=>{
    if(err) throw err;
    console.log("connected")
})

app.post("/create",(req,res)=>{
    var name=req.body.uname;
    var phone=req.body.phone;
    var email=req.body.email;
    var password=req.body.passw;
    var sql="insert into reg_tb values(?,?,?,?,?)";
    db.query(sql,[0,name,email,password,phone],(err,result)=>{
        if(err) throw err;
        res.send({"msg":"Registered Succesfully"})
    })
})

app.post("/log",(req,res)=>{
    var name=req.body.uname;
    var email=req.body.email;
    var password=req.body.passw;
    var sql="select * from reg_tb where email_id=? and password=?";
    db.query(sql,[email,password],(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            res.send({"msg":true});
        }else{
            res.send({'msg':false})
        }
            })
        })

        app.post("/adm",(req,res)=>{
            var usname=req.body.usname;
            var password=req.body.passw;
            var sql="select * from admin_tb where username=? and password=?";
            db.query(sql,[usname,password],(err,result)=>{
                if(err) throw err;
                if(result.length>0){
                    res.send({"msg":true});
                }else{
                    res.send({'msg':false})
                }
                    })
                })

app.listen(9002,()=>{
    console.log("server is running at http://localhost:9002/")
})

