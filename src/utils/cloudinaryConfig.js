const cloudinary = require("cloudinary").v2;
const path = require("path")

const uploadFileToCloudinary = async  (file) =>{
    //configruation of cloudinary file uploading
    cloudinary.config({
        cloud_name : "dy27b4t9d",
        api_key : "197797544886942",
        api_secret : "BRglVIxrgkURN-hdX4cdLVkFAQs"
    })

    const cloudinaryResponse = await cloudinary.uploader.upload(file.path);
    return cloudinaryResponse;
}
module.exports = {
    uploadFileToCloudinary
}