import {
  Host,
  getElement,
  h,
  registerInstance
} from "./chunk-3SL7DDGR.js";

// node_modules/@telekom/scale-components/dist/esm/scale-icon-action-checkmark.entry.js
var iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";
var ActionCheckmark = class {
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
    return h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: this.fill === "currentColor" ? this.color : this.fill }, this.selected ? h("g", null, h("path", { d: "M9.215 19.78l-6.898-6.866a1.25 1.25 0 111.764-1.771l5.13 5.106L20.3 5.159a1.25 1.25 0 011.768 1.767L9.215 19.78z", "fill-rule": "evenodd" })) : h("g", null, h("path", { d: "M21.756 5.48a.75.75 0 00-1.061 0L9.219 16.956l-5.463-5.463a.749.749 0 10-1.06 1.06l6.523 6.523L21.756 6.54a.75.75 0 000-1.06", "fill-rule": "evenodd" })))));
  }
  get hostElement() {
    return getElement(this);
  }
};
ActionCheckmark.style = iconCss;
export {
  ActionCheckmark as scale_icon_action_checkmark
};
//# sourceMappingURL=scale-icon-action-checkmark.entry-Q6GVDW6W.js.map
