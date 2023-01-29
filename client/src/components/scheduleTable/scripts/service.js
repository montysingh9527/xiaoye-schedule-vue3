import { httpGet, httpPost } from "../../../libs/http";

export async function getInitialData() {
  const { schedule, duration, course, teacher } = await httpGet(
    "http://localhost:3000/initial_data"
  );

  return Promise.resolve({
    schedule,
    duration,
    course,
    teacher,
  });
}
