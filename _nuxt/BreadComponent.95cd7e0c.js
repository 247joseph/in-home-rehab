import __nuxt_component_0 from "./Icon.5a89dbdd.js";
import { i as _export_sfc, c as createBlock, w as withCtx, r as resolveComponent, o as openBlock, k as createVNode, j as createBaseVNode, f as createElementBlock, l as renderList, m as createTextVNode, t as toDisplayString, F as Fragment } from "./entry.9eba175a.js";
import "./config.1484998d.js";
const BreadComponent_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  data() {
    return {
      servicesProvided: [
        { name: "Speech Therapy" },
        { name: "Occupational Therapy" }
      ]
    };
  }
};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("div", null, [
  /* @__PURE__ */ createBaseVNode("div", { class: "bread-text mb-1" }, "In Home Rehab"),
  /* @__PURE__ */ createBaseVNode("div", { class: "bread-caption mt-5" }, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni blanditiis voluptate, laborum mollitia, repellendus aperiam ipsum vitae alias voluptatem facere soluta nesciunt. In omnis dolor necessitatibus. Deserunt nisi harum assumenda. ")
], -1);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("div", { class: "bread-text mb-1" }, "Services We Provide", -1);
const _hoisted_3 = { class: "bread-caption mt-5" };
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("div", { class: "bread-text-contact mb-1" }, "Need more help?", -1);
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("div", { class: "bread-caption-contact" }, " Dictum erat nec conubia luctus orci etiam penatibus sed feugiat adipiscing egestas ", -1);
const _hoisted_6 = { class: "mt-4" };
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("h2", null, "Connect Us", -1);
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("h3", null, "8714443989", -1);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_v_card_item = resolveComponent("v-card-item");
  const _component_v_col = resolveComponent("v-col");
  const _component_Icon = __nuxt_component_0;
  const _component_v_row = resolveComponent("v-row");
  const _component_v_card = resolveComponent("v-card");
  return openBlock(), createBlock(_component_v_row, null, {
    default: withCtx(() => [
      createVNode(_component_v_col, {
        cols: "12",
        md: "8"
      }, {
        default: withCtx(() => [
          createVNode(_component_v_card, {
            color: "",
            class: "left-bread pa-5",
            elevation: "10",
            variant: ""
          }, {
            default: withCtx(() => [
              createVNode(_component_v_row, null, {
                default: withCtx(() => [
                  createVNode(_component_v_col, {
                    cols: "12",
                    md: "6"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_card_item, null, {
                        default: withCtx(() => [
                          _hoisted_1
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_col, {
                    cols: "12",
                    md: "6"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_card_item, null, {
                        default: withCtx(() => [
                          createBaseVNode("div", null, [
                            _hoisted_2,
                            createBaseVNode("div", _hoisted_3, [
                              createBaseVNode("ul", null, [
                                (openBlock(true), createElementBlock(Fragment, null, renderList($data.servicesProvided, (service) => {
                                  return openBlock(), createElementBlock("li", {
                                    key: service.name
                                  }, [
                                    createVNode(_component_Icon, { name: "uil:arrow-right" }),
                                    createTextVNode(" " + toDisplayString(service.name), 1)
                                  ]);
                                }), 128))
                              ])
                            ])
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      createVNode(_component_v_col, { md: "4" }, {
        default: withCtx(() => [
          createVNode(_component_v_card, {
            color: "white",
            class: "right-bread pa-5",
            elevation: "10",
            variant: ""
          }, {
            default: withCtx(() => [
              createVNode(_component_v_card_item, null, {
                default: withCtx(() => [
                  createBaseVNode("div", null, [
                    _hoisted_4,
                    _hoisted_5,
                    createBaseVNode("div", _hoisted_6, [
                      createVNode(_component_v_row, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_col, { cols: "3" }, {
                            default: withCtx(() => [
                              createVNode(_component_Icon, {
                                class: "bread-icon-contact",
                                name: "uil:phone"
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, { cols: "9" }, {
                            default: withCtx(() => [
                              _hoisted_7,
                              _hoisted_8
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
const BreadComponent = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  BreadComponent as default
};
