import mongoose, { Schema,Types,model} from "mongoose";
const messageSchame = new Schema({
    message:{
        type:String,
        required:true,
    },
    receiverId:{
        type:Types.ObjectId,
        required:true,
        ref:'User',
    }
},{
    timestamps:true,
});

const messageModel = model('Message',messageSchame);
export default messageModel