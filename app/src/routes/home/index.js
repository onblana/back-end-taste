"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

// API?
router.get("/", ctrl.home);
router.get("/login", ctrl.login);
// router.post("/login", ctrl.login);

module.exports = router; // 외부에서 사용 가능하도록 내보내기 함
