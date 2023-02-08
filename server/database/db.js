
import mongoose from "mongoose";



export const Connection = async () => {
  const URL = 'mongodb+srv://mgarun007:Mongopassword123@cluster0.9bz4cp6.mongodb.net/?retryWrites=true&w=majority';
  try {
    await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
    console.log("Database is connected successfully");
  } catch (error) {
    console.log('error while connecting database', error.message);
  }
}

