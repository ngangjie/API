const express = require('express');
const router = express.Router();
const User = require('../model/userModel.js');


router.post('/login' , async (req, res)=>{
    const {username, password} = req.body;
    if(username === '' && password === ''){
        return res.status(400).json({
            success:false,
            message:'Please provide all the info'
        })
    }
     const result = User.find((item) => item.username === username && item.password === password)
          if(result){
            return res.status(200).json({
                success:true,
                message:"one user  Found",
                user:result
              })
          } else {
            return res.status(404).json({
                success:false,
                message:'user not Found'
            })
          }
    }
        
    )
    



module.exports = router;