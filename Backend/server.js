import express from "express"
import connectCloudinary from "./config/cloudinary.js"
import cors from "cors"
import "dotenv/config"
import connectDb from "./config/mongodb.js"
import adminRouter from "./routes/adminRoute.js"
import doctorRouter from "./routes/DoctorRoute.js"
import userRouter from "./routes/userRoute.js"
//app config
const app = express()
const port = process.env.port || 4000
connectDb()
connectCloudinary()
//middlewares
app.use(express.json())
app.use(cors())
//api endpoint 
app.use('/api/admin', adminRouter)
app.use('/api/admin', doctorRouter)
app.use('/api/user', userRouter)
app.get('/', (req, res) => {
    res.send('api workingggggg')

})
app.listen(port, () => console.log('Server started', port))