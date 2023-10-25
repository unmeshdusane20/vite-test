import {
  Host,
  getElement,
  h,
  registerInstance
} from "./chunk-3SL7DDGR.js";

// node_modules/@telekom/scale-components/dist/esm/scale-icon-content-status-inactive.entry.js
var iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";
var ContentStatusInactive = class {
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
    return h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: this.fill === "currentColor" ? this.color : this.fill }, this.selected ? h("g", null, h("path", { d: "M19.187 17.395L6.605 4.814A8.938 8.938 0 0112.001 3c4.962 0 9 4.038 9 9 0 2.025-.681 3.89-1.814 5.395M3.001 12c0-2.037.688-3.912 1.833-5.422l12.589 12.588A8.938 8.938 0 0112.001 21c-4.963 0-9-4.038-9-9m9-11.5C5.659.5.501 5.659.501 12s5.158 11.5 11.5 11.5c6.341 0 11.5-5.159 11.5-11.5S18.342.5 12.001.5", "fill-rule": "evenodd" })) : h("g", null, h("path", { d: "M19.22 18.159L5.842 4.78a9.453 9.453 0 016.159-2.28c5.238 0 9.5 4.261 9.5 9.5a9.448 9.448 0 01-2.281 6.159M2.501 12c0-2.35.862-4.499 2.28-6.159L18.159 19.22a9.448 9.448 0 01-6.158 2.281c-5.239 0-9.5-4.262-9.5-9.5m9.5-11c-6.075 0-11 4.925-11 11s4.925 11 11 11c6.074 0 11-4.925 11-11s-4.926-11-11-11", "fill-rule": "evenodd" })))));
  }
  get hostElement() {
    return getElement(this);
  }
};
ContentStatusInactive.style = iconCss;
export {
  ContentStatusInactive as scale_icon_content_status_inactive
};
//# sourceMappingURL=scale-icon-content-status-inactive.entry-D5QLMTYS.js.map
