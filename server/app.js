const express = require("express");
const bodyParser = require("body-parser"); // 请求参数，处理post请求
const { readFileSync, writeFileSync } = require("fs"); // 文件读取
const { resolve } = require("path");

const app = express(); // 执行express返回应用对象

// 处理post请求
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// 设置请求头信息
app.all("*", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST");
  next();
});

const duration = JSON.parse(
  readFileSync(resolve(__dirname, "data/duration.json"), "utf8")
);
const course = JSON.parse(
  readFileSync(resolve(__dirname, "data/course.json"), "utf8")
);
const teacher = JSON.parse(
  readFileSync(resolve(__dirname, "data/teacher.json"), "utf8")
);

// 读取静态数据
app.get("/initial_data", (req, res) => {
  const schedule = JSON.parse(
    readFileSync(resolve(__dirname, "data/schedule.json"), "utf8")
  );
  res.json({
    code: 0,
    msg: "ok",
    data: {
      schedule,
      duration,
      course,
      teacher,
    },
  });
});

app.listen(3000, () => {
  console.log("OK...");
});
