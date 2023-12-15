import bcrypt from 'bcrypt'
import UserModel from '../models/UserModel.js'

//register user
export const registerUser = async(req,res)=>{
    const {name,email,password} = req.body;

    const salt = await bcrypt.genSalt(10)
    const hashedPass =await bcrypt.hash(password,salt)

    const newUser = new UserModel({name,email,password: hashedPass})

    try {
        await newUser.save()
        res.status(200).json(newUser)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}