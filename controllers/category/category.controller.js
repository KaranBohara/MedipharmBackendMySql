var config = require('../../config/config');

const addCategory=async (req,res) =>{
    var category=req.body;
    try {
        var sqlquery = `CALL sp_InsertCategory(?,?)`;
        config.query(sqlquery,[category.CId,category.Category],(err,data)=>
        {
            res.status(200).json(
                                  {
                                      data:data,
                                      success:true,
                                      message:"Category Created Successfully"
                                  })
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
        var sqlquery='Select * from Category';
        config.query(sqlquery,(err,results)=>
        {
          res.send(results);
        })
       }
       catch(err)
       {
           console.log(err);
       }
}
module.exports=
{
    addCategory:addCategory,
    getCategories:getCategories,
}