"use strict";
const utils_request = require("../utils/request.js");
function topicDetail() {
  return utils_request.request.request({
    url: "/app/topic/list",
    method: "GET"
  });
}
exports.topicDetail = topicDetail;
