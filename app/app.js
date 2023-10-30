"use strict";

// 모듈
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// 라우팅
const home = require("./src/routes/home");

// 앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs"); // ejs는 많이 사용하는 view엔진 중 하나로 HTML과 비슷
app.use(express.static(`${__dirname}/src/public`)); // 정적 경로 추가를 위한 미들웨어 추가. app.js의 현재위치/src/public를 정적 경로로 추가하겠다는 뜻
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true})) // URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결용 미들웨어 등록.

app.use("/", home); // use는 미들웨어를 등록하는 메서드

module.exports = app;