<template>
  <div class="schedule-card">
    <i @click.stop="removeCard" class="icon">&times;</i>
    <p>{{ weekDay }} {{ beginTime }}</p>
    <p>[{{ course }}]</p>
    <p>{{ teacher }}</p>
  </div>
</template>

<script setup>
import { computed, toRefs } from "vue";
import { weekdayToChinese, timestampToTime } from "./scripts/utils";
import "./styles/schedule-card.scss";

const props = defineProps({
  data: Object,
});

// 删除卡片
const removeCard = () => {
    console.log("删除")
};

// 显示周几
const weekDay = computed(() => weekdayToChinese(props.data.weekday));
// 显示时间
const beginTime = computed(() => timestampToTime(props.data.begin_time));

const { course, teacher } = toRefs(props.data);
</script>
