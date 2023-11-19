import express from './express'
import register_models from './Routes/register_models'

const router = express.Router()
router.post("/register", async(res, req)=>{
    try {
    const {userName, email, password, confirmPassword} = req.body
    if(password !== confirmPassword){
        return res.status(404).json({message:"Password doesn't match"})
    }
    await register_models.create({userName, email, password, confirmPassword})
    return res.status(201).json({message:"User saved to DB!"})
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:"Sever error"})
    }
})

export default router
