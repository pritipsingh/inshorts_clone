import mongoose from "mongoose";
import express from 'express';



const app = express();
const connection = () => {

  
  const URL = "mongodb+srv://priti:priti@inshorts.kmgla.mongodb.net/INSHORTS?retryWrites=true&w=majority"
  main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(URL);
  console.log("Database connected successfully")
}
}


export default connection;