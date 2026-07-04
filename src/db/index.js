import mongoose from "mongoose";
import {DB_NAME} from "../constants.js";

const connectDB = async () => {
    try {
        const connectionString = `${process.env.MONGODB_URI}/${DB_NAME}`;
        const connectionInstance = await mongoose.connect(connectionString);
        console.log(`\n mongoDB connected !! DB HOST:${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("mongoDB connection error", error);
        process.exit(1);
    }
};

connectDB();


export default connectDB;
