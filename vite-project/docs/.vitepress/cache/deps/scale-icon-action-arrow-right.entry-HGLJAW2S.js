import {
  Host,
  getElement,
  h,
  registerInstance
} from "./chunk-3SL7DDGR.js";

// node_modules/@telekom/scale-components/dist/esm/scale-icon-action-arrow-right.entry.js
var iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";
var ActionArrowRight = class {
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
    return h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: this.fill === "currentColor" ? this.color : this.fill }, this.selected ? h("g", null, h("path", { d: "M14.625 4.977a1.249 1.249 0 10-1.548 1.963l4.83 3.81H2.915a1.25 1.25 0 000 2.5h15l-4.838 3.815a1.25 1.25 0 001.548 1.963l8.909-7.026-8.91-7.025z", "fill-rule": "evenodd" })) : h("g", null, h("path", { d: "M14.366 5.411a.75.75 0 10-.93 1.178l5.905 4.661H3a.75.75 0 000 1.5h16.34l-5.906 4.661a.75.75 0 00.93 1.178L22.712 12l-8.345-6.589z", "fill-rule": "evenodd" })))));
  }
  get hostElement() {
    return getElement(this);
  }
};
ActionArrowRight.style = iconCss;
export {
  ActionArrowRight as scale_icon_action_arrow_right
};
//# sourceMappingURL=scale-icon-action-arrow-right.entry-HGLJAW2S.js.map
