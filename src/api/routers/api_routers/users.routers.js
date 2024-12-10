const express = require ("express");
const router = express.Router();

const { register, login, getProfile } = require("../../controllers/users.controllers");
const { checkToken } = require("../../middlewares/auth");

router.post("/register", register);
router.post("/login", login);
router.get("/profile", checkToken, getProfile);

module.exports = router;