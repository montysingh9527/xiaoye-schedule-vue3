/**
 * 格式化数据
 * @param {*} data 数据源
 * @returns
 */
export function formatScheduleData(data) {
  return data.reduce((prev, cur) => {
    const beginTime = cur.begin_time;
    const weekDay = cur.weekday;
    prev[`${beginTime}_${weekDay}`] = cur;
    return prev;
  }, {});
}

/**
 * 格式化星期
 * @param {*} number
 * @returns
 */
export function weekdayToChinese(number) {
  switch (number) {
    case 1:
      return "周一";
    case 2:
      return "周二";
    case 3:
      return "周三";
    case 4:
      return "周四";
    case 5:
      return "周五";
    case 6:
      return "周六";
    case 7:
      return "周日";
  }
}

/**
 * 时间格式化
 * @param {*} timestamp 秒
 * @returns 时分
 */
export function timestampToTime(timestamp) {
  // 转换为毫秒
  const d = new Date(timestamp * 1000);
  const h = addZero(d.getHours());
  const m = addZero(d.getMinutes());
  // 小于10补0
  function addZero(value) {
    return value < 10 ? "0" + value : value;
  }
  return `${h}:${m}`;
}
