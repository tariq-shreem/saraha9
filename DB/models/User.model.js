import mongoose, { Schema,model} from "mongoose";
const userSchame = new Schema({
    userName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
    },
    gender:{
        type:String,
        enum:['Male','Female']
    },
    confirmEmail:{
        type:Boolean,
        default:false,
    }
},{
    timestamps:true,
});

const userModel = model('User',userSchame);
export default userModel