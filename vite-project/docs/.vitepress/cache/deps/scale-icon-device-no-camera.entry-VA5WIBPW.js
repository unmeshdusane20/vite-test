import {
  Host,
  getElement,
  h,
  registerInstance
} from "./chunk-3SL7DDGR.js";

// node_modules/@telekom/scale-components/dist/esm/scale-icon-device-no-camera.entry.js
var iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";
var DeviceNoCamera = class {
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
    return h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: this.fill === "currentColor" ? this.color : this.fill }, this.selected ? h("g", null, h("path", { d: "M4.396 2.255a.75.75 0 01.66.145l.074.07 18 18a.745.745 0 010 1.06.75.75 0 01-.976.073l-.084-.073-18-18a.75.75 0 01.326-1.275zM3.42 5l14.76 14.76a3 3 0 01-.937.23L17 20H5a3 3 0 01-2.995-2.824L2 17v-6.5H.5v-4H2V5h1.42zM20 5v3.785L21.78 7h1.72v10h-1.72L20 15.215v.005L9.78 5H20z", "fill-rule": "evenodd" })) : h("g", null, h("path", { d: "M4.1 2.45a.722.722 0 01.965-.074l.085.074 18.05 18c.3.3.3.75 0 1.05-.15.15-.35.2-.55.2a.798.798 0 01-.471-.133L22.1 21.5l-18-18c-.3-.3-.3-.75 0-1.05zM3.4 5l1.5 1.5H3.5V17c0 .8.576 1.423 1.352 1.493L5 18.5h11.9l1.3 1.25c-.32.12-.64.208-.96.238L17 20H5a3.01 3.01 0 01-2.995-2.824L2 17v-6.5H.5v-4H2V5h1.4zM20 5v3.8L21.8 7h1.7v10h-1.7l-3.3-3.3V6.5h-7.2L9.8 5H20zm2 3.9l-2 2v2.2l2 2V8.9z", "fill-rule": "evenodd" })))));
  }
  get hostElement() {
    return getElement(this);
  }
};
DeviceNoCamera.style = iconCss;
export {
  DeviceNoCamera as scale_icon_device_no_camera
};
//# sourceMappingURL=scale-icon-device-no-camera.entry-VA5WIBPW.js.map
