"use strict";
const common_vendor = require("../common/vendor.js");
const store = common_vendor.createStore({
  state: {
    //存放状态
    "username": "foo",
    "age": 18,
    "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI2MjgxIiwiaWF0IjoxNzMyNjk0MzMzLCJleHAiOjE3MzMyOTkxMzN9.Lu46j_uOGCwugLaHSze0DifxqA4KTdsK0-jCjZr2eCJ-YFgGNjbh14GxHJNIbrohUJqcdEe7lHrYrUisL57RSw"
  },
  mutations: {
    add(state) {
      state.age += 2;
    },
    setToken(state, n) {
      state.token = token;
    }
  }
});
exports.store = store;
