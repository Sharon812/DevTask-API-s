import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const clientOptions = {
      serverApi: { version: "1", strict: false, deprecationErrors: true },
    };

    await mongoose.connect(process.env.MONGODB_URL, clientOptions);
    console.log("DB connected ");
  } catch (error) {
    console.log("DB connection failed", error);
    process.exit(1);
  }
};

export default connectDB;
