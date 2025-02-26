const roleModel = require("../models/roleModel")
const mongoose = require("mongoose")

const getAllRoles = async (req,res)=>{
    const allroles = await roleModel.find();
    
    res.json({
        "message" : "Data fetch from database",
        "data" : allroles
    })
}

const addRole = async (req,res)=>{ 
    const addRoleData = await roleModel.create(req.body)
    console.log(addRoleData)
    res.json({
        message : "Data added"
    })
}

const deleteRole = async (req,res)=>{
    const deletedRole = await roleModel.findByIdAndDelete(req.params.id);
    res.json({
        message : "Data deleted"
    })
}

const foundIdRole = async (req,res)=>{
    const foundRoleId = await roleModel.findById(req.params.id);
    res.json({
        message:"Id role founded..",
        data : foundRoleId
    })
   
}
module.exports ={
    getAllRoles ,
    addRole,
    deleteRole,
    foundIdRole
}
