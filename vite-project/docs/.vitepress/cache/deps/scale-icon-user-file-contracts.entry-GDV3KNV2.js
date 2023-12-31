import {
  Host,
  getElement,
  h,
  registerInstance
} from "./chunk-3SL7DDGR.js";

// node_modules/@telekom/scale-components/dist/esm/scale-icon-user-file-contracts.entry.js
var iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";
var UserFileContracts = class {
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
    return h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: this.fill === "currentColor" ? this.color : this.fill }, this.selected ? h("g", null, h("path", { d: "M3 .5v19a3 3 0 003 3h7.5v-1.88a2.25 2.25 0 112.5 0v1.88h2a3 3 0 003-3V.5H3zm13 13H8A.75.75 0 118 12h8a.75.75 0 110 1.5zm0-3H8A.75.75 0 118 9h8a.75.75 0 110 1.5zm0-3H8A.75.75 0 118 6h8a.75.75 0 110 1.5z", "fill-rule": "evenodd" })) : h("g", null, h("path", { d: "M14.75 16.5c1.25 0 2.25 1 2.25 2.25 0 .692-.34 1.342-.865 1.752L16 20.6v2.9l-1.25-.5-1.25.5v-2.9c-.6-.4-1-1.05-1-1.85 0-1.25 1-2.25 2.25-2.25zM21 .5v19a3.01 3.01 0 01-2.824 2.995L18 22.5h-.5V21h.5c.8 0 1.423-.576 1.493-1.352l.007-.148V2h-15v17.5c0 .8.576 1.423 1.352 1.493L6 21h6v1.5H6a3.01 3.01 0 01-2.995-2.824L3 19.5V.5h18zM16 12c.4 0 .75.35.75.75a.772.772 0 01-.651.743L16 13.5H8c-.4 0-.75-.35-.75-.75 0-.367.294-.691.651-.743L8 12h8zm0-3c.4 0 .75.35.75.75a.772.772 0 01-.651.743L16 10.5H8c-.4 0-.75-.35-.75-.75 0-.367.294-.691.651-.743L8 9h8zm0-3c.4 0 .75.35.75.75a.772.772 0 01-.651.743L16 7.5H8c-.4 0-.75-.35-.75-.75 0-.367.294-.691.651-.743L8 6h8z", "fill-rule": "evenodd" })))));
  }
  get hostElement() {
    return getElement(this);
  }
};
UserFileContracts.style = iconCss;
export {
  UserFileContracts as scale_icon_user_file_contracts
};
//# sourceMappingURL=scale-icon-user-file-contracts.entry-GDV3KNV2.js.map
