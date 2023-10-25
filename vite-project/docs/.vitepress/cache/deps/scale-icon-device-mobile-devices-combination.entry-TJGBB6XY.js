import {
  Host,
  getElement,
  h,
  registerInstance
} from "./chunk-3SL7DDGR.js";

// node_modules/@telekom/scale-components/dist/esm/scale-icon-device-mobile-devices-combination.entry.js
var iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";
var DeviceMobileDevicesCombination = class {
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
    return h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: this.fill === "currentColor" ? this.color : this.fill }, this.selected ? h("g", null, h("path", { d: "M10 6a2.5 2.5 0 012.495 2.336l.005.164v13a2.5 2.5 0 01-2.336 2.495L10 24H4a2.5 2.5 0 01-2.492-2.302L1.5 21.5v-13a2.5 2.5 0 012.336-2.495L4 6h6zM7 19.75a1 1 0 100 2 1 1 0 000-2zM19.5 0a3 3 0 012.995 2.824L22.5 3v14.5a3 3 0 01-2.824 2.995l-.176.005H14V19h5.5a1.5 1.5 0 001.493-1.356L21 17.5V3a1.5 1.5 0 00-1.356-1.493L19.5 1.5H10a1.5 1.5 0 00-1.493 1.356L8.5 3v1.5H7V3A3 3 0 019.824.005L10 0h9.5zm-4.75 16a1 1 0 110 2 1 1 0 010-2zM8.5 7.5h-3V9h3V7.5z", "fill-rule": "evenodd" })) : h("g", null, h("path", { d: "M10 6a2.473 2.473 0 012.495 2.333l.005.167v13a2.473 2.473 0 01-2.333 2.495L10 24H4a2.473 2.473 0 01-2.495-2.333L1.5 21.5v-13a2.473 2.473 0 012.333-2.495L4 6h6zM5.5 7.5H4c-.51 0-.935.388-.993.884L3 8.5v13c0 .51.388.935.884.993L4 22.5h6c.51 0 .935-.388.993-.884L11 21.5v-13c0-.51-.388-.935-.884-.993L10 7.5H8.5V9h-3V7.5zM7 19.75a1 1 0 110 2 1 1 0 010-2zM19.5 0a3.01 3.01 0 012.995 2.824L22.5 3v14.5a3.01 3.01 0 01-2.824 2.995l-.176.005H14V19h5.5c.8 0 1.423-.576 1.493-1.352L21 17.5V3c0-.8-.576-1.423-1.352-1.493L19.5 1.5H10c-.8 0-1.423.576-1.493 1.352L8.5 3v1.5H7V3A3.01 3.01 0 019.824.005L10 0h9.5zm-4.75 16a1 1 0 110 2 1 1 0 010-2z", "fill-rule": "evenodd" })))));
  }
  get hostElement() {
    return getElement(this);
  }
};
DeviceMobileDevicesCombination.style = iconCss;
export {
  DeviceMobileDevicesCombination as scale_icon_device_mobile_devices_combination
};
//# sourceMappingURL=scale-icon-device-mobile-devices-combination.entry-TJGBB6XY.js.map
