import {
  Host,
  getElement,
  h,
  registerInstance
} from "./chunk-3SL7DDGR.js";

// node_modules/@telekom/scale-components/dist/esm/scale-icon-action-logout.entry.js
var iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";
var ActionLogout = class {
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
    return h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: this.fill === "currentColor" ? this.color : this.fill }, this.selected ? h("g", null, h("path", { d: "M13.25 2.75v7.5h-6a1.5 1.5 0 00-.144 2.993l.144.007h6v7.5h-7.5a3 3 0 01-2.995-2.824l-.005-.176v-12a3 3 0 012.824-2.995l.176-.005h7.5zm3.25 4.58l6.75 4.42-6.75 4.42V12.5H7.25a.75.75 0 01-.102-1.493L7.25 11h9.25V7.33z", "fill-rule": "evenodd" })) : h("g", null, h("path", { d: "M14 2v5h-1.5V3.5H5.75a2.24 2.24 0 00-2.245 2.095L3.5 5.75v12a2.24 2.24 0 002.095 2.245L5.75 20h6.75v-3.5H14v5H5.75c-1.984 0-3.64-1.592-3.745-3.553L2 17.75v-12c0-1.984 1.592-3.64 3.553-3.745L5.75 2H14zm2.5 5.35l6.75 4.4-6.75 4.4V12.5H7.25c-.4 0-.75-.35-.75-.75 0-.367.294-.691.651-.743L7.25 11h9.25V7.35z", "fill-rule": "evenodd" })))));
  }
  get hostElement() {
    return getElement(this);
  }
};
ActionLogout.style = iconCss;
export {
  ActionLogout as scale_icon_action_logout
};
//# sourceMappingURL=scale-icon-action-logout.entry-JN2I6Y5W.js.map
