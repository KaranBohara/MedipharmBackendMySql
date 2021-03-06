let config = require('../../config/config');
const ShortUniqueId = require('short-unique-id');
const uid = new ShortUniqueId({dictionary: 'number',length:10});

const addProduct=async (req,res) =>{
    var product=req.body;
    var pid=uid();
    try {
        var sqlquery = `CALL sp_InsertProducts(?,?,?,?,?,?,?,?,?,?)`
        config.query(sqlquery,[pid,product.ProductName,product.Description,product.Image,product.CId,
            product.Manufacturer,product.Quantity,product.Price,product.Discount,product.StatusId],(err,data)=>
        {
            if(data)
            {
                res.json(
                    {
                        data:data,
                        success:true,
                        message:"Product Created Successfully"
                    })
            }
            else
           {
            res.json(
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
const getProducts=async(req,res)=>
{
    try{
        var sqlquery=`Select * from vw_Product`;
        config.query(sqlquery,(err,data)=>
        {
            if(data)
            {
                res.json(
                    {
                        data:data,
                        success:true,
                    }
                )
            }
          else
          {
            res.json(
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
const getProduct=async(req,res)=>
{
    var id=req.params.id;
    try{
        var sqlquery=`Select * from vw_Product where PId=${id}`;
        config.query(sqlquery,(err,data)=>
        {
            if(data)
            {
                res.json(
                    {
                        data:data,
                        success:true,
                    }
                )
            }
          else
          {
            res.json(
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
const updateProduct=async(req,res)=>
{
    var product=req.body;
    var id=req.params.id;
    try{
        var sqlquery=`update Products set ProductName=?,Description=?,Image=?,CId=?,Manufacturer=?,Quantity=?,Price=?,Discount=?,StatusId=?
         where id=${id}`;
        config.query(sqlquery,[product.ProductName,product.Description,product.Image,product.CId,
            product.Manufacturer,product.Quantity,product.Price,product.Discount,product.StatusId],(err,data)=>
        {
            if(data)
            {
             res.json(
                {
                    data:data,
                    success:true,
                    message:"Product Updated Successfully"
                }
            )
            }
            else
            {
                res.json(
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
const deleteProduct=async(req,res)=>
{
    var id=req.params.id;
    try
    {
        var sqlquery=`Delete From Products where PId=${id}`;
        config.query(sqlquery,(err,data)=>
        {
            if(data)
            {
            res.json(
                {
                    data:data,
                    success:true,
                    message:"Product successfully deleted"
                }
            )
            }
            else
            {
                res.json(
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
    addProduct:addProduct,
    getProducts:getProducts,
    getProduct:getProduct,
    updateProduct:updateProduct,
    deleteProduct:deleteProduct,
}
