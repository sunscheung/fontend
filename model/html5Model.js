/*
 * @Author: Mr_Wei
 * @Description: HTML5文章模型
 * @Date: 16:58 2019/07/09
 * @Param: html5Model.js
 * @return:
 **/

//  文章每部分由 title, content, hash = title

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const html5model = new Schema({
  coursetype: {
    required: true,
    type: String
  },
  title: {
    required: true,
    type: String
  },
  content: {
    required: true,
    type: String
  }
});

const HTML5Model = mongoose.model("HTML5Model", html5model);
module.exports = HTML5Model;
