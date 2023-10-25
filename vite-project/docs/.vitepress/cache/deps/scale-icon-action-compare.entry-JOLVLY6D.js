import {
  Host,
  getElement,
  h,
  registerInstance
} from "./chunk-3SL7DDGR.js";

// node_modules/@telekom/scale-components/dist/esm/scale-icon-action-compare.entry.js
var iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";
var ActionCompare = class {
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
    return h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: this.fill === "currentColor" ? this.color : this.fill }, this.selected ? h("g", null, h("path", { d: "M12 2a.75.75 0 01.743.648l.007.102v18.5a.75.75 0 01-1.493.102l-.007-.102V2.75A.75.75 0 0112 2zM2 7.582L8.75 12 2 16.418V7.582zm20 0v8.836L15.25 12 22 7.582z", "fill-rule": "evenodd" })) : h("g", null, h("path", { d: "M12 2a.75.75 0 01.743.648l.007.102v18.5a.75.75 0 01-1.493.102l-.007-.102V2.75A.75.75 0 0112 2zM2 7.582L8.75 12 2 16.418V7.582zm20 0v8.836L15.25 12 22 7.582z", "fill-rule": "evenodd" })))));
  }
  get hostElement() {
    return getElement(this);
  }
};
ActionCompare.style = iconCss;
export {
  ActionCompare as scale_icon_action_compare
};
//# sourceMappingURL=scale-icon-action-compare.entry-JOLVLY6D.js.map
