import mongoose from "mongoose"

export const connectDB = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
    
    console.log("connected to MongoDb successfully");
    } catch (error) {
        console.error("Error connecting to MongoDb");
        process.exit(1); // exit with failure
    }
}