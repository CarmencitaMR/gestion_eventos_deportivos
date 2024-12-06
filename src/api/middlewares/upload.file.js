const cloudinary = require("cloudinary").v2;
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");

const storage = new CloudinaryStorage ({

    cloudinary: cloudinary,
    params: {
        folder: "img_events",
        allowedFormats: ["jpg", "png", "jpeg", "svg", "gif"]
    }

});

const uploadImg =  multer({storage});

module.exports = uploadImg;