import {
  Host,
  getElement,
  h,
  registerInstance
} from "./chunk-3SL7DDGR.js";

// node_modules/@telekom/scale-components/dist/esm/scale-icon-content-credit-card.entry.js
var iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";
var ContentCreditCard = class {
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
    return h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: this.fill === "currentColor" ? this.color : this.fill }, this.selected ? h("g", null, h("path", { d: "M23.5 11v6.5a3 3 0 01-3 3h-17a3 3 0 01-3-3V11h23zm-3-7.5a3 3 0 013 3V8H.5V6.5a3 3 0 013-3z", "fill-rule": "evenodd" })) : h("g", null, h("path", { d: "M20.5 3.5h-17c-1.655 0-3 1.345-3 3v11c0 1.655 1.345 3 3 3h17c1.655 0 3-1.345 3-3v-11c0-1.655-1.345-3-3-3zm1.5 14c0 .825-.675 1.5-1.5 1.5h-17c-.825 0-1.5-.675-1.5-1.5V11h20v6.5zM22 8H2V6.5C2 5.675 2.675 5 3.5 5h17c.825 0 1.5.675 1.5 1.5V8z", "fill-rule": "evenodd" })))));
  }
  get hostElement() {
    return getElement(this);
  }
};
ContentCreditCard.style = iconCss;
export {
  ContentCreditCard as scale_icon_content_credit_card
};
//# sourceMappingURL=scale-icon-content-credit-card.entry-FUWYNCEG.js.map
