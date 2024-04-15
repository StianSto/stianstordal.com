const initianLang = "no"
const initianTheme = "dark"

import { browser } from "$app/environment";
import { writable } from "svelte/store";

export const lang = writable(initianLang);
export const theme = writable(initianTheme);

if(browser) {
	const getLangFromLocal = localStorage.getItem('lang')
	const getThemeFromLocal = localStorage.getItem('theme')

	lang.set(getLangFromLocal ? JSON.parse(getLangFromLocal) : initianLang)
	theme.set(getThemeFromLocal ? JSON.parse(getThemeFromLocal) : initianTheme)
	lang.subscribe((value) => localStorage.setItem("lang", JSON.stringify(value)));
	theme.subscribe((value) => localStorage.setItem("theme", JSON.stringify(value)));
}