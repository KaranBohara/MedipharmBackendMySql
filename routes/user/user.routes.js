let express=require('express');
let router=express.Router();
let user=require('../../controllers/users/user.controller');
router.post('/register',user.addUser);
router.post('/login',user.loginUser);
router.get('/',user.getUser);

module.exports=router;