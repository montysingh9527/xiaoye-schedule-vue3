import axios from "axios";
import qs from "qs";

/**
 * get请求封装
 * @param {*} url 请求地址
 * @returns
 */
export function httpGet(url) {
  return new Promise((resolve, reject) => {
    axios(url)
      .then((res) => {
        const { code, msg, data } = res.data;
        if (code === 0) {
          resolve(data);
        } else {
          reject(msg);
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
}

/**
 * 封装post请求
 * @param {*} url  请求地址
 * @param {*} body  请求体
 * @returns
 */
export function httpPost(url, body) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, qs.stringify(body))
      .then((res) => {
        const { code, msg, data } = res.data;
        if (code === 0) {
          resolve(data);
        } else {
          reject(msg);
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
}
