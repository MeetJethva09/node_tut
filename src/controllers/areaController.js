const areaModel = require("../models/areaModel")
const { all } = require("../routes/userRouter")

const addArea = async (req,res)=>{
    const savedArea = await areaModel.create(req.body)
    res.status(201).json({
        message : "Area added successfully",
        data : savedArea
    })
} 

const allArea = async (req,res)=>{
    const allarea = await areaModel.find()
    res.status(200).json({
        message : "Area fetched succcessfull",
        data : allarea
    })
}

const getAreaByCityId = async (req,res)=>{
    try{
        const areaByCid = await areaModel.find({cityId : req.params.id});
        res.status(200).json({
            message : "Area found by cityid..",
            data : areaByCid
        })
    }
    catch(err)
    {
        res.status(404).json({
            message : "Area not found by cityid..",
            data: err
        })
    }
}

module.exports = {
    addArea,
    allArea,
    getAreaByCityId
}