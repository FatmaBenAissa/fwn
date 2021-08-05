const express=require('express')
const router=express.Router();


const isAuth=require('../middleware/passport')
const controllers=require('../controllers/upload')
// router.get("/", (req,res)=>{
//     res.send("hello world")
// });

  //post img
router.post('/upload',controllers.uploadImg)
  module.exports = router;