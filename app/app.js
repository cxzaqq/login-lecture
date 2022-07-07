"use strict";

//모듈
const express = require("express");
const app = express();

//라우팅 파일 설정
const home = require("./src/routes/home");

//앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");

//"/"으로 오면 home으로(./routes/home/index.js)
app.use("/", home);

module.exports = app;