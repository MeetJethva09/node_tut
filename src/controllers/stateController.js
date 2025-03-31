const stateModel = require("../models/stateModel")

const addState = async (req,res)=>{
        const savedState = await stateModel.create(req.body)
        res.status(201).json({
            message : "State saved successfully..",
            data : savedState
        })
}

const allState = async (req,res)=>{
    const states = await stateModel.find()
    res.status(200).json({
        message : "state fetched succcessfulyy",
        data : states
    })
}

module.exports = {
    addState,
    allState
}
