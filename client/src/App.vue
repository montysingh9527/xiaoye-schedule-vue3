<template>
  <div>App</div>
</template>
<script setup>
import { onMounted } from "vue";
import axios from "axios";

onMounted(async () => {
  const res = await axios("http://localhost:3000/initial_data");
  console.log(res);
});
</script>

<style>
</style>
