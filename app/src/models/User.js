"use strict";

const UserStorage = require("./UserStorage");

class User {
  constructor(body) {
    this.body = body;
  }

  login() {
    const { id, pw } = UserStorage.getUserInfo("id");
    //
  }
}

module.exports = User;
