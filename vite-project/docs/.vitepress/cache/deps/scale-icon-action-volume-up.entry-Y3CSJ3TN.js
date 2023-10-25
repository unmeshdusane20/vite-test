import {
  Host,
  getElement,
  h,
  registerInstance
} from "./chunk-3SL7DDGR.js";

// node_modules/@telekom/scale-components/dist/esm/scale-icon-action-volume-up.entry.js
var iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";
var ActionVolumeUp = class {
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
    return h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: this.fill === "currentColor" ? this.color : this.fill }, this.selected ? h("g", null, h("path", { d: "M13 3.5v17h-2l-4.5-4H5a3 3 0 01-2.995-2.824L2 13.5v-3a3 3 0 012.824-2.995L5 7.5h1.5l4.5-4h2zm6 4.75a.75.75 0 01.743.648L19.75 9v2.25H22a.75.75 0 01.102 1.493L22 12.75h-2.25V15a.75.75 0 01-1.493.102L18.25 15v-2.25H16a.75.75 0 01-.102-1.493L16 11.25h2.25V9a.75.75 0 01.75-.75z", "fill-rule": "evenodd" })) : h("g", null, h("path", { d: "M13 3.5v17h-2l-4.5-4H5a3.003 3.003 0 01-2.995-2.824L2 13.5v-3a3.003 3.003 0 012.824-2.995L5 7.5h1.5l4.5-4h2zm-1.5 1.56L7.07 9H5c-.776 0-1.42.598-1.493 1.356L3.5 10.5v3c0 .776.598 1.42 1.356 1.493L5 15h2.07l4.43 3.94V5.06zM19 8.25c.38 0 .694.281.743.648L19.75 9v2.25H22a.749.749 0 01.102 1.493L22 12.75h-2.25V15a.749.749 0 01-1.493.102L18.25 15v-2.25H16a.749.749 0 01-.102-1.493L16 11.25h2.25V9c0-.415.335-.75.75-.75z", "fill-rule": "evenodd" })))));
  }
  get hostElement() {
    return getElement(this);
  }
};
ActionVolumeUp.style = iconCss;
export {
  ActionVolumeUp as scale_icon_action_volume_up
};
//# sourceMappingURL=scale-icon-action-volume-up.entry-Y3CSJ3TN.js.map
