"use strict";

const UserStorage = require("../../models/UserStorage");

const output = {
  home: (req, res) => {
    res.render("home/index");
  },
  
  login: (req, res) => {
    res.render("home/login");
  },

  register: (req, res) => {
    res.render("home/register");
  },
};

const process = {
  login: (req, res) => {
    const id = req.body.id,
      pw = req.body.pw;

    const users = UserStorage.getUsers("id", "pw");

    const response = {};
    if (users.id.includes(id)) {
      const idx = users.id.indexOf(id);
      if (users.pw[idx] === pw) {
        response.success = true;
        return res.json(response);
      }
    }

    response.success = false;
    response.msg = "로그인에 실패하였습니다.";
    return res.json(response);
  },
}

module.exports = {
  output,
  process,
};
// 객체는 key: value쌍으로 이루어지는데,
// key만 넣어주게 되면 자동으로 value가 key와 동일한 값으로 들어감
// ECMA script 문법임
