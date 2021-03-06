import Vue from "vue";
import VueI18n from "vue-i18n";
import zh from "@/locale/zh";
import en from "@/locale/en";

Vue.use(VueI18n);

const messages = {
  zh: zh,
  en: en
};

const i18n = new VueI18n({
  locale: "en",
  fallbackLocale: "zh",
  messages
});

export default i18n;
