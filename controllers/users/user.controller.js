let config=require('../../config/config');
require('dotenv').config();
var uuid = require('uuid');
const bcrypt = require("bcryptjs");
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const tokenList = {}

const addUser=async (req,res)=>
{
    let id=uuid.v4();
    var user=req.body;
    console.log(user);
    try
    {
        bcrypt.genSalt(10,((err, salt) =>{
            if (err) {
              throw err
            } else {
              bcrypt.hash(user.password, salt, ((err, hash)=> {
                if (err) {
                  throw err
                } else {
                    let token = jwt.sign(user,`${process.env.VERIFYTOKEN}`, { expiresIn: 3600})
                    var sqlquery=`Insert into Users(id,name,email,password,verifyToken) values (?,?,?,?,?)`;
                    config.query(sqlquery,[id,user.name,user.email,hash,token],(err,data)=>
                    {
                        if(data)
                        {
                            res.status(200).json(
                                {
                                    data:data,
                                    success:true,
                                    message:"Account Created Successfully"
                                })
                        }
                        else
                       {
                        res.status(400).json(
                            {
                                success:false,
                                message:err.sqlMessage,
                            }
                        )  
                      }
                    }
                    )
                }
              }))
            }
          }))
    }
    catch(err)
    {
      
    }
}
const loginUser=async(req,res)=>
{
    var user=req.body;
    try
    {
      
    }
    catch(err)
    {

    }
}
const getUser=async(req,res)=>
{
    try
    {
        var sqlquery=`Select * from Users`;
        config.query(sqlquery,(err,data)=>
        {
            if(data)
            {
                res.status(200).json(
                    {
                        data:data,
                        success:true,
                    }
                )
            }
          else
          {
            res.status(400).json(
                {
                    success:false,
                    message:err.sqlMessage,
                }
            )  
          }
        })
    }
    catch(err)
    {

    }
}
module.exports=
{
    addUser:addUser,
    // getUsers:getUsers,
    getUser:getUser,
    loginUser:loginUser,
}