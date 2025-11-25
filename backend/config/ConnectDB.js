import mongoose from "mongoose";

const ConnectDB = async () => {
  try {
    const response = await mongoose.connect(process.env.MONGODB_CONNECTION);

    if (response) {
      console.log("Database are connected successfully.");
    }
  } catch (error) {
    console.error("Error : ", error);
  }
};

export default ConnectDB;