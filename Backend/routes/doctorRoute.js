import express from "express"
const doctorRouter = express.Router()
import authAdmin from "../middlewares/authAdmin.js"
import { changeAvailability } from "../controllers/doctorController.js"
doctorRouter.post("/change-Availability", authAdmin, changeAvailability)
export default doctorRouter