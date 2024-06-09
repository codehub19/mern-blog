import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';

dotenv.config();

//CONNECTION TO DATABASE
mongoose.connect(process.env.MONGODB_URI)
.then(
    () => {console.log('Database is connected successfully!!')}
)
.catch((error) => console.log(error));


const app = express();
const port = 3000;


app.use(express.json());


app.listen(port , () => {
    console.log(`server is listening on port ${port}!`)
});


app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);

// app.get('/' ,)