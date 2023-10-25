import {
  Host,
  getElement,
  h,
  registerInstance
} from "./chunk-3SL7DDGR.js";

// node_modules/@telekom/scale-components/dist/esm/scale-icon-action-print.entry.js
var iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";
var ActionPrint = class {
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
    return h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: this.fill === "currentColor" ? this.color : this.fill }, this.selected ? h("g", null, h("path", { d: "M18.5 13.5V22h-13v-8.5h13zM17 15H7v5.5h10V15zm1.5-13v4h5v9.5a3 3 0 01-2.824 2.995l-.176.005H20V12H4v6.5h-.5a3 3 0 01-2.995-2.824L.5 15.5V6h5V2h13zm1 7a1 1 0 100 2 1 1 0 000-2zM17 3.5H7V6h10V3.5z", "fill-rule": "evenodd" })) : h("g", null, h("path", { d: "M18.5 13.5V22h-13v-8.5h13zM17 15H7v5.5h10V15zm1.5-13v4h5v9.5a3.003 3.003 0 01-2.824 2.995l-.176.005H20V17h.5c.776 0 1.42-.598 1.493-1.356L22 15.5v-8H2v8c0 .776.598 1.42 1.356 1.493L3.5 17H4v1.5h-.5a3.003 3.003 0 01-2.995-2.824L.5 15.5V6h5V2h13zm1 7a1 1 0 110 2 1 1 0 010-2zM17 3.5H7V6h10V3.5z", "fill-rule": "evenodd" })))));
  }
  get hostElement() {
    return getElement(this);
  }
};
ActionPrint.style = iconCss;
export {
  ActionPrint as scale_icon_action_print
};
//# sourceMappingURL=scale-icon-action-print.entry-ENS62I47.js.map
