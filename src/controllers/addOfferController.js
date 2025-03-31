const addOfferModel = require("../models/addOfferModel")
const multer = require("multer")
const path = require("path")
const {uploadFileToCloudinary} = require("../utils/cloudinaryConfig")

const storage = multer.diskStorage({
    destination : "./uploads",
    filename : function (req , file , cb) {
        cb(null , file.originalname)
    }
})

//multer object creation 
const upload = multer({
    storage : storage
}).single("image")



const addOffer = async (req,res)=>{
    try{
             upload(req , res , async (err)=>{
                if(err){
                    res.status(500).json({
                        message : "Error occured while file uploading..",
                        data : err
                    })
                }
                else{
                    const cloudinaryResponse = await uploadFileToCloudinary(req.file);
                    req.body.offerImage = cloudinaryResponse.secure_url;
                    const savedOffer = await addOfferModel.create(req.body);
                    res.status(201).json({
                        message : "Offer added successfully.",
                        data : savedOffer
                    }) 
                }
            })
           
    }
    catch(err){
        res.status(500).json({
            message : "Error occured while add offer.."
        })
    }
} 

// const addOfferWithImage =  (req,res)=>{
//     upload(req,res,async (err)=>{
//         if(err)
//         {
//             res.status(500).json({
//                 message : "Error occured while uploading image.."
//             })
//         }
//         else{
//             const cloudinaryResponse = await uploadFileToCloudinary(req.file);
//             console.log(cloudinaryResponse)
//             res.status(201).json({
//                 message : "Offer added successfully.",
//                 data : cloudinaryResponse
//             })
//         }
//     })
// }
const getOfferByUserId = async (req,res) =>{
    try{

        const getOfferById = await addOfferModel.find({userId : req.params.uid});
        res.status(200).json({
            message : "Offers fetched successfull",
            data : getOfferById
        })  
    }
    catch(err){
        res.status(401).json({
            message : "Error occured while offers found!!",
            data : err
        })
    }
}

const getAllOffers = async (req,res)=>{
    try{
            const allOffers = await addOfferModel.find()
            res.status(200).json({
                message : "All offers fetched successfully",
                data : allOffers
            })
    }
    catch(err)
    {
            res.status(500).json({
                message : "Error occured while fetching offers!!",
                data : err
            })
    }
}

module.exports = {
    addOffer,
    getOfferByUserId,
    getAllOffers
}