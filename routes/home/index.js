"use strict";

const express = require("express");
const router = express.Router();

//home.ctrl.js 받아오기
const ctrl = require("./home.ctrl");

router.get("/", ctrl.home);

router.get("/login", ctrl.login);

module.exports = router;