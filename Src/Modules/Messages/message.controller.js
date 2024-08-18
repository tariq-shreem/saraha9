import messageModel from "../../../DB/models/Message.model.js";
import userModel from "../../../DB/models/User.model.js";

export const sendMessage = async(req,res)=>{
try{


    const {message} = req.body;
    const {receiverId} = req.params

    const user = await userModel.findById(receiverId);
    
    if(!user){
        return res.status(404).json({message: "User not found"});
    }
    await messageModel.create({message, receiverId});
    return res.status(201).json({message:"success"});
}catch(error){
    return res.status(500).json({message:'catch error',error:error.stack});
}

}

export const getMessages = async(req,res,)=>{
    try{
        const messages = await messageModel.find({receiverId:req.id});
        return res.status(200).json({message:"success",messages});
    }catch(error){
        return res.status(500).json({message:'catch error',error:error.stack});
    }
}