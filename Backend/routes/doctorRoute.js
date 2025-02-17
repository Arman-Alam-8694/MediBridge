import express from "express"
const doctorRouter = express.Router()
import authAdmin from "../middlewares/authAdmin.js"
import { changeAvailability } from "../controllers/doctorController.js"
import { allDoctors } from "../controllers/adminController.js"
doctorRouter.post("/change-Availability", authAdmin, changeAvailability)
doctorRouter.get("/list-doctors", allDoctors)

export default doctorRouter