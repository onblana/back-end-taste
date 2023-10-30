"use strict";

const id = document.querySelector("#id"),
  pw = document.querySelector("#pw"),
  loginBtn = document.querySelector("button");

const login = () => {
  const req = {
    id: id.value,
    pw: pw.value,
  };

  fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then(console.log); // .then((res) => console.log(res))과 동일함. 생략이 가능.
};

loginBtn.addEventListener("click", login);
