<template>
  <div class="schedule-table">
    <table border="1" cellpadding="0">
      <!-- 星期 -->
      <WeekTitle></WeekTitle>
      <tr v-for="item of duration" :key="item.begin_time">
        <!-- 时间 -->
        <DurationTitle :title="item.title"></DurationTitle>
        <!-- 单元格 -->
        <td
          v-for="n in 7"
          :key="n"
          @click="handleTDClick(item.begin_time, n)"
        ></td>
      </tr>
    </table>
  </div>
</template>

<script setup>
import "./styles/index.scss";
import WeekTitle from "./WeekTitle.vue";
import DurationTitle from "./DurationTitle.vue";
import { reactive, toRefs, onMounted } from "vue";
import { getInitialData } from "./scripts/service";
import { useInitialData } from "./scripts/hooks";

const [data, setInitialData, setSchedule] = useInitialData();

onMounted(async () => {
  setInitialData(await getInitialData());
  console.log(data);
});
/**
 * 点击单元格
 * @param {*} beginTime 时间
 * @param {*} weekDay 星期
 */
const handleTDClick = (beginTime, weekDay) => {
  console.log(beginTime, weekDay);
};

const { duration, schedule, course, teacher } = toRefs(data);
</script>

