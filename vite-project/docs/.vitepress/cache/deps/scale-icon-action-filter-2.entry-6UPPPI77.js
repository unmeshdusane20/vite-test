import {
  Host,
  getElement,
  h,
  registerInstance
} from "./chunk-3SL7DDGR.js";

// node_modules/@telekom/scale-components/dist/esm/scale-icon-action-filter-2.entry.js
var iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";
var ActionFilter2 = class {
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
    return h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: this.fill === "currentColor" ? this.color : this.fill }, this.selected ? h("g", null, h("path", { d: "M22 2H2v3.568c0 1.233.507 2.413 1.4 3.263L9 14.15v9.35l6-3v-6.35l5.6-5.319c.893-.85 1.4-2.03 1.4-3.263V2z", "fill-rule": "evenodd" })) : h("g", null, h("path", { d: "M22 2H2v3.568c0 1.233.507 2.413 1.4 3.263L9 14.15v9.35l6-3v-6.35l5.6-5.319c.893-.85 1.4-2.03 1.4-3.263V2zm-1.5 1.5v2.068c0 .819-.34 1.612-.934 2.175l-5.598 5.32-.468.443v6.067l-3 1.5v-7.567l-.467-.443-5.599-5.32A3.009 3.009 0 013.5 5.568V3.5h17z", "fill-rule": "evenodd" })))));
  }
  get hostElement() {
    return getElement(this);
  }
};
ActionFilter2.style = iconCss;
export {
  ActionFilter2 as scale_icon_action_filter_2
};
//# sourceMappingURL=scale-icon-action-filter-2.entry-6UPPPI77.js.map
