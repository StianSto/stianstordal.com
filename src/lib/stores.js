import { writable } from "svelte/store";

export const lang = writable(JSON.parse(localStorage.getItem("lang")) || "no");
export const theme = writable(
  JSON.parse(localStorage.getItem("theme")) || "light"
);

lang.subscribe((value) => localStorage.setItem("lang", JSON.stringify(value)));
theme.subscribe((value) =>
  localStorage.setItem("theme", JSON.stringify(value))
);
