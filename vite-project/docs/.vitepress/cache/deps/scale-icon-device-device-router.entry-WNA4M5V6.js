import {
  Host,
  getElement,
  h,
  registerInstance
} from "./chunk-3SL7DDGR.js";

// node_modules/@telekom/scale-components/dist/esm/scale-icon-device-device-router.entry.js
var iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";
var DeviceDeviceRouter = class {
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
    return h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: this.fill === "currentColor" ? this.color : this.fill }, this.selected ? h("g", null, h("path", { d: "M19.5 7h-2.3L13 10.635l-1 .865-1-.845L6.8 7H4.5a3 3 0 00-3 3v10a3 3 0 003 3h15a3 3 0 003-3V10a3 3 0 00-3-3zM13 19h-2v-2h2v2zM12 3a5.5 5.5 0 014.615 2.5l1.145-1a7 7 0 00-11.525 0l1.15 1A5.5 5.5 0 0112 3zm2.3 4.5l1.165-1a4 4 0 00-6.93 0l1.165 1a2.5 2.5 0 014.6 0zm-3.3 1a1 1 0 102 0 1 1 0 00-2 0z", "fill-rule": "evenodd" })) : h("g", null, h("path", { d: "M6.8 7l1.75 1.5H4.5c-.8 0-1.423.576-1.493 1.352L3 10v10c0 .8.576 1.423 1.352 1.493l.148.007h15c.8 0 1.423-.576 1.493-1.352L21 20V10c0-.8-.576-1.423-1.352-1.493L19.5 8.5h-4.05L17.2 7h2.3a3.01 3.01 0 012.995 2.824L22.5 10v10a3.01 3.01 0 01-2.824 2.995L19.5 23h-15a3.01 3.01 0 01-2.995-2.824L1.5 20V10a3.01 3.01 0 012.824-2.995L4.5 7h2.3zM13 17v2h-2v-2h2zm-1-9.5a1 1 0 110 2 1 1 0 010-2zm0-3c1.374 0 2.613.718 3.335 1.814l.115.186-1.15 1C13.9 6.65 13.05 6 12 6c-.984 0-1.793.527-2.22 1.335L9.7 7.5l-1.15-1c.65-1.2 2-2 3.45-2zm0-3a6.985 6.985 0 015.596 2.787l.154.213-1.15 1C15.65 4 13.95 3 12 3a5.357 5.357 0 00-4.472 2.351L7.4 5.55l-1.15-1A6.904 6.904 0 0112 1.5z", "fill-rule": "evenodd" })))));
  }
  get hostElement() {
    return getElement(this);
  }
};
DeviceDeviceRouter.style = iconCss;
export {
  DeviceDeviceRouter as scale_icon_device_device_router
};
//# sourceMappingURL=scale-icon-device-device-router.entry-WNA4M5V6.js.map
