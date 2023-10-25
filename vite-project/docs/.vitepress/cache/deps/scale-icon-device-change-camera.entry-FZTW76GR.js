import {
  Host,
  getElement,
  h,
  registerInstance
} from "./chunk-3SL7DDGR.js";

// node_modules/@telekom/scale-components/dist/esm/scale-icon-device-change-camera.entry.js
var iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";
var DeviceChangeCamera = class {
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
    return h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: this.fill === "currentColor" ? this.color : this.fill }, this.selected ? h("g", null, h("path", { d: "M13.777 1.154l.103.011A11 11 0 0123 12a10.965 10.965 0 01-3.844 8.343l-.256.212L20.5 23h-6.685l2.685-6.13 1.57 2.44a9.5 9.5 0 00-4.46-16.645.762.762 0 01.167-1.511zM10.185 1L7.5 7.13 5.93 4.715a9.5 9.5 0 004.166 16.589l.294.056-.015-.025a.762.762 0 01-.27 1.5A11 11 0 014.863 3.651l.242-.201L3.5 1h6.685zM14.5 9v1.765L15.825 9.5h.675V14h-.675L14.5 12.735V13a1.5 1.5 0 01-1.356 1.493L13 14.5H9.5a1.5 1.5 0 01-1.493-1.356L8 13V9h6.5z", "fill-rule": "evenodd" })) : h("g", null, h("path", { d: "M13.794 1.141l.106.009C19.05 2.1 23 6.6 23 12c0 3.335-1.495 6.343-3.853 8.392l-.247.208 1.6 2.4h-6.7l2.7-6.1 1.55 2.4c2.1-1.75 3.45-4.35 3.45-7.3 0-4.65-3.4-8.55-7.9-9.4-.42-.047-.71-.485-.583-.91l.033-.09c.09-.315.423-.468.744-.459zM10.2 1L7.55 7.1l-1.6-2.4C3.85 6.45 2.5 9.05 2.5 12c0 4.65 3.4 8.55 7.9 9.35.45.05.75.55.55 1.05-.1.35-.5.5-.85.45C4.95 21.9 1 17.4 1 12a10.94 10.94 0 013.853-8.346L5.1 3.45 3.5 1h6.7zm4.3 8v1.75l1.35-1.25h.65V14h-.65l-1.35-1.25V13c0 .8-.576 1.423-1.352 1.493L13 14.5H9.5a1.47 1.47 0 01-1.493-1.352L8 13V9h6.5z", "fill-rule": "evenodd" })))));
  }
  get hostElement() {
    return getElement(this);
  }
};
DeviceChangeCamera.style = iconCss;
export {
  DeviceChangeCamera as scale_icon_device_change_camera
};
//# sourceMappingURL=scale-icon-device-change-camera.entry-FZTW76GR.js.map
