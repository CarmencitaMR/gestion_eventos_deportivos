const express = require ("express");
const router = express.Router();

const uploadImg = require("../../middlewares/upload.file");
const { checkToken, checkTokenAdmin } = require("../../middlewares/auth");
const { createEvent, getAllEvents, getEventById, deleteEventById, updateEventById } = require("../../controllers/events.controllers");



router.post("/", checkToken, uploadImg.single("image"), createEvent); 
router.get("/", checkToken, getAllEvents);
router.get("/:id", checkToken, getEventById);
router.delete("/:id", checkTokenAdmin, deleteEventById);
router.put("/:id", checkToken, updateEventById);


module.exports = router;