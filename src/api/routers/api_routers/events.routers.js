const express = require ("express");
const router = express.Router();

const uploadImg = require("../../middlewares/upload.file");
const { checkToken, checkTokenAdmin } = require("../../middlewares/auth");
const { createEvent, getAllEvents, getEventById, deleteEventById, updateEventById, getBySportType, getByDateRange, getUpcomingEvents} = require("../../controllers/events.controllers");



router.post("/", checkToken, uploadImg.array("image", 3), createEvent); 
router.get("/getAllEvents", checkToken, getAllEvents);
router.get("/getEventById/:id", checkToken, getEventById);
router.delete("/:id", checkTokenAdmin, deleteEventById);
router.put("/:id", checkToken, updateEventById);


router.get("/upcoming", getUpcomingEvents);
router.get("/sport", getBySportType);
router.get("/date", getByDateRange);





module.exports = router;