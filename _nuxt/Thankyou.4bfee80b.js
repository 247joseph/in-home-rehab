import __nuxt_component_0 from "./Icon.5a89dbdd.js";
import { i as _export_sfc, p as useDisplay, c as createBlock, w as withCtx, r as resolveComponent, o as openBlock, k as createVNode, j as createBaseVNode } from "./entry.9eba175a.js";
import "./config.1484998d.js";
const Thankyou_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  setup() {
    const { xs, mdAndUp } = useDisplay();
    return { xs, mdAndUp };
  },
  props: {
    dialogControl: {
      required: true,
      type: Boolean
    }
  },
  methods: {},
  data: () => ({
    dialog: false
  }),
  watch: {
    dialogControl: {
      handler(newValue) {
        this.dialog = newValue;
      },
      immediate: true
    }
  }
};
const _hoisted_1 = { class: "text-center thankyou-icon" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("h1", { class: "my-5 text-center" }, "Thank You !", -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("h4", null, "Your submission is received and we will contact you soon.", -1);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Icon = __nuxt_component_0;
  const _component_v_sheet = resolveComponent("v-sheet");
  const _component_v_dialog = resolveComponent("v-dialog");
  return openBlock(), createBlock(_component_v_dialog, {
    modelValue: _ctx.dialog,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.dialog = $event),
    transition: "dialog-bottom-transition",
    width: "auto"
  }, {
    default: withCtx(() => [
      createVNode(_component_v_sheet, {
        elevation: "2",
        class: "pa-10 bg-primary-background tankyou",
        rounded: "xl"
      }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createVNode(_component_Icon, {
              name: "mdi-check-circle-outline",
              class: "icon-thankyou text-primary-text"
            })
          ]),
          _hoisted_2,
          _hoisted_3
        ]),
        _: 1
      })
    ]),
    _: 1
  }, 8, ["modelValue"]);
}
const Thankyou = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  Thankyou as default
};
