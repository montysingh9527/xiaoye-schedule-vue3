# xiaoye-schedule-vue3
Vue3课程表排课系统

### 1、课程表 -> 点击单元格 —> 新增课程 / 编辑课程 -> 课程 / 老师

### 2、数据
```
    - 周的数据
        - {
            title: 周一,
            id: 1
        }
    - 时间段
        {
            title: "08:00 - 08:50",
            "begin_time": timeStamp
        }
        timeStamp_id
    - 课程数据
        {
            id: 1,
            name: "语文"
        }
    - 老师数据
        {
            id: 1,
            name: "李老师"
        }
    - 计划数据
        {
            id,
            begin_time,
            weekday,
            course,
            teacher
        }
        // 策略模式：组装后数据   开始时间_星期
        {
            "1666486800_1":{
                id,
                begin_time,
                weekday,
                course,
                teacher
            }
        }
```

