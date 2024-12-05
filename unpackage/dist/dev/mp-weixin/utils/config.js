"use strict";
const baseUrl = "47.96.85.147:8082";
const domain = "http://" + baseUrl + "/app/";
const uploadUrl = domain + "file/upload";
const websocketUrl = "ws://47.96.85.147:8081/ws";
const imagePreUrl = "http://qn.muaiweiyi.com/";
const emojiPreUrl = "http://qn.muaiweiyi.com/emoji/";
const wxMpAppId = "wx7d9a0d61c58f8439";
const smsClose = false;
const aesOpen = false;
const aesKey = "ECPB2CABCDEFGHIJ";
const aesIv = "ECPB2CABCDEFGHIJ";
const config = {
  baseUrl,
  domain,
  uploadUrl,
  websocketUrl,
  imagePreUrl,
  emojiPreUrl,
  wxMpAppId,
  smsClose,
  aesOpen,
  aesKey,
  aesIv
};
exports.config = config;
