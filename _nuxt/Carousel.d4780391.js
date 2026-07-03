import __nuxt_component_0 from "./Icon.5a89dbdd.js";
import WelcomeForm from "./WelcomeForm.1b7027cf.js";
import { i as _export_sfc, p as useDisplay, f as createElementBlock, k as createVNode, w as withCtx, q as normalizeClass, j as createBaseVNode, F as Fragment, l as renderList, s as createCommentVNode, r as resolveComponent, o as openBlock, c as createBlock, t as toDisplayString, m as createTextVNode } from "./entry.9eba175a.js";
import "./config.1484998d.js";
import "./Thankyou.4bfee80b.js";
const Carousel_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  components: { WelcomeForm },
  setup() {
    const { xs, mdAndUp } = useDisplay();
    return { xs, mdAndUp };
  },
  data() {
    return {
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
      ],
      mainContent: {
        title: "Why Home Therapy",
        subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ea fugiat corrupti odit,"
      },
      imageLinks: [
        {
          src: "/images/banner/1.png",
          // src: "http://yesofcorsa.com/wp-content/uploads/2018/05/Therapist-Wallpaper-High-Definition.jpg",
          title: "Accessible to individuals with disabilities",
          subtitle: "Home therapy can be a more accessible option for individuals with disabilities who may face challenges traveling to and from therapy appointments.",
          buttonDetail: "test"
        },
        {
          src: "/images/banner/2.png",
          // src: "https://wallpapercave.com/wp/wp4750435.jpg",
          title: "More comfortable for children",
          subtitle: "For children who may feel anxious about going to a new place or meeting a new person, home therapy can be a more comfortable and familiar option.",
          buttonDetail: "test"
        },
        {
          src: "/images/banner/3.png",
          // src: "https://wallpaperaccess.com/full/970880.jpg",
          title: "Time-saving",
          subtitle: "Home therapy eliminates the need to travel to appointments, saving time and energy. This can be especially important for busy individuals or those with a hectic schedule.",
          buttonDetail: "test"
        },
        {
          src: "/images/banner/4.png",
          // src: "https://wallpaperaccess.com/full/1964833.jpg",
          title: "Comfort",
          subtitle: "Being in the comfort of your own home can be reassuring and comforting during therapy sessions. Being in a familiar environment can also help you feel more relaxed and open to discussing personal issues.",
          buttonDetail: "test"
        },
        {
          src: "/images/banner/7.png",
          // src: "https://wallpapercave.com/wp/wp4750435.jpg",
          title: "Increased access",
          subtitle: " For individuals who live in rural or remote areas, home therapy can be a lifeline. It can provide access to mental health services that may not be available in their area, helping to bridge the gap in mental health care.",
          buttonDetail: "test"
        }
      ]
    };
  }
};
const _hoisted_1 = { id: "why-home-therapy" };
const _hoisted_2 = { key: 0 };
const _hoisted_3 = { class: "main-conntent" };
const _hoisted_4 = { class: "text-secondary mt-n5 mb-5" };
const _hoisted_5 = { class: "banner-header" };
const _hoisted_6 = { class: "banner-subtitle mt-2 mt-md-5" };
const _hoisted_7 = {
  key: 1,
  class: ""
};
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("h1", { class: "heading-text" }, " Restoring your health, Right where you are ", -1);
const _hoisted_9 = [
  _hoisted_8
];
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("div", { class: "d-flex fill-height align-center mx-16" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "mx-md-10" })
], -1);
const _hoisted_11 = { key: 0 };
const _hoisted_12 = { class: "social-media mt-3 social-media-small" };
const _hoisted_13 = ["href"];
const _hoisted_14 = {
  key: 0,
  class: "mt-n10"
};
const _hoisted_15 = { class: "social-media" };
const _hoisted_16 = ["href"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_v_carousel_item = resolveComponent("v-carousel-item");
  const _component_v_carousel = resolveComponent("v-carousel");
  const _component_v_col = resolveComponent("v-col");
  const _component_Icon = __nuxt_component_0;
  const _component_v_row = resolveComponent("v-row");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createVNode(_component_v_row, {
      class: normalizeClass(["", !$setup.mdAndUp ? "margin-height" : "mt-5 align-center main-carousel"])
    }, {
      default: withCtx(() => [
        createVNode(_component_v_col, {
          cols: "12",
          md: "6"
        }, {
          default: withCtx(() => [
            $setup.mdAndUp ? (openBlock(), createElementBlock("div", _hoisted_2, [
              createVNode(_component_v_carousel, {
                cycle: "",
                class: "carousel",
                "hide-delimiter-background": "",
                "show-arrows": false,
                "hide-delimiters": ""
              }, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList($data.imageLinks, (slide, i) => {
                    return openBlock(), createBlock(_component_v_carousel_item, {
                      key: i,
                      cover: ""
                    }, {
                      default: withCtx(() => [
                        createBaseVNode("div", _hoisted_3, [
                          createBaseVNode("h3", _hoisted_4, toDisplayString($data.mainContent.title) + " ? ", 1),
                          createBaseVNode("h2", _hoisted_5, toDisplayString(slide.title), 1),
                          createBaseVNode("p", _hoisted_6, toDisplayString(slide.subtitle), 1)
                        ])
                      ]),
                      _: 2
                    }, 1024);
                  }), 128))
                ]),
                _: 1
              })
            ])) : (openBlock(), createElementBlock("div", _hoisted_7, _hoisted_9))
          ]),
          _: 1
        }),
        createVNode(_component_v_col, {
          cols: "12",
          md: "6"
        }, {
          default: withCtx(() => [
            createVNode(_component_v_carousel, {
              cycle: "",
              class: "carousel",
              "hide-delimiter-background": "",
              "show-arrows": "hover",
              height: $setup.mdAndUp ? "75vh" : "45vh"
            }, {
              default: withCtx(() => [
                (openBlock(true), createElementBlock(Fragment, null, renderList($data.imageLinks, (slide, i) => {
                  return openBlock(), createBlock(_component_v_carousel_item, {
                    key: i,
                    src: slide.src,
                    cover: "",
                    class: "carousel-item"
                  }, {
                    default: withCtx(() => [
                      _hoisted_10
                    ]),
                    _: 2
                  }, 1032, ["src"]);
                }), 128))
              ]),
              _: 1
            }, 8, ["height"]),
            !$setup.mdAndUp ? (openBlock(), createElementBlock("div", _hoisted_11, [
              createBaseVNode("ul", _hoisted_12, [
                (openBlock(true), createElementBlock(Fragment, null, renderList($data.socialMedia, (media) => {
                  return openBlock(), createElementBlock("li", {
                    key: media.name
                  }, [
                    createBaseVNode("a", {
                      class: "social-icon text-primary",
                      href: media.url
                    }, [
                      createVNode(_component_Icon, {
                        name: media.icon
                      }, null, 8, ["name"])
                    ], 8, _hoisted_13)
                  ]);
                }), 128))
              ])
            ])) : createCommentVNode("", true)
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["class"]),
    $setup.mdAndUp ? (openBlock(), createElementBlock("div", _hoisted_14, [
      createBaseVNode("ul", _hoisted_15, [
        (openBlock(true), createElementBlock(Fragment, null, renderList($data.socialMedia, (media) => {
          return openBlock(), createElementBlock("li", {
            key: media.name
          }, [
            createBaseVNode("a", {
              class: "social-icon text-primary",
              href: media.url
            }, [
              createTextVNode(toDisplayString(media.name) + " ", 1),
              createVNode(_component_Icon, {
                name: media.icon
              }, null, 8, ["name"])
            ], 8, _hoisted_16)
          ]);
        }), 128))
      ])
    ])) : createCommentVNode("", true)
  ]);
}
const Carousel = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  Carousel as default
};
