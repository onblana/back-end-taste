"use strict";

const users = {
  id: ["id", "idid", "onblana"],
  pw: ["1111", "2222", "3333"],
};

const output = {
  home: (req, res) => {
    res.render("home/index");
  },
  
  login: (req, res) => {
    res.render("home/login");
  },
};

const process = {
  login: (req, res) => {
    const id = req.body.id,
    pw = req.body.pw;

    if (users.id.includes(id)) {
      const idx = users.id.indexOf(id);
      if (users.pw[idx] === pw) {
        return res.json({
          success: true,
        });
      }
    }

    return res.json({
      success: false,
      msg: "로그인에 실패하였습니다.",
    });
  },
}

module.exports = {
  output,
  process,
};
// 객체는 key: value쌍으로 이루어지는데,
// key만 넣어주게 되면 자동으로 value가 key와 동일한 값으로 들어감
// ECMA script 문법임
