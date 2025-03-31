const restModel = require("../models/addRest")

const addRest = async (req,res)=>{
    try{
        const createdRest = await restModel.create(req.body)
        res.status(201).json({
            message : "Restaurant added successfully..",
            data : createdRest
        })
    }
    catch(err)
    {
        res.json({
            message : "Error while adding rest..",
            data : err
        })
    }
}

const getRestById = async (req,res)=>{
    try{
            const getRest = await restModel.find({ownerId : req.params.id}).populate("city area").populate("ownerId");
            res.status(200).json({
                message : "Restaurant found successfully..",
                data : getRest
            })
    }
    catch(err)
    {
            res.status(404).json({
                message : "Restaurant not found..",
                data : err
            })
    }
}

const getAllRest = async (req,res)=>{
    try{
        const allRest = await restModel.find();
        res.status(200).json({
            message : "All restaurants found successfully..",
            data : allRest
        })
    }
    catch(err)
    {
        res.status(404).json({
            message : "No restaurants found..",
            data : err
        })
    }
}

const deleteRestById = async (req,res)=>{
    try{
        const deletedRest = await restModel.findByIdAndDelete({_id : req.params.id});
        res.status(200).json({
            message : "Restaurant deleted successfully..",
            data : deletedRest
        })
    }
    catch(err)
    {
        res.status(404).json({
            message : "Restaurant not found..",
        })                      
    }
}

module.exports = {
    addRest,
    getRestById,
    getAllRest,
    deleteRestById
}