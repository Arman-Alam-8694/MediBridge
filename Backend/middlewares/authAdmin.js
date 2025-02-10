import jwt from "jsonwebtoken"
const authAdmin = async (req, res, next) => {
    try {
        const { atoken } = req.headers
        if (!atoken) {
            return res.json({
                success: 'failed', message: 'not authorised'
            })
        }
        const token_decoded = jwt.verify(atoken, process.env.JWT_SECRET)
        if (token_decoded !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
            return res.json({
                success: 'failed', message: 'not authorised '
            })

        }
        next()

    } catch (error) {
        return res.json({
            success: 'failed', message: error.message
        })

    }



}
export default authAdmin