import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

import authRoute from './routes/auth.js';

const app = express();
dotenv.config();

//Constants
const PORT = process.env.PORT;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_NAME;

//Middleware
app.use(cors());
app.use(express.json());

//Routes
app.use('/api/auth', authRoute);

async function start() {
  try {
    await mongoose.connect(
      'mongodb+srv://admin:12345@cluster0.zyz1xtq.mongodb.net/?retryWrites=true&w=majority',
    );

    app.listen(3001, (req, res) => {
      console.log(`server works`);
    });
  } catch (error) {
    console.log(error);
  }
}

start();
