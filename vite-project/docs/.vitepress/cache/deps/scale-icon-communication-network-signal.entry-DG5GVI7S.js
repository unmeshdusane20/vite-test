import {
  Host,
  getElement,
  h,
  registerInstance
} from "./chunk-3SL7DDGR.js";

// node_modules/@telekom/scale-components/dist/esm/scale-icon-communication-network-signal.entry.js
var iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";
var CommunicationNetworkSignal = class {
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
    return h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: this.fill === "currentColor" ? this.color : this.fill }, this.selected ? h("g", null, h("path", { d: "M18.75 3.58c.69 0 1.25.56 1.25 1.25V20.5h-2.5V4.83c0-.69.56-1.25 1.25-1.25zm-4.5 3.615c.69 0 1.25.56 1.25 1.25V20.5H13V8.445c0-.69.56-1.25 1.25-1.25zm-4.5 4.1c.69 0 1.25.559 1.25 1.25V20.5H8.5v-7.955c0-.691.56-1.25 1.25-1.25zm-4.5 3.585c.69 0 1.25.559 1.25 1.25v4.37H4v-4.37c0-.691.56-1.25 1.25-1.25z", "fill-rule": "evenodd" })) : h("g", null, h("path", { d: "M18.75 3.58c.69 0 1.25.56 1.25 1.25V20.5h-2.5V4.83c0-.69.56-1.25 1.25-1.25zm-4.5 3.615c.69 0 1.25.56 1.25 1.25V20.5H13V8.445c0-.69.56-1.25 1.25-1.25zm-4.5 4.1c.69 0 1.25.559 1.25 1.25V20.5H8.5v-7.955c0-.691.56-1.25 1.25-1.25zm-4.5 3.585c.69 0 1.25.559 1.25 1.25v4.37H4v-4.37c0-.691.56-1.25 1.25-1.25z", "fill-rule": "evenodd" })))));
  }
  get hostElement() {
    return getElement(this);
  }
};
CommunicationNetworkSignal.style = iconCss;
export {
  CommunicationNetworkSignal as scale_icon_communication_network_signal
};
//# sourceMappingURL=scale-icon-communication-network-signal.entry-DG5GVI7S.js.map
