import Thankyou from "./Thankyou.4bfee80b.js";
import { i as _export_sfc, p as useDisplay, c as createBlock, w as withCtx, r as resolveComponent, o as openBlock, k as createVNode, j as createBaseVNode, m as createTextVNode, A as withModifiers } from "./entry.9eba175a.js";
import "./Icon.5a89dbdd.js";
import "./config.1484998d.js";
const WelcomeForm_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  components: { Thankyou },
  setup() {
    const { xs, mdAndUp } = useDisplay();
    return { xs, mdAndUp };
  },
  methods: {
    formSubmit() {
      this.btnLoading = true;
      console.log("submit");
      const form = this.$refs.form.$el;
      fetch(
        "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdNRY8rdXBtA1CIdVW-pgW9zwv32smWr8S7gqyKPpz6zkfyNA/formResponse",
        {
          mode: "no-cors",
          headers: {
            "Access-Control-Allow-Origin": "*"
          },
          method: "post",
          body: new FormData(form)
        }
      ).then((data) => {
        console.log("success", data);
        this.dialogControl = true;
        setTimeout(() => {
          this.dialogControl = false;
        }, 2500);
        this.$refs.form.reset();
        this.btnLoading = false;
      }).catch((e) => {
        console.log("error", e);
        this.btnLoading = false;
      });
    }
  },
  data: () => ({
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
    // phoneRules: [
    //   (value) => {
    //     if (value?.length > 3) return true;
    //     return "First name must be at least 3 characters.";
    //   },
    // ],
    description: "",
    phoneNo: "",
    phoneRules: [
      (value) => {
        if (/^([+]\d{2})?\d{10}$/.test(value))
          return true;
        return "Must be a valid phone no";
      }
    ],
    lastNameRules: [
      (value) => {
        if (/[^0-9]/.test(value))
          return true;
        return "Last name can not contain digits.";
      }
    ],
    valid: false
  })
};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h2", { class: "mb-5 text-center text-primary" }, "Connect With Us", -1);
const _hoisted_2 = { class: "form-user-btn mt-5" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_v_text_field = resolveComponent("v-text-field");
  const _component_v_textarea = resolveComponent("v-textarea");
  const _component_v_btn = resolveComponent("v-btn");
  const _component_v_form = resolveComponent("v-form");
  const _component_thankyou = resolveComponent("thankyou");
  const _component_v_sheet = resolveComponent("v-sheet");
  return openBlock(), createBlock(_component_v_sheet, {
    elevation: "2",
    class: "pa-10 bg-primary-background",
    rounded: "xl"
  }, {
    default: withCtx(() => [
      _hoisted_1,
      createVNode(_component_v_form, {
        modelValue: _ctx.valid,
        "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => _ctx.valid = $event),
        ref: "form",
        onSubmit: withModifiers($options.formSubmit, ["prevent"])
      }, {
        default: withCtx(() => [
          createVNode(_component_v_text_field, {
            modelValue: _ctx.name,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.name = $event),
            label: "Name",
            variant: "outlined",
            rules: _ctx.nameRules,
            name: "entry.1686296719"
          }, null, 8, ["modelValue", "rules"]),
          createVNode(_component_v_text_field, {
            modelValue: _ctx.phoneNo,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.phoneNo = $event),
            label: "Phone No",
            variant: "outlined",
            type: "number",
            name: "entry.1717555786",
            rules: _ctx.phoneRules
          }, null, 8, ["modelValue", "rules"]),
          createVNode(_component_v_textarea, {
            label: "description",
            modelValue: _ctx.description,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.description = $event),
            variant: "outlined",
            name: "entry.1347844840",
            rows: "3"
          }, null, 8, ["modelValue"]),
          createBaseVNode("div", _hoisted_2, [
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
      createVNode(_component_thankyou, { "dialog-control": _ctx.dialogControl }, null, 8, ["dialog-control"])
    ]),
    _: 1
  });
}
const WelcomeForm = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  WelcomeForm as default
};
