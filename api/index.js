import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

//CONNECTION TO DATABASE
mongoose.connect(process.env.MONGODB_URI)
.then(
    () => {console.log('Database is connected successfully!!')}
)
.catch((error) => console.log(error));


const app = express();

const port = 3000;


app.get('/' , (req,res) => {
    res.send('hello my blog app')
})
app.listen(port , () => {
    console.log(`server is listening on port ${port}!`)
});