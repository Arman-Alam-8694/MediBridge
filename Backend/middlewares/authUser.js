import jwt from 'jsonwebtoken'


const authUser = async (req, res, next) => {
    try {

        const { token } = req.headers
        if (!token) {
            return res.json({ success: false, message: 'token not found' })
        }
        const decoded = await jwt.verify(token, process.env.JWT_SECRET)
        req.body.id = decoded.id
        next()
    } catch (error) {
        return res.json({ success: false, message: error.message })
    }
}
export default authUser