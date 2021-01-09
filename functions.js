const axios = require('axios');

function sum(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function saySomething(word) {
  return 'hi' + word;
}

function checkEmail(email) {
  return email;
}

function checkArray(array) {
  return array;
}

function checkValue(value) {
  return value;
}

async function fetchUser() {
  let data;
  await axios
    .get('https://jsonplaceholder.typicode.com/users/1')
    .then((Response) => Response.data);
  return data;
}

module.exports = {
  sum,
  substract,
  multiply,
  saySomething,
  checkEmail,
  checkArray,
  checkValue,
  fetchUser,
};
