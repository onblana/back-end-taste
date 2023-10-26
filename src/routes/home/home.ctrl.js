"use strict";

const home = (req, res) => {
  res.render("home/index");
};

const login = (req, res) => {
  res.render("home/login");
}

module.exports = {
  home,
  login,
};
// 객체는 key: value쌍으로 이루어지는데,
// key만 넣어주게 되면 자동으로 value가 key와 동일한 값으로 들어감
// ECMA script 문법임
