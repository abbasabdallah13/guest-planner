import bcrypt from 'bcrypt'
import UserModel from '../Models/User.js'
import Token from '../Models/Token.js';
import crypto from 'crypto';
import { sendEmail } from '../utils/email/sendEmail.js';

export const createUser = async(req,res) => {
    const { userInfo } = req.body;
    try {
        if(userInfo.password !== userInfo.confirmPassword) return res.json({errorMessage: 'Passwords do not match'})

        const hashedPassword = await bcrypt.hash(userInfo.password, 12);

        const userExists = await UserModel.find({email:userInfo.email});

        if(userExists.length > 0) return res.json({errorMessage: 'Email already exist'})

        const newUser = await UserModel.create({fullName: userInfo.fullName, email: userInfo.email, password: hashedPassword});

        return res.status(200).json(newUser)

    } catch (error) {
        console.log(error.message)
    }
}

export const login = async(req,res) => {
    const { userInfo } = req.body;

    try {
        const user = await UserModel.findOne({email: userInfo.email});
        
        if(user.length === 0) return res.json({errorMessage: 'User do not exist'});
        
        const correctPassword = await bcrypt.compare(userInfo.password, user.password);

        if(!correctPassword) return res.json({errorMessage: 'Incorrect password'});

        return res.status(200).json(user)
    } catch (error) {
        console.log(error.message)
    }
}

export const forgotPassword = async(req,res) => {
    const { email } = req.params;    
    try {
        const user = await UserModel.findOne({email});

        let token = await Token.findOne({userId: user._id});

        if(token){
            await token.deleteOne()
        }

        let resetToken = crypto.randomBytes(32).toString('hex');
        
        const hashedToken = await bcrypt.hash(resetToken, 12);

        const newToken = await Token.create({userId: user._id, token: hashedToken, createdAt: Date.now()})
        
        const link = `localhost:3000/updatePassword?token=${resetToken}&userId=${user._id}`; //remove the https part when you click the link if using localhost client
        sendEmail(email, "Password Reset Request", {name: user.fullName, link}, "../utils/email/template/passwordReset.handlebars")

        return res.status(200).json(link);
    } catch (error) {
        console.log(error.message)
    }
}

export const updatePassword = async(req,res) => {
    const { passwords } = req.body;
    const { id } = req.params;

    try {
        const token = await Token.findOne({userId: id});

        if(!token) return res.json({errorMessage: 'Invalid or expired token. Please note that the token are only available for 60 mins'});

        if(passwords.password !== passwords.confirmPassword) return res.json({errorMessage: 'Passwords do not match.'});

        const hashedPassword = await bcrypt.hash(passwords.password, 12);

        const user = await UserModel.findByIdAndUpdate(id, { password: hashedPassword}, {new:true});

        sendEmail(user.email, 'Password Successfully Changed', {name: user.fullName}, '../utils/email/template/passwordChangedSuccessfully.handlebars')

        return res.status(200).json(user);

    } catch (error) {
        console.log(error.message)
    }
}