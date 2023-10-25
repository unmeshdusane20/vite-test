import {
  Host,
  getElement,
  h,
  registerInstance
} from "./chunk-3SL7DDGR.js";

// node_modules/@telekom/scale-components/dist/esm/scale-icon-action-move.entry.js
var iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";
var ActionMove = class {
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
    return h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: this.fill === "currentColor" ? this.color : this.fill }, this.selected ? h("g", null, h("path", { d: "M23.5 12L18 8.4v2.35h-4.75V6h2.35L12 .5 8.4 6h2.35v4.75H6V8.4L.5 12 6 15.6v-2.35h4.75V18H8.4l3.6 5.5 3.6-5.5h-2.35v-4.75H18v2.35z", "fill-rule": "evenodd" })) : h("g", null, h("path", { d: "M23.5 12L18 8.4v2.85h-5.25V6h2.85L12 .5 8.4 6h2.85v5.25H6V8.4L.5 12 6 15.6v-2.85h5.25V18H8.4l3.6 5.5 3.6-5.5h-2.85v-5.25H18v2.85z", "fill-rule": "evenodd" })))));
  }
  get hostElement() {
    return getElement(this);
  }
};
ActionMove.style = iconCss;
export {
  ActionMove as scale_icon_action_move
};
//# sourceMappingURL=scale-icon-action-move.entry-7KCSNYPL.js.map
