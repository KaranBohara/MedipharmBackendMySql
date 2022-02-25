let express=require('express');
let router=express.Router();
const stockstatus=require('../../controllers/stockstatus/stockstatus.controller');
router.get('/',stockstatus.getStatus);
router.get('/:id',stockstatus.getStatusById);
module.exports=router;