import {
  Host,
  getElement,
  h,
  registerInstance
} from "./chunk-3SL7DDGR.js";

// node_modules/@telekom/scale-components/dist/esm/scale-icon-process-order-status.entry.js
var iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";
var ProcessOrderStatus = class {
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
    return h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: this.fill === "currentColor" ? this.color : this.fill }, this.selected ? h("g", null, h("path", { d: "M17.25.498a3.25 3.25 0 01.926 6.365L18 6.91v2.73a2.235 2.235 0 01.155 4.16l-.155.06v2.73a3.25 3.25 0 01-.568 6.404L17.25 23l-.182-.006a3.25 3.25 0 01-.743-6.357l.175-.047v-2.73a2.235 2.235 0 01-.155-4.16l.155-.06V6.91a3.25 3.25 0 01.75-6.412zM7.5 8.15l5.5 3.6-5.5 3.6V13H2a1.25 1.25 0 01-.128-2.494L2 10.5h5.5V8.15z", "fill-rule": "evenodd" })) : h("g", null, h("path", { d: "M17.25.5c1.8 0 3.25 1.45 3.25 3.25 0 1.485-.964 2.695-2.32 3.102L18 6.9v2.75c.95.35 1.5 1.2 1.5 2.1 0 .844-.483 1.644-1.327 2.029L18 13.85v2.75c1.45.35 2.5 1.6 2.5 3.15 0 1.8-1.45 3.25-3.25 3.25S14 21.55 14 19.75c0-1.485.964-2.695 2.32-3.102l.18-.048v-2.75c-.95-.35-1.5-1.2-1.5-2.1 0-.844.483-1.644 1.327-2.029l.173-.071V6.9C15.05 6.55 14 5.3 14 3.75 14 1.95 15.45.5 17.25.5zm0 17.5c-.95 0-1.75.8-1.75 1.75s.8 1.75 1.75 1.75S19 20.7 19 19.75 18.2 18 17.25 18zM7.5 8.15l5.5 3.6-5.5 3.6V12.5H2c-.4 0-.75-.35-.75-.75 0-.367.294-.691.651-.743L2 11h5.5V8.15z", "fill-rule": "evenodd" })))));
  }
  get hostElement() {
    return getElement(this);
  }
};
ProcessOrderStatus.style = iconCss;
export {
  ProcessOrderStatus as scale_icon_process_order_status
};
//# sourceMappingURL=scale-icon-process-order-status.entry-NEVNZHL5.js.map
