import mongoose from "mongoose";
const {Schema} = mongoose;
import Post from "@/models/Post"

const postSchema = new Schema({
    title: {
        type:String,
        unique:true,
        required:true,
        
    },
    desc: {
        type:String,
        unique:true,
        required:true,

    },
    img: {
        type:String,
    
        required:true,

    },
    content: {
        type:String,
    
        required:true,

    },
    username: {
        type:String,
    
        required:true,

    }
    
},{timestamps:true})
export default mongoose.model('Post',postSchema);