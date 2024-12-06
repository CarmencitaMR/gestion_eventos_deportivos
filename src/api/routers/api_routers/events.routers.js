const express = require ("express");
const router = express.Router();



const { createEvent } = require("../../controllers/events.controllers");
const uploadImg = require("../../middlewares/upload.file");
const { checkToken, checkTokenAdmin } = require("../../middlewares/auth");


router.post("/", checkToken, uploadImg.array("image", 3), createEvent);


module.exports = router;