import { K as defuFn, D as useNuxtApp, L as reactive } from "./entry.9eba175a.js";
const inlineConfig = {};
const __appConfig = /* @__PURE__ */ defuFn(inlineConfig);
function useAppConfig() {
  const nuxtApp = useNuxtApp();
  if (!nuxtApp._appConfig) {
    nuxtApp._appConfig = reactive(__appConfig);
  }
  return nuxtApp._appConfig;
}
export {
  useAppConfig as u
};
