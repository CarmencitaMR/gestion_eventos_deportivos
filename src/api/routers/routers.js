const express = require("express");
const router = express.Router();

router.use("/users", require("./api_routers/users.routers"));
router.use("/events", require("./api_routers/events.routers"));
module.exports = router;