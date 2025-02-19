import { getUserData, loginUser, registerUser, updateUser } from "../controllers/usercontroller.js"
import multer from "../middlewares/multer.js"
import express from "express"
import authUser from "../middlewares/authUser.js"
const userRouter = express.Router()
userRouter.post('/register', registerUser)
userRouter.post('/login', loginUser)
userRouter.get('/profile', authUser, getUserData)
userRouter.post('/update', multer.single('image'), authUser, updateUser)

export default userRouter