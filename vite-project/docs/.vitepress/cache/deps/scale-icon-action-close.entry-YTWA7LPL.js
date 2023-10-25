import {
  Host,
  getElement,
  h,
  registerInstance
} from "./chunk-3SL7DDGR.js";

// node_modules/@telekom/scale-components/dist/esm/scale-icon-action-close.entry.js
var iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";
var ActionClose = class {
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
    return h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: this.fill === "currentColor" ? this.color : this.fill }, this.selected ? h("g", null, h("path", { d: "M13.768 12l4.116-4.116a1.25 1.25 0 00-1.767-1.768L12 10.232 7.884 6.116a1.25 1.25 0 10-1.767 1.768L10.233 12l-4.116 4.116a1.249 1.249 0 101.767 1.768L12 13.768l4.117 4.116a1.246 1.246 0 001.767 0 1.25 1.25 0 000-1.768L13.768 12z", "fill-rule": "evenodd" })) : h("g", null, h("path", { d: "M12.93 12.402l4.47-4.47a.749.749 0 10-1.062-1.06l-4.47 4.47L7.4 6.871a.749.749 0 10-1.06 1.06l4.47 4.47-4.47 4.47a.75.75 0 001.06 1.061l4.47-4.47 4.47 4.47a.747.747 0 001.06 0 .75.75 0 000-1.06l-4.47-4.47z", "fill-rule": "evenodd" })))));
  }
  get hostElement() {
    return getElement(this);
  }
};
ActionClose.style = iconCss;
export {
  ActionClose as scale_icon_action_close
};
//# sourceMappingURL=scale-icon-action-close.entry-YTWA7LPL.js.map
