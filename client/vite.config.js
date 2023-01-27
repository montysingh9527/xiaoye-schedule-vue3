import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    // 导入时想要省略的扩展名列表
    extensions: [".vue", ".js"],
  },
});
