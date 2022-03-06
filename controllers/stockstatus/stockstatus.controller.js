let config=require('../../config/config');
const getStatus=async(req,res)=>
{
    try{
        var sqlquery=`Select * from StockStatus`;
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
const getStatusById=async(req,res)=>
{
    var id=req.params.id;
    try{
        var sqlquery=`Select * from StockStatus where StatusId=${id}`;
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
module.exports=
{
    getStatus:getStatus,
    getStatusById:getStatusById,
}

