
const User = require('../model/userModel.js');


 const  Login = async (req, res)=>{
    const {username, password} = req.body;

     await User.find({username, password}).then(user =>{
        if(!user){
          return res.status(404).json({
            success:false,
            message:"user not Found"
          })
        } else{
            return res.status(200).json({
                success:true,
                user:user,
                message:'Found a user'
            })
        }
    }
        
    )
    

    
};

module.export = Login;