import {
  Host,
  getElement,
  h,
  registerInstance
} from "./chunk-3SL7DDGR.js";

// node_modules/@telekom/scale-components/dist/esm/scale-icon-device-camera.entry.js
var iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";
var DeviceCamera = class {
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
    return h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: this.fill === "currentColor" ? this.color : this.fill }, this.selected ? h("g", null, h("path", { d: "M21.78 7L20 8.785V5H2v1.5H.5v4H2V17a3 3 0 003 3h12a3 3 0 003-3v-1.785L21.78 17h1.72V7h-1.72zM9 15.775v-6.55l5 3.275-5 3.275z", "fill-rule": "evenodd" })) : h("g", null, h("path", { d: "M20 5v3.8L21.8 7h1.7v10h-1.7L20 15.2V17a3.01 3.01 0 01-2.824 2.995L17 20H5a3.01 3.01 0 01-2.995-2.824L2 17v-6.5H.5v-4H2V5h18zm-1.5 1.5h-15V17c0 .8.576 1.423 1.352 1.493L5 18.5h12c.8 0 1.423-.576 1.493-1.352L18.5 17V6.5zM9 9.25l5 3.25-5 3.25v-6.5zm13-.35l-2 2v2.2l2 2V8.9z", "fill-rule": "evenodd" })))));
  }
  get hostElement() {
    return getElement(this);
  }
};
DeviceCamera.style = iconCss;
export {
  DeviceCamera as scale_icon_device_camera
};
//# sourceMappingURL=scale-icon-device-camera.entry-PKSL5UQY.js.map
