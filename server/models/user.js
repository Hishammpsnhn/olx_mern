import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username:{type:String,required:true},
    email:{type:String,required:true},
    phone:{type:String,required:true},
    password:{type:String,required:true},
    id:{type:String},
   
    favorites: {
        type: [String],
        default: []
    },
 
})

const Users = mongoose.model('Users',userSchema)
export default Users