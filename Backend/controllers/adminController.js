import validator from "validator"




//API for adding doctor
const addDoctor = async (req, res) => {
    try {
        const { name, email, password, speciality, degree, about, fees, address, experience } = req.body
        const imageFile = req.file

        console.log({ name, email, password, speciality, degree, about, fees, address, experience }, { imageFile })
        if (!name || !email || !password || !speciality || !degree || !about || !address || !experience || !fees) {
            return res.json({ success: 'Failed', message: "Missing Details" })
        }
        if (!validator.isEmail(email)) {
            return res.json({ success: 'Failed', message: "Invalid Email" })

        }
        if (password.lenght < 10) {
            return res.json({ success: "failed", message: 'Weak password' })
        }




    } catch (error) {

    }
}
export default addDoctor