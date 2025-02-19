import express from "express"
import upload from "../middlewares/multer.js"
import { addDoctor, loginAdmin, allDoctors, changeAvailability } from "../controllers/adminController.js"
import authAdmin from "../middlewares/authAdmin.js"
const adminRouter = express.Router()
adminRouter.post('/add-doctor', authAdmin, upload.single('image'), addDoctor)
adminRouter.post('/all-doctors', authAdmin, allDoctors)
adminRouter.post("/change-Availability", authAdmin, changeAvailability)
adminRouter.post('/login', loginAdmin)

export default adminRouter