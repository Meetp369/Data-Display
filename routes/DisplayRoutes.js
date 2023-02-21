const express=require('express');
const router=express.Router()

const displaycontroller=require('../controller/DisplayController');

router.get('/getdata',displaycontroller.getData);
router.get('/stadata',displaycontroller.saveData);
module.exports=router;