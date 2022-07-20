import mongoose from "mongoose";
import Users from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';

export const Singup =async (req, res) => {
    const { username, email, phone, password } = req.body;
    const intPassword = parseInt(password)
    
    try {
        const existingUser =await Users.findOne({ email })
        if(existingUser)   return res.status(400).json({message:'user already exist'})
        const hashedPassword = await bcrypt.hash(password,12) ;
        const result = await Users.create({username,email,password:hashedPassword,phone})
        const token = jwt.sign({email:result.email,id:result._id}, 'test',{expiresIn:'365d'})
        res.status(200).json({result,token})
    } catch (error) {
        console.log(error)
        res.status(404).json({message:'something went wrong!'})

    }
}

export const Login =async (req, res) => {
    const { email, password } = req.body;
    try {
        const existingUser =await Users.findOne({ email })
        if(!existingUser) return res.status(400).json({message:'user not exist'})
        const isPasswordCorrect =await bcrypt.compare(password,existingUser.password) ;
        if(!isPasswordCorrect) return res.status(400).json({message:'incorrect password'})
        const token = jwt.sign({email:existingUser.email,id:existingUser._id}, 'test',{expiresIn:'365d'})
        res.status(200).json({result:existingUser,token})
    } catch (error) {
        console.log(error)
        res.status(404).json({message:'something went wrong!'})

    }
}