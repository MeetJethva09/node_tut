const userModel = require("../models/userModel");
const bcrypt = require("bcrypt")

const jwt = require("jsonwebtoken")
const {sendingMail} = require("../utils/mailSender")
const secretKey = 'marco@123';

const addUser = async (req,res)=>{
    const addedUser = await userModel.create(req.body);
    res.json({
        message : "Data added",
        data : addUser
    })
}

const getUser = async (req,res)=>{
    const allUser = await userModel.find().populate("role")
    res.json({
        message : "Data fetched",
        data : allUser
    })
}

const getUserId = async (req,res)=>{
    const userFoundId  = await userModel.findById(req.params.id);
    res.json({
        message:"user found",
        data : userFoundId
    })
}

const deleteUser = async (req,res)=>{
    const deletedUser = await userModel.findByIdAndDelete(req.params.id);
    res.json({
        message:"data deletedd",
        data : deletedUser
    })
}

const userSignup = async (req,res)=>{
    //To encrypt the password...
    let hashedPassword = bcrypt.hashSync(req.body.password , 10);
        req.body.password = hashedPassword;

    try{
        const userSignuped = await userModel.create(req.body)
        await sendingMail(userSignuped.email , "welcome mail", "test mail..")
        res.status(201).json({
            message : "user created",
            data : userSignuped
        })
    }
    catch(err){
        console.log(err)
    }
}

const userLogin = async (req,res)=>{ 
        let {password , email} = req.body;
        try{
          
            const findUserByEmail = await userModel.findOne({email : email}).populate("role")

            if(findUserByEmail){
                    const isMatche = await bcrypt.compare(password , findUserByEmail.password);
                    if(isMatche === true ){
                        res.status(200).json({
                            message : "User Login Successfully..",
                            data : findUserByEmail
                        })
                    }
                    else{
                        res.status(401).json({
                            message : "Invalid Credentials.."
                        })
                    }
            }
            else{
                res.status(404).json({
                    message : "User not found , please Signup"
                })
            }
          }
        catch(err){
            console.log("error occured" , err)
        }
}

const forgotPass = async (req,res) =>{
       try{
            const foundUser = await userModel.findOne({email : req.body.email});
            
            if(foundUser){
                    const token = jwt.sign(foundUser.toObject() , secretKey);
                    const url = `http://localhost:5173/resetpass/${token}`;

                        const mailContent = `<html> <body>
                        <a href="${url}">Reset Your Password</a>
                        </body>
                        </html>`

                            await 
                            sendingMail(foundUser.email , 'Reset Password' , mailContent,{contentType : 'text/html'})

                    res.status(200).json({
                        message : "token sent to your email",
                    })
            }
            else{
                    res.status(404).json({
                        message : "User not found",
                        data :err
                    })
            }
        }
      catch(err){
            res.status(404).json({
                message : "error occured , email Not found!!!",
                data : err
            })
        }
}

const getUserOnlyUser = async (req,res)=>{
    
        const foundUsers = await userModel.find({role : req.params.rid});
        if(foundUsers){
        res.status(200).json({
            message : "users found",
            data : foundUsers
        })
        }
        else{
            res.status(404).json({
                message : "users not found",
            })
        }
}

const resetPassword = async (req,res)=>{
            try{
                const verifyUserFromToken = jwt.verify(req.body.token , secretKey);  //Verify user

                const newHashedPassword = bcrypt.hashSync(req.body.newpassword , 10);   //Hashed new password
                
                const updateTheUser = await userModel.findByIdAndUpdate(verifyUserFromToken._id , {password : newHashedPassword})  //Update the password

                res.status(200).json({
                    message : "Password Changed Successfully",
                    data : verifyUserFromToken
                })
            }
        catch(err)
        {
            res.status(500).json({
                message : "error occured , token not valid!!!",
                data : err
            })
        }
}
module.exports = {
    addUser,
    getUser,
    getUserId,
    deleteUser,
    userSignup,
    userLogin,
    forgotPass,
    getUserOnlyUser ,
    resetPassword
}