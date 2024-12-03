const express = require("express");
const router = express.Router();

router.use("/users", require("./api_routers/users.routers"));
module.exports = router;