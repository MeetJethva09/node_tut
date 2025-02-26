const userModel = require("../models/userModel");


const addUser = async (req,res)=>{
    const addedUser = await userModel.create(req.body);
    res.json({
        message : "Data added",
        data : addUser
    })
}

const getUser = async (req,res)=>{
    const allUser = await userModel.find();
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

module.exports = {
    addUser,
    getUser,
    getUserId,
    deleteUser
}