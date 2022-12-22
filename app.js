const express = require('express');
require('./db/');
const app = express();
require('dotenv').config();

const postRouter = require('./routers/post');

app.use('/api/post', postRouter);

const PORT = process.env.PORT
app.listen(PORT,()=>{
    console.log("Server is running on port "+ PORT)
})