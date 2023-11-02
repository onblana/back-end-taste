"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

// API?
router.get("/", ctrl.output.home);
router.get("/login", ctrl.output.login);
router.get("/register", ctrl.output.register);

router.post("/login", ctrl.process.login);
router.post("/register", ctrl.process.register);

module.exports = router; // 외부에서 사용 가능하도록 내보내기 함
