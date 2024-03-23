import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZDliMzY0NjE0YTc3YjQ2MTE4NzQ5NiIsImFkbWluIjp0cnVlLCJpYXQiOjE3MTExODE2NDUsImV4cCI6MTcxMTQ0MDg0NX0.g4djrm-NiuAku2IzjdVqRlQ9yxmNxFo7u0C-q6W7Rsw";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
