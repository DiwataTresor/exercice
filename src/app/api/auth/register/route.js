import User from "@/models/User";
import connect from "@/utils/db";
import bcrypt from "bcryptjs";
export const POST=async (request)=>{
    try {
        const {name,email,password}=await request.json();
        await connect();
    
        const hashedPassword=await bcrypt.hash(password,5);
        const newUser=new User({name,email,password:hashedPassword});
        await newUser.save();
        return new NextResponse("Utilisateur bien crée",{status:201,})
    } catch (error) {
        console.log(error)
        return new NextResponse(err.message,{status:500,})
    }
}