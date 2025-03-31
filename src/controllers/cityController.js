const cityModel = require("../models/cityModel")

const addCity = async (req,res)=>{
    const savedCity = await cityModel.create(req.body)
    res.status(201).json({
        message:"City added successfully",
        data : savedCity
    })
}

const getCity = async (req,res)=>{
    const cities = await cityModel.find()
    res.status(200).json({
        message : "City fetched Successfull",
        data : cities
    })
}

const getCityByStateId = async (req,res)=>{
    try{
        const cityByState = await cityModel.find({stateId : req.params.id})
        res.status(200).json({
            message : "City found by state id..",
            data : cityByState
        })
    }
    catch(err)
    {
        res.status(500).json({
            message : "Error in fetching city by state id",
            data :err
        })
    }
}

module.exports = {addCity , 
    getCity,
    getCityByStateId
}