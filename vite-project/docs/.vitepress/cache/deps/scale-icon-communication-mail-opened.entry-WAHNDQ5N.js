import {
  Host,
  getElement,
  h,
  registerInstance
} from "./chunk-3SL7DDGR.js";

// node_modules/@telekom/scale-components/dist/esm/scale-icon-communication-mail-opened.entry.js
var iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";
var CommunicationMailOpened = class {
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
    return h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: this.fill === "currentColor" ? this.color : this.fill }, this.selected ? h("g", null, h("path", { d: "M15 7.47H9a.75.75 0 000 1.5h6a.75.75 0 000-1.5zm-3 9.607L.5 10.717v9.753c0 1.655 1.345 3 3 3h17c1.654 0 3-1.345 3-3v-9.753L12 17.077zM5.5 4.97h13v6.799l4.929-2.726L20 6.115V3.47h-3.096l-2.38-2.034a3.871 3.871 0 00-5.048 0L7.095 3.47H4v2.645L.571 9.043 5.5 11.769V4.97zm9.5 5.5H9a.75.75 0 000 1.5h6a.75.75 0 000-1.5z", "fill-rule": "evenodd" })) : h("g", null, h("path", { d: "M20 6.144V3.5h-3.096l-2.38-2.034a3.869 3.869 0 00-5.048 0L7.096 3.5H4v2.644L.5 9.134V20.5c0 1.654 1.345 3 3 3h17c1.654 0 3-1.346 3-3V9.134L20 6.144zM5.5 5h13v6.799L12 15.393l-6.5-3.595V5zM22 20.5c0 .827-.673 1.5-1.5 1.5h-17c-.827 0-1.5-.673-1.5-1.5v-8.923l10 5.53 10-5.53V20.5zM9 9h6a.75.75 0 100-1.5H9A.75.75 0 109 9zm6.75 2.25a.75.75 0 00-.75-.75H9A.75.75 0 109 12h6a.75.75 0 00.75-.75z", "fill-rule": "evenodd" })))));
  }
  get hostElement() {
    return getElement(this);
  }
};
CommunicationMailOpened.style = iconCss;
export {
  CommunicationMailOpened as scale_icon_communication_mail_opened
};
//# sourceMappingURL=scale-icon-communication-mail-opened.entry-WAHNDQ5N.js.map
