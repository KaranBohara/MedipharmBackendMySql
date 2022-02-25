let config = require('../../config/config');

const addCategory=async (req,res) =>{
    var category=req.body;
    try {
        var sqlquery = `CALL sp_InsertCategory(?)`;
        config.query(sqlquery,[category.Category],(err,data)=>
        {
            if(data)
            {
                res.status(200).json(
                    {
                        data:data,
                        success:true,
                        message:"Category Created Successfully"
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
    catch (err) {
    console.log(err);
    }
}
const getCategories=async(req,res)=>
{
    try{
        var sqlquery=`Select * from Category`;
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
           console.log(err);
       }
}
const getCategory=async(req,res)=>
{
    var id=req.params.id;
    try{
        var sqlquery=`Select * from Category where CId=${id}`;
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
           console.log(err);
       }
}
const updateCategory=async(req,res)=>
{
    var category=req.body;
    var id=req.params.id;
    try{
        var sqlquery=`update Category set Category=? where CId=${id}`;
        config.query(sqlquery,[category.Category],(err,data)=>
        {
            if(data)
            {
             res.status(200).json(
                {
                    data:data,
                    success:true,
                    message:"Category Updated Successfully"
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
        console.log(err);
    }
}
const deleteCategory=async(req,res)=>
{
    var id=req.params.id;
    try
    {
        var sqlquery=`Delete From Category where CId=${id}`;
        config.query(sqlquery,(err,data)=>
        {
            if(data)
            {
            res.status(200).json(
                {
                    data:data,
                    success:true,
                    message:"Category successfully deleted"
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
    addCategory:addCategory,
    getCategories:getCategories,
    updateCategory:updateCategory,
    getCategory:getCategory,
    deleteCategory:deleteCategory,
}