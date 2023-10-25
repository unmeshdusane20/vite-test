import {
  Host,
  getElement,
  h,
  registerInstance
} from "./chunk-3SL7DDGR.js";

// node_modules/@telekom/scale-components/dist/esm/scale-icon-communication-outbox.entry.js
var iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";
var CommunicationOutbox = class {
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
    return h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: this.fill === "currentColor" ? this.color : this.fill }, this.selected ? h("g", null, h("path", { d: "M9.316 15.5l.202.428A2.764 2.764 0 0012 17.5c.992 0 1.913-.547 2.396-1.407l.085-.165.204-.428H21v4a3.003 3.003 0 01-2.823 2.995L18 22.5H6a3.004 3.004 0 01-2.994-2.824L3 19.5v-4h6.314zM11.998 1l4.582 7h-3.83v5.75a.75.75 0 01-1.493.102l-.007-.102V8H7.42L12 1z", "fill-rule": "evenodd" })) : h("g", null, h("path", { d: "M9.314 15.5l.205.428A2.761 2.761 0 0012 17.5c.991 0 1.912-.547 2.396-1.407l.085-.165.204-.428H21v4a3.004 3.004 0 01-2.824 2.995L18 22.5H6a3.004 3.004 0 01-2.995-2.824L3 19.5v-4h6.314zM8.398 17H4.5v2.5c0 .778.596 1.42 1.356 1.493L6 21h12c.778 0 1.42-.596 1.493-1.356l.007-.144V17h-3.899A4.27 4.27 0 0112 19a4.272 4.272 0 01-3.602-2zM12 1l4.582 7H12.75v5.75a.75.75 0 01-1.5 0V8H7.418L12 1z", "fill-rule": "evenodd" })))));
  }
  get hostElement() {
    return getElement(this);
  }
};
CommunicationOutbox.style = iconCss;
export {
  CommunicationOutbox as scale_icon_communication_outbox
};
//# sourceMappingURL=scale-icon-communication-outbox.entry-JXTGIK34.js.map
