import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import userRoute from './routes/userRoute.js'
import cors from 'cors'
import "dotenv/config"

const app = express();

app.use(bodyParser.json({ extended: true}))
app.use(bodyParser.urlencoded({ extended: true}))
app.use(cors())

app.use('/user', userRoute)


mongoose.connect(process.env.MONGO_CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    app.listen(process.env.PORT, () => console.log('Server is running on port '+ process.env.PORT));
})



