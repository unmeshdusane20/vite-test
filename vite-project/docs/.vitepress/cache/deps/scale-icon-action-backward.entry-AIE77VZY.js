import {
  Host,
  getElement,
  h,
  registerInstance
} from "./chunk-3SL7DDGR.js";

// node_modules/@telekom/scale-components/dist/esm/scale-icon-action-backward.entry.js
var iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";
var ActionBackward = class {
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
    return h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: this.fill === "currentColor" ? this.color : this.fill }, this.selected ? h("g", null, h("path", { d: "M16.75 8.5H9.5V5.33L2.75 9.75l6.75 4.42V11h7.25a2.75 2.75 0 110 5.5h-4a1.25 1.25 0 000 2.5h4a5.25 5.25 0 000-10.5z", "fill-rule": "evenodd" })) : h("g", null, h("path", { d: "M16.75 9H9.5V5.332L2.75 9.75l6.75 4.418V10.5h7.25A3.254 3.254 0 0120 13.75 3.254 3.254 0 0116.75 17h-4a.75.75 0 100 1.5h4a4.756 4.756 0 004.75-4.75A4.756 4.756 0 0016.75 9z", "fill-rule": "evenodd" })))));
  }
  get hostElement() {
    return getElement(this);
  }
};
ActionBackward.style = iconCss;
export {
  ActionBackward as scale_icon_action_backward
};
//# sourceMappingURL=scale-icon-action-backward.entry-AIE77VZY.js.map
