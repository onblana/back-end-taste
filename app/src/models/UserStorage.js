"use strict";

class UserStorage {

  // 이런 데이터들은 나중에 데이터베이스에 저장될 것임
  static #users = { // 변수명에 #을 붙이면 private변수가 됨. (TS에선 private 키워드 사용 가능)
    id: ["id1", "id2", "id3"],
    pw: ["1111", "2222", "3333"],
    name: ["우리밋", "나개발", "김팀장"],
  };

  static getUsers(...fields) { // 나중에 데이터베이스에 접근하는 함수로 바뀔것임
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }
}

module.exports = UserStorage;