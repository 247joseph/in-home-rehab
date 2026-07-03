import { a as defineComponent, b as useCssVars, e as computed, o as openBlock, f as createElementBlock, h as normalizeStyle, u as unref, i as _export_sfc } from "./entry.9eba175a.js";
import { u as useAppConfig } from "./config.1484998d.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "IconCSS",
  props: {
    name: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    var _a;
    const props = __props;
    useCssVars((_ctx) => ({
      "71ded496": unref(iconUrl)
    }));
    const appConfig = useAppConfig();
    ((_a = appConfig == null ? void 0 : appConfig.nuxtIcon) == null ? void 0 : _a.aliases) || {};
    const iconName = computed(() => {
      var _a2;
      return (((_a2 = appConfig == null ? void 0 : appConfig.nuxtIcon) == null ? void 0 : _a2.aliases) || {})[props.name] || props.name;
    });
    const iconUrl = computed(() => `url('https://api.iconify.design/${iconName.value.replace(":", "/")}.svg')`);
    const sSize = computed(() => {
      var _a2, _b, _c;
      if (!props.size && typeof ((_a2 = appConfig.nuxtIcon) == null ? void 0 : _a2.size) === "boolean" && !((_b = appConfig.nuxtIcon) == null ? void 0 : _b.size)) {
        return void 0;
      }
      const size = props.size || ((_c = appConfig.nuxtIcon) == null ? void 0 : _c.size) || "1em";
      if (String(Number(size)) === size) {
        return `${size}px`;
      }
      return size;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", {
        style: normalizeStyle({ width: unref(sSize), height: unref(sSize) })
      }, null, 4);
    };
  }
});
const IconCSS_vue_vue_type_style_index_0_scoped_11604bcf_lang = "";
const IconCSS = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-11604bcf"]]);
export {
  IconCSS as default
};
