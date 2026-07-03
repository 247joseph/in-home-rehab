import __nuxt_component_0 from "./Icon.5a89dbdd.js";
import CarriersForm from "./CarriersForm.e155253e.js";
import { i as _export_sfc, p as useDisplay, c as createBlock, w as withCtx, r as resolveComponent, o as openBlock, j as createBaseVNode, k as createVNode, f as createElementBlock, l as renderList, m as createTextVNode, t as toDisplayString, F as Fragment, s as createCommentVNode, v as withDirectives, x as vShow, B as mergeProps } from "./entry.9eba175a.js";
import { _ as _imports_0 } from "./logo.f4a21025.js";
import "./config.1484998d.js";
import "./Thankyou.4bfee80b.js";
const HeaderComponent_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  setup() {
    const { xs, mdAndUp } = useDisplay();
    return { xs, mdAndUp };
  },
  data() {
    return {
      scrollHeight: "",
      carrierPop: false,
      drawer: false,
      items: [
        {
          title: "InHome Rehab",
          value: "foo",
          to: "#in-home-rehab"
        },
        {
          title: "Service We Provide",
          value: "bar",
          to: "#service-we-provide"
        },
        {
          title: "Why Home Therapy",
          value: "fizz",
          to: "#why-home-therapy"
        }
        // {
        //   title: "Connect With Us",
        //   value: "connect",
        // },
        // {
        //   title: "Carriers",
        //   value: "carrier",
        // },
      ]
    };
  },
  methods: {
    closeIcon() {
      this.carrierPop = false;
    },
    // connectWithUs(event) {
    //   // this.drawer=false
    //   let targetId = event.currentTarget;
    //   console.log(targetId);
    // },
    onClickNav(item) {
      console.log("clikd nav", item);
      if (!item) {
        return;
      }
      this.drawer = false;
      if (item === "carrier") {
        this.carrierPop = true;
        return;
      }
    }
  },
  components: { CarriersForm }
};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h2", { class: "text-primary ml-5 mt-5" }, "In Home Rehab", -1);
const _hoisted_2 = { class: "mt-5" };
const _hoisted_3 = ["href"];
const _hoisted_4 = { class: "drawer-btn" };
const _hoisted_5 = { class: "mt-5" };
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("img", {
  src: _imports_0,
  class: "mt-2",
  width: "160px",
  alt: ""
}, null, -1);
const _hoisted_7 = { class: "text-end" };
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("span", { class: "ml-2 phone-text" }, "8891575227 / 9961132071", -1);
const _hoisted_9 = { class: "text-end mt-2" };
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("a", {
  class: "ml-2 mail-text",
  href: "mailto: inhomerehab01@gmail.com"
}, "inhomerehab01@gmail.com", -1);
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("img", {
  src: _imports_0,
  class: "mt-n2 ml-n7",
  width: "160px",
  alt: ""
}, null, -1);
const _hoisted_12 = { class: "float-right mt-n5 mr-n10" };
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("a", {
  class: "ml-2 phone-text",
  href: "tel:+91-8891575227"
}, "+918891575227 (speech therapy)", -1);
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("a", {
  class: "ml-2 phone-text",
  href: "tel:+91-9961132071"
}, "+919961132071 (occupational therapy)", -1);
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("a", {
  class: "ml-2 phone-text",
  href: "mailto: inhomerehab01@gmail.com"
}, "inhomerehab01@gmail.com", -1);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Icon = __nuxt_component_0;
  const _component_v_list_item_title = resolveComponent("v-list-item-title");
  const _component_v_list_item = resolveComponent("v-list-item");
  const _component_v_btn = resolveComponent("v-btn");
  const _component_v_navigation_drawer = resolveComponent("v-navigation-drawer");
  const _component_v_col = resolveComponent("v-col");
  const _component_CarriersForm = resolveComponent("CarriersForm");
  const _component_v_row = resolveComponent("v-row");
  const _component_v_list = resolveComponent("v-list");
  const _component_v_menu = resolveComponent("v-menu");
  const _component_v_app_bar_nav_icon = resolveComponent("v-app-bar-nav-icon");
  const _component_v_app_bar = resolveComponent("v-app-bar");
  const _component_v_layout = resolveComponent("v-layout");
  return openBlock(), createBlock(_component_v_layout, null, {
    default: withCtx(() => [
      !$setup.mdAndUp ? (openBlock(), createBlock(_component_v_navigation_drawer, {
        key: 0,
        modelValue: $data.drawer,
        "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.drawer = $event),
        location: "right"
      }, {
        default: withCtx(() => [
          createBaseVNode("div", null, [
            createVNode(_component_Icon, {
              name: "mdi-close",
              onClick: _cache[0] || (_cache[0] = ($event) => $data.drawer = !$data.drawer),
              class: "icon-close text-primary-text float-right mr-5 mt-5"
            })
          ]),
          _hoisted_1,
          createBaseVNode("div", _hoisted_2, [
            (openBlock(true), createElementBlock(Fragment, null, renderList($data.items, (item, i) => {
              return openBlock(), createBlock(_component_v_list_item, { key: i }, {
                default: withCtx(() => [
                  createBaseVNode("a", {
                    href: item.to,
                    class: "text-primary",
                    style: { "text-decoration": "none" }
                  }, [
                    createVNode(_component_v_list_item_title, {
                      class: "ml-5 list-item",
                      onClick: ($event) => $options.onClickNav(item.value)
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_Icon, {
                          name: "mdi-greater-than",
                          class: "mr-2 text-primary"
                        }),
                        createTextVNode(toDisplayString(item.title), 1)
                      ]),
                      _: 2
                    }, 1032, ["onClick"])
                  ], 8, _hoisted_3)
                ]),
                _: 2
              }, 1024);
            }), 128))
          ]),
          createBaseVNode("div", _hoisted_4, [
            createBaseVNode("div", null, [
              createBaseVNode("a", {
                href: "#welcom-form-id",
                onClick: _cache[1] || (_cache[1] = ($event) => $data.drawer = false),
                style: { "text-decoration": "none" }
              }, [
                createVNode(_component_v_btn, { class: "header-btn bg-secondary" }, {
                  default: withCtx(() => [
                    createTextVNode(" Connect with Us")
                  ]),
                  _: 1
                })
              ])
            ]),
            createBaseVNode("div", _hoisted_5, [
              createVNode(_component_v_btn, {
                onClick: _cache[2] || (_cache[2] = ($event) => {
                  $data.carrierPop = !$data.carrierPop;
                  $data.drawer = !$data.drawer;
                }),
                class: "header-btn bg-secondary"
              }, {
                default: withCtx(() => [
                  createTextVNode(" careers")
                ]),
                _: 1
              })
            ])
          ])
        ]),
        _: 1
      }, 8, ["modelValue"])) : createCommentVNode("", true),
      createVNode(_component_v_app_bar, {
        class: "app-bar",
        flat: false,
        "scroll-target": "#scrolling-techniques-6"
      }, {
        default: withCtx(() => [
          withDirectives(createVNode(_component_v_row, { class: "px-10 py-5 app-bar-row align-center" }, {
            default: withCtx(() => [
              createVNode(_component_v_col, null, {
                default: withCtx(() => [
                  _hoisted_6
                ]),
                _: 1
              }),
              createVNode(_component_v_col, { "justify-center": "" }, {
                default: withCtx(() => [
                  createBaseVNode("p", {
                    onClick: _cache[4] || (_cache[4] = ($event) => $data.carrierPop = true),
                    class: "text-center carrier-text"
                  }, " Careers "),
                  createVNode(_component_CarriersForm, {
                    carrierPop: $data.carrierPop,
                    onCloseIcon: $options.closeIcon
                  }, null, 8, ["carrierPop", "onCloseIcon"])
                ]),
                _: 1
              }),
              createVNode(_component_v_col, null, {
                default: withCtx(() => [
                  createBaseVNode("div", null, [
                    createBaseVNode("div", _hoisted_7, [
                      createVNode(_component_Icon, {
                        class: "header-icon-1",
                        name: "uil:phone"
                      }),
                      _hoisted_8
                    ]),
                    createBaseVNode("div", _hoisted_9, [
                      createVNode(_component_Icon, {
                        name: "mdi-email",
                        class: "header-icon"
                      }),
                      _hoisted_10
                    ])
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 512), [
            [vShow, $setup.mdAndUp]
          ]),
          withDirectives(createVNode(_component_v_row, { class: "px-10 py-5 app-bar-row align-center" }, {
            default: withCtx(() => [
              createVNode(_component_v_col, null, {
                default: withCtx(() => [
                  _hoisted_11
                ]),
                _: 1
              }),
              createVNode(_component_v_col, null, {
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_12, [
                    createVNode(_component_v_menu, null, {
                      activator: withCtx(({ props }) => [
                        createVNode(_component_Icon, mergeProps(props, {
                          class: "header-icon-1",
                          name: "uil:phone"
                        }), null, 16)
                      ]),
                      default: withCtx(() => [
                        createVNode(_component_v_list, { elevation: "3" }, {
                          default: withCtx(() => [
                            createVNode(_component_v_list_item, null, {
                              default: withCtx(() => [
                                createVNode(_component_v_list_item_title, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_Icon, {
                                      class: "header-icon-1",
                                      name: "uil:phone"
                                    }),
                                    _hoisted_13
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_list_item, null, {
                              default: withCtx(() => [
                                createVNode(_component_v_list_item_title, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_Icon, {
                                      class: "header-icon-1",
                                      name: "uil:phone"
                                    }),
                                    _hoisted_14
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_list_item, null, {
                              default: withCtx(() => [
                                createVNode(_component_v_list_item_title, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_Icon, {
                                      name: "mdi-email",
                                      class: "header-icon"
                                    }),
                                    _hoisted_15
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
                    createVNode(_component_v_app_bar_nav_icon, {
                      variant: "text",
                      class: "ml-4 bar-icon",
                      onClick: _cache[5] || (_cache[5] = ($event) => $data.drawer = !$data.drawer)
                    })
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 512), [
            [vShow, !$setup.mdAndUp]
          ])
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
const HeaderComponent = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  HeaderComponent as default
};
