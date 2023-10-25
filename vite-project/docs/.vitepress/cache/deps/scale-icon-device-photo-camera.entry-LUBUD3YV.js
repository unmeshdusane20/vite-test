import {
  Host,
  getElement,
  h,
  registerInstance
} from "./chunk-3SL7DDGR.js";

// node_modules/@telekom/scale-components/dist/esm/scale-icon-device-photo-camera.entry.js
var iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";
var DevicePhotoCamera = class {
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
    return h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: this.fill === "currentColor" ? this.color : this.fill }, this.selected ? h("g", null, h("path", { d: "M20 6.25h-2.25l-1.5-2.5h-8.5l-1.5 2.5H4A2.245 2.245 0 001.75 8.5V17A2.245 2.245 0 004 19.25h16A2.245 2.245 0 0022.25 17V8.5A2.245 2.245 0 0020 6.25zm-8 9.42a3.67 3.67 0 110-7.34 3.67 3.67 0 010 7.34zm7-5.17a1 1 0 110-2 1 1 0 010 2z", "fill-rule": "evenodd" })) : h("g", null, h("path", { d: "M16.7 3l1.5 2.5H20a3.01 3.01 0 012.995 2.824L23 8.5V17a3.01 3.01 0 01-2.824 2.995L20 20H4a3.01 3.01 0 01-2.995-2.824L1 17V8.5a3.01 3.01 0 012.824-2.995L4 5.5h1.85L7.35 3h9.35zm-.9 1.5H8.15L6.65 7H4c-.8 0-1.423.576-1.493 1.352L2.5 8.5V17c0 .8.576 1.423 1.352 1.493L4 18.5h16c.8 0 1.423-.576 1.493-1.352L21.5 17V8.5c0-.8-.576-1.423-1.352-1.493L20 7h-2.7l-1.5-2.5zM12 7c2.75 0 5 2.25 5 5s-2.25 5-5 5-5-2.25-5-5 2.25-5 5-5zm0 1.5c-1.95 0-3.5 1.55-3.5 3.5s1.55 3.5 3.5 3.5 3.5-1.55 3.5-3.5-1.55-3.5-3.5-3.5zm7 0a1 1 0 110 2 1 1 0 010-2z", "fill-rule": "evenodd" })))));
  }
  get hostElement() {
    return getElement(this);
  }
};
DevicePhotoCamera.style = iconCss;
export {
  DevicePhotoCamera as scale_icon_device_photo_camera
};
//# sourceMappingURL=scale-icon-device-photo-camera.entry-LUBUD3YV.js.map
