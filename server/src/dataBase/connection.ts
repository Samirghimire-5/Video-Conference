import mongoose from "mongoose";

const connection = async () => {
  try {
    const response = await mongoose.connect(
      `${process.env.MONGODB_CONNECTION_URL}`
    );
    if (response) console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

export default connection;
