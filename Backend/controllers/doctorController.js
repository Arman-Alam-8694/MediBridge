import doctorModel from "../models/doctorModel.js"

export const changeAvailability = async (req, res) => {
    try {
        const { docId } = req.body
        console.log(docId)
        const doctorData = await doctorModel.findById(docId)
        await doctorModel.findByIdAndUpdate(docId, { availability: !doctorData.availability })
        res.json({ success: true, message: 'Availability Changed' })



    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })


    }



}