import __nuxt_component_0 from "./Icon.5a89dbdd.js";
import { _ as _imports_0 } from "./logo.f4a21025.js";
import { i as _export_sfc, c as createBlock, w as withCtx, r as resolveComponent, o as openBlock, k as createVNode, j as createBaseVNode, f as createElementBlock, l as renderList, F as Fragment, m as createTextVNode, t as toDisplayString } from "./entry.9eba175a.js";
import "./config.1484998d.js";
const FooterComponent_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  data: () => ({
    socialMedia: [
      {
        name: "Facebook",
        icon: "uil:facebook",
        url: "https://www.facebook.com/profile.php?id=100092701407162"
      },
      // { name: "Twitter", icon: "uil:twitter" },
      {
        name: "Instagram",
        icon: "uil:instagram",
        url: "https://www.instagram.com/inhomerehab01/"
      },
      {
        name: "Linkedin",
        icon: "uil:linkedin",
        url: "https://www.linkedin.com/company/inhome-rehab/"
      }
    ]
  })
};
const _hoisted_1 = { class: "mt-5" };
const _hoisted_2 = ["href"];
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("div", { class: "mt-5" }, " InHome Rehab offers home-based therapy programs to improve quality of life for the patients recovering from the injuries or illness, but often face challenges attending therapy sessions at the center. A team of well qualified, registered group of health professionals will help you to restore your health, right where you are. ", -1);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("div", null, null, -1);
const _hoisted_5 = { class: "my-2 date-footer" };
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("strong", null, "In Home Rehab", -1);
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("div", { class: "bg-white" }, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_0,
    class: "my-2 mt-4 mx-4 footer-img",
    width: "70px",
    alt: ""
  })
], -1);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Icon = __nuxt_component_0;
  const _component_v_col = resolveComponent("v-col");
  const _component_v_row = resolveComponent("v-row");
  const _component_v_divider = resolveComponent("v-divider");
  const _component_v_footer = resolveComponent("v-footer");
  const _component_v_layout = resolveComponent("v-layout");
  return openBlock(), createBlock(_component_v_layout, null, {
    default: withCtx(() => [
      createVNode(_component_v_footer, { class: "footer-main text-center d-flex flex-column" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.socialMedia, (icon) => {
              return openBlock(), createElementBlock("span", {
                key: icon,
                class: "mx-5 footer-icon"
              }, [
                createBaseVNode("a", {
                  class: "social-icon text-primary",
                  href: icon.url
                }, [
                  createVNode(_component_Icon, {
                    name: icon.icon
                  }, null, 8, ["name"])
                ], 8, _hoisted_2)
              ]);
            }), 128))
          ]),
          createVNode(_component_v_row, null, {
            default: withCtx(() => [
              createVNode(_component_v_col, { cols: "12" }, {
                default: withCtx(() => [
                  _hoisted_3
                ]),
                _: 1
              }),
              createVNode(_component_v_col, { cols: "12" }, {
                default: withCtx(() => [
                  _hoisted_4
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_component_v_divider),
          createBaseVNode("div", _hoisted_5, [
            createTextVNode(toDisplayString((/* @__PURE__ */ new Date()).getFullYear()) + " — ", 1),
            _hoisted_6
          ]),
          _hoisted_7
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
const FooterComponent = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  FooterComponent as default
};
