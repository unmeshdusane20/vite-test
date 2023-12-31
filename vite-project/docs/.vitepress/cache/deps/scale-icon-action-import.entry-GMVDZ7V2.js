import {
  Host,
  getElement,
  h,
  registerInstance
} from "./chunk-3SL7DDGR.js";

// node_modules/@telekom/scale-components/dist/esm/scale-icon-action-import.entry.js
var iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";
var ActionImport = class {
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
    return h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: this.fill === "currentColor" ? this.color : this.fill }, this.selected ? h("g", null, h("path", { d: "M21 7v13a3 3 0 01-2.824 2.995L18 23H6a3 3 0 01-2.995-2.824L3 20V7h7.25v3.5H5.568L12 20.326l6.432-9.826h-4.683L13.746 7H21zm-9-5a.75.75 0 01.743.648l.007.102v8.75h3.832L12 18.5l-4.582-7h3.832V2.75A.75.75 0 0112 2z", "fill-rule": "evenodd" })) : h("g", null, h("path", { d: "M8.5 7v1.5h-4V20c0 .778.596 1.42 1.356 1.493L6 21.5h12c.778 0 1.42-.596 1.493-1.356L19.5 20V8.5h-4V7H21v13a3 3 0 01-2.824 2.995L18 23H6a3 3 0 01-2.995-2.824L3 20V7h5.5zM12 2a.75.75 0 01.743.648l.007.102v8.75h3.832L12 18.5l-4.582-7h3.832V2.75A.75.75 0 0112 2z", "fill-rule": "evenodd" })))));
  }
  get hostElement() {
    return getElement(this);
  }
};
ActionImport.style = iconCss;
export {
  ActionImport as scale_icon_action_import
};
//# sourceMappingURL=scale-icon-action-import.entry-GMVDZ7V2.js.map
