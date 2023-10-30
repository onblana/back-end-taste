"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

// API?
router.get("/", ctrl.output.home);
router.get("/login", ctrl.output.login);
router.post("/login", ctrl.process.login);

module.exports = router; // 외부에서 사용 가능하도록 내보내기 함
