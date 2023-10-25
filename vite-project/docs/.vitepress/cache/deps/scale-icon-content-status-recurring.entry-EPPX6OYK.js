import {
  Host,
  getElement,
  h,
  registerInstance
} from "./chunk-3SL7DDGR.js";

// node_modules/@telekom/scale-components/dist/esm/scale-icon-content-status-recurring.entry.js
var iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";
var ContentStatusRecurring = class {
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
    return h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: this.fill === "currentColor" ? this.color : this.fill }, this.selected ? h("g", null, h("path", { d: "M14.009 3.995A8.234 8.234 0 0120.249 12a8.2 8.2 0 01-3.034 6.393l-1.321-2.026-2.68 6.112 6.674.012-1.302-1.995A10.687 10.687 0 0022.749 12c0-4.944-3.345-9.232-8.134-10.43a1.25 1.25 0 00-.606 2.425M10.9 21.518a1.25 1.25 0 01-1.516.91A10.731 10.731 0 011.251 12c0-3.385 1.556-6.485 4.162-8.496L4.112 1.506l6.674.013-2.681 6.112-1.321-2.026A8.203 8.203 0 003.75 12a8.234 8.234 0 006.241 8.003 1.25 1.25 0 01.909 1.517", "fill-rule": "evenodd" })) : h("g", null, h("path", { d: "M6.511 5.187l1.595 2.445 2.68-6.112-6.675-.013 1.578 2.42A10.228 10.228 0 001.75 12c0 4.761 3.367 8.968 8.008 10.004a.751.751 0 00.327-1.464C6.125 19.656 3.25 16.064 3.25 12a8.732 8.732 0 013.261-6.813M22.252 12c0-4.762-3.37-8.969-8.01-10.004a.75.75 0 00-.327 1.464c3.96.883 6.836 4.474 6.836 8.54 0 2.664-1.238 5.166-3.264 6.809l-1.59-2.44-2.682 6.111 6.675.012-1.579-2.42c2.445-1.921 3.94-4.9 3.94-8.072", "fill-rule": "evenodd" })))));
  }
  get hostElement() {
    return getElement(this);
  }
};
ContentStatusRecurring.style = iconCss;
export {
  ContentStatusRecurring as scale_icon_content_status_recurring
};
//# sourceMappingURL=scale-icon-content-status-recurring.entry-EPPX6OYK.js.map
