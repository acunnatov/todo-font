import express from 'express';
import cors from 'cors';
import connectDB from './src/config/db.js';
import router from './src/routes/toDoRoutes.js';

const app = express();
connectDB()

app.use(express.json());
app.use(cors());
app.use('/api', router)

export default app