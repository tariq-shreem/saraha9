import bcrypt from "bcryptjs/dist/bcrypt.js";
import userModel from "../../../DB/models/User.model.js";
import jwt from 'jsonwebtoken';
export const register =async (req,res)=>{
    try{

    
    const {userName,email,password} = req.body;
    const user = await userModel.findOne({email});
    if(user){
        return res.status(409).json({message:"email exists"});
    }
    const hashedPassword = bcrypt.hashSync(password,parseInt(process.env.SALTROUND));
     await userModel.create({userName,email,password:hashedPassword});
    return res.status(201).json({message:"success"});
}catch(err){
    return res.status(500).json({message:"catch error",error:err.stack});
}
}

export const login = async(req,res)=>{
    
    const {email,password} = req.body;
    const user = await userModel.findOne({email});
    if(!user){
        return res.status(404).json({message:"user not found"});
    }
    const match = bcrypt.compareSync(password,user.password);
    
    if(!match){
        return res.status(404).json({message:"user not found"});
    }

    const token = await jwt.sign({id:user._id},process.env.LOGINSIGNATURE,{expiresIn:'1h'});
    return res.status(200).json({message:"success",token});    

}