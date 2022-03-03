let config=require('../../config/config');
require('dotenv').config();
var uuid = require('uuid');
const bcrypt = require("bcryptjs");
const {generateJwt}=require('../../helpers/generateJwt.js');
const {sendEmail} =require('../../helpers/mailer');
var token;

const addUser=async (req,res)=>
{
    var id=uuid.v4();
    id = id.replace(/-/g, "");
    var {name,email,password}=req.body;
    try
    {
        sqlquery=`select email from Users where email=?`;
        config.query(sqlquery,email,(err,data)=>
        {
            if(data[0]==null)
            {
            bcrypt.genSalt(10,((err, salt) =>{
                if (err) {
                  throw err
                } else {
                  bcrypt.hash(password, salt, ((err, hash)=> {
                    if (err) {
                      throw err
                    } else {
                        token=generateJwt(email,process.env.VERIFYTOKEN);
                        const sendCode = sendEmail(name,email,id,token);
                        if(sendCode)
                        {
                        var sqlquery=`Insert into Users(id,name,email,password) values (?,?,?,?)`;
                        config.query(sqlquery,[id,name,email,hash],(err,data)=>
                        {
                            if(data)
                            {
                                res.status(200).json(
                                    {
                                        data:data,
                                        success:true,
                                        message:"Account Created Successfully!Please click the activation link we sent to your email."
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
                    else
                    {
                        res.status(400).json(
                            {
                                success:false,
                                message:"Could not send verification link"
                            }
                        )
                    }
                    }
                  }))
                }
              }))
            }
          else
          {
              res.status(404).json(
                  {
                    success:false,
                    message:"User with same email is already registered!"
                  }
              )
          }
        })   
    }
    catch(err)
    {
        console.log(err);
    }
}
const activateUser=async(req,res)=>
{
const {id,code}=req.params;
try
{
    sqlquery=`select active from Users where id=?`;
    config.query(sqlquery,id,(err,data)=>
    {
        if(data[0].active)
        {
            res.status(300).json(
                {
                    success:true,
                    message:"Account already activated",
                }
            )
        }
    else{
    if(!code || code!==token || !token)
    {
        res.status(200).json(
            {
                success:false,
                message:"Token do not match or has been expired!"
            }
        )
    }
    else if(code===token)
    {
        sqlquery=`update Users set active=true where id=?`;
        config.query(sqlquery,id,(err)=>
        {
            if(data)
            {
                res.writeHead(200, {
                    Location: 'https://medpharmacy-backend-mysql.herokuapp.com/api/v1/user/login',
                    success:true,
                    message:"Account activated successfully!"

                });
                res.end();
            //     res.status(200).json(
            //     {
            //         success:true,
            //         message:"Account activated successfully!"
            //     }
            // )
            token='';
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
})
}
catch(err)
{
    console.log(err);
}
}
const loginUser=async(req,res)=>
{
    const {email,password}=req.body;
    try
    {
      sqlquery=`select * from Users where email=?`;
      config.query(sqlquery,email,(err,data)=>
      {
          if(data[0]!=null)
          {
          bcrypt.compare(password,data[0].password,(err,result)=>
          {
             if(result)
             {
                if(data[0].active)
                {
                    var accessToken=generateJwt(email,`${process.env.ACCESSTOKEN}`);
                    res.json(
                        {
                            success:true,
                            name:data[0].name,
                            email:email,
                            accessToken:accessToken,
                            message:"Login Successful!",
                        }
                    )
                }
                else if(!data[0].active)
                {
                  if(!token)
                  token=generateJwt(email,process.env.VERIFYTOKEN);
                  const sendCode = sendEmail(data[0].name,email,data[0].id,token);
                  if(sendCode)
                  {
                  res.json(
                      {
                          success:false,
                          message:"Your account is not activated.Please Check your Mailbox and activate through the link",
                      }
                  )
                  }
                }
             }
             else{
                res.status(404).json(
                {
                    success:false,
                    message:"Wrong Password!"
                })
             }
          })
        }
        else
        {
            res.status(404).json(
                {
                    success:false,
                    message:"No account registered with this email!"
                }
            )
        }
      })
    }
    catch(err)
    {
      console.log(err);
    }
}
const getUsers=async(req,res)=>
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
const getUser=async(req,res)=>
{
    let id=req.params;
    try
    {
        var sqlquery=`Select * from Users where id=?`;
        config.query(sqlquery,id,(err,data)=>
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
    getUsers:getUsers,
    getUser:getUser,
    loginUser:loginUser,
    activateUser:activateUser,
}