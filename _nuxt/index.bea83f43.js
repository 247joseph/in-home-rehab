import HeaderComponent from "./HeaderComponent.049687e4.js";
import FooterComponent from "./FooterComponent.355ec40e.js";
import Carousel from "./Carousel.d4780391.js";
import Welcome from "./Welcome.5285be82.js";
import BreadComponent from "./BreadComponent.95cd7e0c.js";
import ServiceProvided from "./ServiceProvided.877854ac.js";
import { i as _export_sfc, f as createElementBlock, j as createBaseVNode, k as createVNode, o as openBlock, r as resolveComponent } from "./entry.9eba175a.js";
import "./Icon.5a89dbdd.js";
import "./config.1484998d.js";
import "./CarriersForm.e155253e.js";
import "./Thankyou.4bfee80b.js";
import "./logo.f4a21025.js";
import "./WelcomeForm.1b7027cf.js";
import "./ServiceCard.6d1c1ba8.js";
const index_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  components: {
    HeaderComponent,
    Carousel,
    Welcome,
    FooterComponent,
    BreadComponent,
    ServiceProvided
  },
  data: () => ({ value: 0 }),
  methods: {
    scrolling() {
      console.log("hey");
    }
  }
};
const _hoisted_1 = { class: "header-content" };
const _hoisted_2 = { class: "mt-n10 mt-md-10 px-5 px-md-10" };
const _hoisted_3 = { class: "mt-5" };
const _hoisted_4 = { class: "welcome-div px-10 pb-15" };
const _hoisted_5 = {
  class: "px-10",
  id: "service-provided"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_header_component = resolveComponent("header-component");
  const _component_carousel = resolveComponent("carousel");
  const _component_welcome = resolveComponent("welcome");
  const _component_service_provided = resolveComponent("service-provided");
  const _component_footer_component = resolveComponent("footer-component");
  return openBlock(), createElementBlock("div", null, [
    createBaseVNode("div", _hoisted_1, [
      createVNode(_component_header_component)
    ]),
    createBaseVNode("div", _hoisted_2, [
      createVNode(_component_carousel)
    ]),
    createBaseVNode("div", _hoisted_3, [
      createBaseVNode("div", _hoisted_4, [
        createVNode(_component_welcome)
      ]),
      createBaseVNode("div", _hoisted_5, [
        createVNode(_component_service_provided)
      ])
    ]),
    createVNode(_component_footer_component)
  ]);
}
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  index as default
};
