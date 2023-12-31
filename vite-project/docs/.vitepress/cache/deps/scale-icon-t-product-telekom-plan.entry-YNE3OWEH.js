import {
  Host,
  getElement,
  h,
  registerInstance
} from "./chunk-3SL7DDGR.js";

// node_modules/@telekom/scale-components/dist/esm/scale-icon-t-product-telekom-plan.entry.js
var iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";
var TProductTelekomPlan = class {
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
    return h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: this.fill === "currentColor" ? this.color : this.fill }, this.selected ? h("g", null, h("path", { d: "M15.5 16.5h-7a.75.75 0 010-1.5h7a.75.75 0 110 1.5zm0 1.5a.75.75 0 110 1.5h-7a.75.75 0 010-1.5h7zm-.385-12.5v2.556h-.447v-.075c0-1.146-.609-1.882-1.762-1.95l-.177-.005h-.075v5.414c0 .705.262 1.013.91 1.049l.134.003h.224v.527h-3.879v-.527h.224c.7 0 1.005-.264 1.04-.917l.004-.135V6.026h-.074c-1.208 0-1.874.682-1.935 1.786l-.004.17v.074H8.85V5.5h6.265zm0 3.342v1.67h-1.67v-1.67h1.67zm-4.594 0v1.67H8.85v-1.67h1.67zM3.5.5v20a3 3 0 003 3h11a3 3 0 003-3V.5h-17z", "fill-rule": "evenodd" })) : h("g", null, h("path", { d: "M8.5 19.5h7a.75.75 0 000-1.5h-7a.75.75 0 000 1.5zm7-4.5a.75.75 0 010 1.5h-7a.75.75 0 010-1.5zm-.385-9.5v2.556h-.447v-.075c0-1.146-.609-1.882-1.762-1.95l-.177-.005h-.075v5.414c0 .705.262 1.013.91 1.049l.134.003h.224v.527h-3.879v-.527h.224c.7 0 1.005-.264 1.04-.917l.004-.135V6.026h-.074c-1.208 0-1.874.682-1.935 1.786l-.004.17v.074H8.85V5.5h6.265zm0 3.342v1.67h-1.67v-1.67h1.67zm-4.594 0v1.67H8.85v-1.67h1.67zM19 20.5c0 .827-.673 1.5-1.5 1.5h-11c-.828 0-1.5-.673-1.5-1.5V2h14v18.5zM3.5.5v20a3 3 0 003 3h11a3 3 0 003-3V.5h-17z", "fill-rule": "evenodd" })))));
  }
  get hostElement() {
    return getElement(this);
  }
};
TProductTelekomPlan.style = iconCss;
export {
  TProductTelekomPlan as scale_icon_t_product_telekom_plan
};
//# sourceMappingURL=scale-icon-t-product-telekom-plan.entry-YNE3OWEH.js.map
