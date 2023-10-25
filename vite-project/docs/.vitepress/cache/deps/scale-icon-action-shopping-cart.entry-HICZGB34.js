import {
  Host,
  getElement,
  h,
  registerInstance
} from "./chunk-3SL7DDGR.js";

// node_modules/@telekom/scale-components/dist/esm/scale-icon-action-shopping-cart.entry.js
var iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";
var ActionShoppingCart = class {
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
    return h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: this.fill === "currentColor" ? this.color : this.fill }, this.selected ? h("g", null, h("path", { d: "M5.5 20a2 2 0 110 4 2 2 0 010-4zm15 0a2 2 0 110 4 2 2 0 010-4zM.06.455A.755.755 0 01.949.027l.096.033 2.27.975a2.984 2.984 0 011.42 1.275l.1.19h18.24l-.895 9.41a2.986 2.986 0 01-2.612 2.693l-.183.017-13.145.85.065.67c.07.727.637 1.286 1.35 1.353l.145.007h13.45a.749.749 0 01.102 1.493L21.25 19H7.8a2.98 2.98 0 01-2.964-2.538l-.021-.177L3.63 3.655a1.51 1.51 0 00-.771-1.175l-.134-.065-2.27-.975A.75.75 0 01.06.455z", "fill-rule": "evenodd" })) : h("g", null, h("path", { d: "M5.5 20a2 2 0 110 4 2 2 0 010-4zm15 0a2 2 0 110 4 2 2 0 010-4zM.06.455A.755.755 0 01.949.027l.096.033 2.27.975a2.984 2.984 0 011.42 1.275l.1.19h18.24l-.895 9.41a2.986 2.986 0 01-2.612 2.693l-.183.017-13.145.85.065.67c.07.727.637 1.286 1.35 1.353l.145.007h13.45a.749.749 0 01.102 1.493L21.25 19H7.8a2.98 2.98 0 01-2.964-2.538l-.021-.177L3.63 3.655a1.51 1.51 0 00-.771-1.175l-.134-.065-2.27-.975A.75.75 0 01.06.455zM21.43 4H5.17l.935 9.975 13.185-.85a1.495 1.495 0 001.376-1.22l.019-.135L21.43 4z", "fill-rule": "evenodd" })))));
  }
  get hostElement() {
    return getElement(this);
  }
};
ActionShoppingCart.style = iconCss;
export {
  ActionShoppingCart as scale_icon_action_shopping_cart
};
//# sourceMappingURL=scale-icon-action-shopping-cart.entry-HICZGB34.js.map
