let express = require('express');
let mongodb = require('mongodb')
let client = mongodb.MongoClient;

let BandData = express.Router().get("/",(req,res)=>{
    client.connect("mongodb://localhost:27017/employee",(err,db)=>{
        if(err){
            throw err
        }else{
           db.collection("employeeDetails").find({ "Band": { $exists: true } }).toArray((err,result)=>{
            if(err){
                throw err
            }else{
                res.send(result)
            }
           })
        }
    })

})

module.exports = BandData;