import {
  Host,
  getElement,
  h,
  registerInstance
} from "./chunk-3SL7DDGR.js";

// node_modules/@telekom/scale-components/dist/esm/scale-icon-action-microphone.entry.js
var iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";
var ActionMicrophone = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.size = 24;
    this.fill = "currentColor";
    this.color = "currentColor";
    this.selected = false;
    this.decorative = false;
    this.focusable = false;
  }
  connectedCallback() {
    if (!this.hostElement.hasAttribute("styles")) {
      this.hostElement.style.display = "inline-flex";
    }
  }
  render() {
    const ariaHidden = this.decorative ? { "aria-hidden": "true" } : {};
    const focusable = this.focusable ? { tabindex: 0 } : {};
    return h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: this.fill === "currentColor" ? this.color : this.fill }, this.selected ? h("g", null, h("path", { d: "M18.75 9.5a.75.75 0 01.743.648l.007.102V12a7.5 7.5 0 01-6.501 7.43l-.249.03v4.04h-1.5v-4.04a7.5 7.5 0 01-6.746-7.21L4.5 12v-1.75a.75.75 0 011.493-.102L6 10.25V12a6 6 0 0011.996.225L18 12v-1.75a.75.75 0 01.75-.75zM12 .5l.212.005a4.5 4.5 0 014.283 4.277L16.5 5v7a4.5 4.5 0 01-4.288 4.495L12 16.5l-.212-.005a4.5 4.5 0 01-4.283-4.277L7.5 12V5A4.5 4.5 0 0111.788.505L12 .5z", "fill-rule": "evenodd" })) : h("g", null, h("path", { d: "M18.75 9.5c.367 0 .691.294.743.651l.007.099V12c0 3.817-2.826 6.964-6.509 7.424l-.241.026v4.05h-1.5v-4.05c-3.72-.343-6.624-3.415-6.746-7.202L4.5 12v-1.75c0-.4.35-.75.75-.75.367 0 .691.294.743.651L6 10.25V12c0 3.3 2.7 6 6 6 3.225 0 5.877-2.579 5.996-5.776L18 12v-1.75c0-.4.35-.75.75-.75zM12 .5a4.48 4.48 0 014.495 4.287L16.5 5v7c0 2.5-2 4.5-4.5 4.5a4.48 4.48 0 01-4.495-4.287L7.5 12V5c0-2.5 2-4.5 4.5-4.5zM12 2a3.01 3.01 0 00-2.995 2.824L9 5v7c0 1.65 1.35 3 3 3a3.01 3.01 0 002.995-2.824L15 12V5c0-1.65-1.35-3-3-3z", "fill-rule": "evenodd" })))));
  }
  get hostElement() {
    return getElement(this);
  }
};
ActionMicrophone.style = iconCss;
export {
  ActionMicrophone as scale_icon_action_microphone
};
//# sourceMappingURL=scale-icon-action-microphone.entry-KN62X3P7.js.map
