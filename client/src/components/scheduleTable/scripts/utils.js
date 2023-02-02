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
