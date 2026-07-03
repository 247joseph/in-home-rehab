import __nuxt_component_0 from "./Icon.5a89dbdd.js";
import Thankyou from "./Thankyou.4bfee80b.js";
import { i as _export_sfc, p as useDisplay, c as createBlock, w as withCtx, r as resolveComponent, o as openBlock, k as createVNode, A as withModifiers, j as createBaseVNode, v as withDirectives, t as toDisplayString, m as createTextVNode, x as vShow, f as createElementBlock, s as createCommentVNode } from "./entry.9eba175a.js";
import "./config.1484998d.js";
const CarriersForm_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  components: { Thankyou },
  props: {
    carrierPop: {
      required: true,
      type: Boolean
    }
  },
  setup() {
    const { xs, mdAndUp } = useDisplay();
    return { xs, mdAndUp };
  },
  watch: {
    carrierPop: {
      handler(newValue) {
        this.dialog = newValue;
      },
      immediate: true
    }
  },
  methods: {
    closeIcon() {
      console.log("clicked");
      this.dialog = false;
      this.$emit("closeIcon");
    },
    formSubmit() {
      console.log("submit");
      if (!this.specialization) {
        this.errrorMsg = "Please select Area of specialization";
        setTimeout(() => {
          this.errrorMsg = "";
        }, 2e3);
        return;
      }
      if (!this.location) {
        this.errrorMsg = "Please select your location";
        setTimeout(() => {
          this.errrorMsg = "";
        }, 2e3);
        return;
      }
      this.btnLoading = true;
      let occupationalUrl = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSf2h79X0f-TNiTjoIeroOp5poQiZZemDY7s5JMOeey4yUX-8w/formResponse";
      let speechUrl = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSe4RQUa3RlKfywU0ZRr6XOYf-tbF4qffG8R2zWEydtrXOVpRQ/formResponse";
      let url = "";
      let OccupationalForm = this.$refs.formOccupational.$el;
      let speechForm = this.$refs.formSpeech.$el;
      let form = "";
      if (this.specialization === "Speech Language Pathologist") {
        form = speechForm;
        url = speechUrl;
      } else if (this.specialization === "Occupational Therapist") {
        form = OccupationalForm;
        url = occupationalUrl;
      } else {
        return;
      }
      let formData = new FormData(form);
      console.log(formData);
      fetch(url, {
        mode: "no-cors",
        headers: {
          "Access-Control-Allow-Origin": "*"
        },
        method: "post",
        body: formData
      }).then((data) => {
        console.log("success", data);
        if (this.specialization === "Speech Language Pathologist") {
          this.$refs.formSpeech.reset();
        } else {
          this.$refs.formOccupational.reset();
        }
        this.btnLoading = false;
        this.dialog = false;
        this.dialogControl = true;
        setTimeout(() => {
          this.dialogControl = false;
        }, 3e3);
      }).catch((e) => {
        console.log("error", e);
        this.btnLoading = false;
      });
    }
  },
  data: () => ({
    errrorMsg: "",
    dialog: true,
    dialogControl: false,
    name: "",
    btnLoading: false,
    nameRules: [
      (value) => {
        if ((value == null ? void 0 : value.length) > 3)
          return true;
        return "Name must be at least 3 characters.";
      }
    ],
    phoneRules: [
      (value) => {
        if (/^([+]\d{2})?\d{10}$/.test(value))
          return true;
        return "Must be a valid phone no";
      }
    ],
    phoneNo: "",
    specialization: "",
    location: "",
    lastNameRules: [
      (value) => {
        if (/[^0-9]/.test(value))
          return true;
        return "Last name can not contain digits.";
      }
    ],
    valid: false,
    locations: [
      { title: "Alappuzha", value: "Alappuzha" },
      { title: "Ernakulam", value: "Ernakulam" },
      { title: "Idukki", value: "Idukki" },
      { title: "Kannur", value: "Kannur" },
      { title: "Kasaragod", value: "Kasaragod" },
      { title: "Kollam", value: "Kollam" },
      { title: "Kottayam", value: "Kottayam" },
      { title: "Kozhikode", value: "Kozhikode" },
      { title: "Malappuram", value: "Malappuram" },
      { title: "Palakkad", value: "Palakkad" },
      { title: "Pathanamthitta", value: "Pathanamthitta" },
      { title: "Thiruvananthapuram", value: "Thiruvananthapuram" },
      { title: "Thrissur", value: "Thrissur" },
      { title: "Wayanad", value: "Wayanad" }
    ]
  })
};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h2", { class: "text-center text-primary" }, " Opportunities Across All Career Stages ", -1);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("div", { class: "px-16 mt-2" }, [
  /* @__PURE__ */ createBaseVNode("hr")
], -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("p", null, "Area of specialization", -1);
const _hoisted_4 = { class: "text-red" };
const _hoisted_5 = { class: "form-user-btn mt-2" };
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("p", null, "Area of specialization", -1);
const _hoisted_7 = { class: "text-red" };
const _hoisted_8 = { class: "form-user-btn mt-2" };
const _hoisted_9 = {
  key: 0,
  class: "mt-5"
};
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("p", { class: "text-center" }, " Let us know more about you by contacting our talent Acquisition team in 8891575227 / 9961132071 ", -1);
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("p", { class: "mt-5 text-center" }, "Emai Us on inhomerehab01@gmail.com", -1);
const _hoisted_12 = [
  _hoisted_10,
  _hoisted_11
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Icon = __nuxt_component_0;
  const _component_v_text_field = resolveComponent("v-text-field");
  const _component_v_radio = resolveComponent("v-radio");
  const _component_v_radio_group = resolveComponent("v-radio-group");
  const _component_v_autocomplete = resolveComponent("v-autocomplete");
  const _component_v_btn = resolveComponent("v-btn");
  const _component_v_form = resolveComponent("v-form");
  const _component_thankyou = resolveComponent("thankyou");
  const _component_v_sheet = resolveComponent("v-sheet");
  const _component_v_dialog = resolveComponent("v-dialog");
  return openBlock(), createBlock(_component_v_dialog, {
    modelValue: _ctx.dialog,
    "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => _ctx.dialog = $event),
    transition: "dialog-bottom-transition",
    width: !$setup.mdAndUp ? "" : "auto",
    persistent: ""
  }, {
    default: withCtx(() => [
      createVNode(_component_v_sheet, {
        elevation: "2",
        class: "pa-10 bg-primary-background",
        rounded: "xl"
      }, {
        default: withCtx(() => [
          createVNode(_component_Icon, {
            onClick: $options.closeIcon,
            name: "mdi-close",
            class: "icon-close float-right"
          }, null, 8, ["onClick"]),
          _hoisted_1,
          _hoisted_2,
          createVNode(_component_v_form, {
            modelValue: _ctx.valid,
            "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => _ctx.valid = $event),
            ref: "formSpeech",
            class: "mt-5",
            onSubmit: withModifiers($options.formSubmit, ["prevent"])
          }, {
            default: withCtx(() => [
              createVNode(_component_v_text_field, {
                modelValue: _ctx.name,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.name = $event),
                label: "Name",
                variant: "outlined",
                rules: _ctx.nameRules,
                name: "entry.1954011657"
              }, null, 8, ["modelValue", "rules"]),
              createVNode(_component_v_text_field, {
                modelValue: _ctx.phoneNo,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.phoneNo = $event),
                label: "Phone No",
                variant: "outlined",
                type: "number",
                name: "entry.1851117419",
                rules: _ctx.phoneRules
              }, null, 8, ["modelValue", "rules"]),
              createBaseVNode("div", null, [
                _hoisted_3,
                createBaseVNode("div", null, [
                  createVNode(_component_v_radio_group, {
                    modelValue: _ctx.specialization,
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.specialization = $event),
                    inline: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_radio, {
                        label: "Speech Language Pathologist",
                        value: "Speech Language Pathologist"
                      }),
                      createVNode(_component_v_radio, {
                        label: "Occupational Therapist",
                        value: "Occupational Therapist"
                      })
                    ]),
                    _: 1
                  }, 8, ["modelValue"])
                ])
              ]),
              withDirectives(createVNode(_component_v_text_field, {
                name: "entry.2106787915",
                modelValue: _ctx.specialization,
                "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => _ctx.specialization = $event)
              }, null, 8, ["modelValue"]), [
                [vShow, false]
              ]),
              createVNode(_component_v_autocomplete, {
                label: "Location",
                items: [
                  "Alappuzha",
                  "Ernakulam",
                  "Idukki",
                  "Kannur",
                  "Kasaragod",
                  "Kollam",
                  "Kottayam",
                  "Kozhikode",
                  "Malappuram",
                  "Palakkad",
                  "Pathanamthitta",
                  "Thiruvananthapuram",
                  "Thrissur",
                  "Wayanad"
                ],
                variant: "outlined",
                modelValue: _ctx.location,
                "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => _ctx.location = $event)
              }, null, 8, ["modelValue"]),
              withDirectives(createVNode(_component_v_text_field, {
                name: "entry.497627933",
                modelValue: _ctx.location,
                "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => _ctx.location = $event)
              }, null, 8, ["modelValue"]), [
                [vShow, false]
              ]),
              createBaseVNode("p", _hoisted_4, toDisplayString(_ctx.errrorMsg), 1),
              createBaseVNode("div", _hoisted_5, [
                createVNode(_component_v_btn, {
                  class: "mx-auto",
                  loading: _ctx.btnLoading,
                  disabled: !_ctx.valid,
                  type: "submit"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Submit")
                  ]),
                  _: 1
                }, 8, ["loading", "disabled"])
              ])
            ]),
            _: 1
          }, 8, ["modelValue", "onSubmit"]),
          withDirectives(createVNode(_component_v_form, {
            modelValue: _ctx.valid,
            "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => _ctx.valid = $event),
            ref: "formOccupational",
            class: "mt-5",
            onSubmit: withModifiers($options.formSubmit, ["prevent"])
          }, {
            default: withCtx(() => [
              createVNode(_component_v_text_field, {
                modelValue: _ctx.name,
                "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => _ctx.name = $event),
                label: "Name",
                variant: "outlined",
                rules: _ctx.nameRules,
                name: "entry.343433382"
              }, null, 8, ["modelValue", "rules"]),
              createVNode(_component_v_text_field, {
                modelValue: _ctx.phoneNo,
                "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => _ctx.phoneNo = $event),
                label: "Phone No",
                variant: "outlined",
                type: "number",
                name: "entry.986829468",
                rules: _ctx.phoneRules
              }, null, 8, ["modelValue", "rules"]),
              createBaseVNode("div", null, [
                _hoisted_6,
                createBaseVNode("div", null, [
                  createVNode(_component_v_radio_group, {
                    modelValue: _ctx.specialization,
                    "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => _ctx.specialization = $event),
                    inline: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_radio, {
                        label: "Speech Language Pathologist",
                        value: "Speech Language Pathologist"
                      }),
                      createVNode(_component_v_radio, {
                        label: "Occupational Therapist",
                        value: "Occupational Therapist"
                      })
                    ]),
                    _: 1
                  }, 8, ["modelValue"])
                ])
              ]),
              withDirectives(createVNode(_component_v_text_field, {
                name: "entry.570858311",
                modelValue: _ctx.specialization,
                "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => _ctx.specialization = $event)
              }, null, 8, ["modelValue"]), [
                [vShow, false]
              ]),
              createVNode(_component_v_autocomplete, {
                label: "Location",
                items: [
                  "Alappuzha",
                  "Ernakulam",
                  "Idukki",
                  "Kannur",
                  "Kasaragod",
                  "Kollam",
                  "Kottayam",
                  "Kozhikode",
                  "Malappuram",
                  "Palakkad",
                  "Pathanamthitta",
                  "Thiruvananthapuram",
                  "Thrissur",
                  "Wayanad"
                ],
                variant: "outlined",
                modelValue: _ctx.location,
                "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => _ctx.location = $event)
              }, null, 8, ["modelValue"]),
              withDirectives(createVNode(_component_v_text_field, {
                name: "entry.1235296561",
                modelValue: _ctx.location,
                "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => _ctx.location = $event)
              }, null, 8, ["modelValue"]), [
                [vShow, false]
              ]),
              createBaseVNode("p", _hoisted_7, toDisplayString(_ctx.errrorMsg), 1),
              createBaseVNode("div", _hoisted_8, [
                createVNode(_component_v_btn, {
                  class: "mx-auto",
                  loading: _ctx.btnLoading,
                  disabled: !_ctx.valid,
                  type: "submit"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Submit")
                  ]),
                  _: 1
                }, 8, ["loading", "disabled"])
              ])
            ]),
            _: 1
          }, 8, ["modelValue", "onSubmit"]), [
            [vShow, false]
          ]),
          $setup.mdAndUp ? (openBlock(), createElementBlock("div", _hoisted_9, _hoisted_12)) : createCommentVNode("", true),
          createVNode(_component_thankyou, { "dialog-control": _ctx.dialogControl }, null, 8, ["dialog-control"])
        ]),
        _: 1
      })
    ]),
    _: 1
  }, 8, ["modelValue", "width"]);
}
const CarriersForm = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  CarriersForm as default
};
