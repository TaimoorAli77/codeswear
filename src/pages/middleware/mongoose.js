import mongoose  from "mongoose";
// import handler from '../api/hello';

//  mongoose ka connection bna k any wale chezo ko process kry ga

const connectDb = handler => async (req , res)=>{

    if (mongoose.connections[0].readyState){
        return handler(req,res)
    }
    await mongoose.connect(process.env.MONGO_URI)
    return handler(req , res)
}

export default connectDb; 