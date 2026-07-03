import WelcomeForm from "./WelcomeForm.1b7027cf.js";
import { i as _export_sfc, f as createElementBlock, k as createVNode, w as withCtx, r as resolveComponent, o as openBlock, y as pushScopeId, z as popScopeId, j as createBaseVNode, m as createTextVNode } from "./entry.9eba175a.js";
import "./Thankyou.4bfee80b.js";
import "./Icon.5a89dbdd.js";
import "./config.1484998d.js";
const Welcome_vue_vue_type_style_index_0_scoped_6d1e6ece_lang = "";
const _sfc_main = {
  components: { WelcomeForm },
  data() {
    return {
      welcomeItems: [
        {
          title: "Science Based Research",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
        },
        {
          title: "Science Based Research",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
        },
        {
          title: "Science Based Research",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
        }
      ]
    };
  }
};
const _withScopeId = (n) => (pushScopeId("data-v-6d1e6ece"), n = n(), popScopeId(), n);
const _hoisted_1 = {
  class: "mt-10 welcome-main",
  id: "in-home-rehab"
};
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", null, [
  /* @__PURE__ */ createBaseVNode("h4", { class: "welcome-who" }, "Who We Are"),
  /* @__PURE__ */ createBaseVNode("h2", { class: "heading-text" }, "Welcome to InHome Rehab"),
  /* @__PURE__ */ createBaseVNode("p", { class: "paragraph-text mt-5" }, [
    /* @__PURE__ */ createTextVNode(" As healthcare professionals, we understand the importance of timely and effective rehabilitation for patients recovering from injuries or illnesses. However, we also recognize that attending therapy sessions at hospitals or therapy centers can be challenging for many individuals due to personal or health-related reasons. That's why we founded InHome Rehab, a service that brings rehabilitation to your doorstep. Our team of qualified professionals is dedicated to delivering high-quality rehab services in the comfort of your own home. With our guidance and support, we aim to improve your quality of life and "),
    /* @__PURE__ */ createBaseVNode("span", { id: "welcom-form-id" }, " help you achieve your recovery goals. Let's work together to build a brighter future for you and your loved ones. ")
  ])
], -1));
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_v_col = resolveComponent("v-col");
  const _component_welcome_form = resolveComponent("welcome-form");
  const _component_v_row = resolveComponent("v-row");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createVNode(_component_v_row, { class: "align-center" }, {
      default: withCtx(() => [
        createVNode(_component_v_col, {
          cols: "12",
          md: "12"
        }, {
          default: withCtx(() => [
            createVNode(_component_v_row, { class: "align-center" }, {
              default: withCtx(() => [
                createVNode(_component_v_col, {
                  cols: "12",
                  md: "7"
                }, {
                  default: withCtx(() => [
                    _hoisted_2
                  ]),
                  _: 1
                }),
                createVNode(_component_v_col, {
                  cols: "12",
                  md: "5"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_welcome_form)
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
  ]);
}
const Welcome = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-6d1e6ece"]]);
export {
  Welcome as default
};
