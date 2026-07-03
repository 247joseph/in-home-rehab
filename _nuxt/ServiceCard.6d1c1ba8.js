import { i as _export_sfc, c as createBlock, w as withCtx, r as resolveComponent, o as openBlock, k as createVNode, m as createTextVNode, t as toDisplayString, v as withDirectives, j as createBaseVNode, x as vShow } from "./entry.9eba175a.js";
const ServiceCard_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  props: {
    content: {
      required: true
    }
  },
  data: () => ({
    show: false
  })
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_v_img = resolveComponent("v-img");
  const _component_v_card_title = resolveComponent("v-card-title");
  const _component_v_divider = resolveComponent("v-divider");
  const _component_v_card_text = resolveComponent("v-card-text");
  const _component_v_expand_transition = resolveComponent("v-expand-transition");
  const _component_v_card = resolveComponent("v-card");
  return openBlock(), createBlock(_component_v_card, null, {
    default: withCtx(() => [
      createVNode(_component_v_img, {
        src: $props.content.image,
        height: "200px",
        cover: ""
      }, null, 8, ["src"]),
      createVNode(_component_v_card_title, { class: "service-title" }, {
        default: withCtx(() => [
          createTextVNode(toDisplayString($props.content.title), 1)
        ]),
        _: 1
      }),
      createVNode(_component_v_expand_transition, null, {
        default: withCtx(() => [
          withDirectives(createBaseVNode("div", null, [
            createVNode(_component_v_divider),
            createVNode(_component_v_card_text, { class: "service-text" }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString($props.content.description), 1)
              ]),
              _: 1
            })
          ], 512), [
            [vShow, true]
          ])
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
const ServiceCard = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  ServiceCard as default
};
