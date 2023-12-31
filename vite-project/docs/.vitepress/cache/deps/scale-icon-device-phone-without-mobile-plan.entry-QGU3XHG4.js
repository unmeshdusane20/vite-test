import {
  Host,
  getElement,
  h,
  registerInstance
} from "./chunk-3SL7DDGR.js";

// node_modules/@telekom/scale-components/dist/esm/scale-icon-device-phone-without-mobile-plan.entry.js
var iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";
var DevicePhoneWithoutMobilePlan = class {
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
    return h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: this.fill === "currentColor" ? this.color : this.fill }, this.selected ? h("g", null, h("path", { d: "M14.69 14.689a.75.75 0 01-1.06 0L12 13.06l-1.628 1.629a.751.751 0 01-1.061-1.061L10.94 12l-1.63-1.629a.749.749 0 111.06-1.06L12 10.939l1.629-1.628a.75.75 0 011.06 1.06L13.06 12l1.63 1.628a.75.75 0 010 1.061zM12 21a1.25 1.25 0 11.001-2.5 1.25 1.25 0 010 2.5zM10 3.5h4V2h-4v1.5zm6-3H8a3 3 0 00-3 3v17a3 3 0 003 3h8a3 3 0 003-3v-17a3 3 0 00-3-3z", "fill-rule": "evenodd" })) : h("g", null, h("path", { d: "M14.69 9.311a.75.75 0 00-1.061 0l-1.628 1.628-1.629-1.628a.75.75 0 10-1.061 1.061L10.94 12l-1.629 1.628a.75.75 0 101.061 1.061l1.629-1.629 1.628 1.629a.751.751 0 001.062-1.061L13.061 12l1.629-1.628a.75.75 0 000-1.061zM12.001 18.5a1.25 1.25 0 10-.002 2.498 1.25 1.25 0 00.002-2.498zm5.5 2c0 .827-.674 1.5-1.5 1.5h-8c-.827 0-1.5-.673-1.5-1.5v-17c0-.827.673-1.5 1.5-1.5h2v1.5h4V2h2c.826 0 1.5.673 1.5 1.5v17zm-1.5-20h-8a3 3 0 00-3 3v17a3 3 0 003 3h8a3 3 0 003-3v-17a3 3 0 00-3-3z", "fill-rule": "evenodd" })))));
  }
  get hostElement() {
    return getElement(this);
  }
};
DevicePhoneWithoutMobilePlan.style = iconCss;
export {
  DevicePhoneWithoutMobilePlan as scale_icon_device_phone_without_mobile_plan
};
//# sourceMappingURL=scale-icon-device-phone-without-mobile-plan.entry-QGU3XHG4.js.map
