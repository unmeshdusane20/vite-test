import {
  Host,
  getElement,
  h,
  registerInstance
} from "./chunk-3SL7DDGR.js";

// node_modules/@telekom/scale-components/dist/esm/scale-icon-device-fax.entry.js
var iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";
var DeviceFax = class {
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
    return h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: this.fill === "currentColor" ? this.color : this.fill }, this.selected ? h("g", null, h("path", { d: "M.501 9.507v10c0 1.65 1.35 3 3 3h3.5v-16h-3.5c-1.65 0-3 1.35-3 3zm9.507-3h9.512V3.022h-9.512v3.485zm1.993 6.993h6.5V10h-6.5v3.5zm5.75 3a.75.75 0 110-1.5.75.75 0 010 1.5zm0 2.5a.75.75 0 110-1.5.75.75 0 010 1.5zm-2.5-2.5a.75.75 0 110-1.5.75.75 0 010 1.5zm0 2.5a.75.75 0 110-1.5.75.75 0 010 1.5zm-2.5-2.5a.75.75 0 110-1.5.75.75 0 010 1.5zm0 2.5a.75.75 0 110-1.5.75.75 0 010 1.5zm8.184-12.457h.085V1.522H8.508v4.985h-.007v16h12c1.65 0 3-1.35 3-3v-10a3.008 3.008 0 00-2.566-2.964z", "fill-rule": "evenodd" })) : h("g", null, h("path", { d: "M15.251 17.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.5-2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm2.5 0a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.5 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm5-2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-5.75-1.5h6.5V10h-6.5v3.5zm5.75 4a.75.75 0 100 1.5.75.75 0 000-1.5zm4.25 2.007c0 .85-.65 1.5-1.5 1.5h-12v-13h12c.85 0 1.5.65 1.5 1.5v10zm-15 1.5h-3.5c-.85 0-1.5-.65-1.5-1.5v-10c0-.85.65-1.5 1.5-1.5h3.5v13zm3.007-14.501h9.512V3.021h-9.512v3.485zm10.677.011h.335V1.521H8.508v4.986H3.501c-1.65 0-3 1.35-3 3v10c0 1.65 1.35 3 3 3h17c1.65 0 3-1.35 3-3v-10a3.005 3.005 0 00-2.816-2.99z", "fill-rule": "evenodd" })))));
  }
  get hostElement() {
    return getElement(this);
  }
};
DeviceFax.style = iconCss;
export {
  DeviceFax as scale_icon_device_fax
};
//# sourceMappingURL=scale-icon-device-fax.entry-TGEX4QK5.js.map
