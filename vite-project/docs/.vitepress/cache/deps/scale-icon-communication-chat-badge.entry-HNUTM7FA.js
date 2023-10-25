import {
  Host,
  getElement,
  h,
  registerInstance
} from "./chunk-3SL7DDGR.js";

// node_modules/@telekom/scale-components/dist/esm/scale-icon-communication-chat-badge.entry.js
var iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";
var CommunicationChatBadge = class {
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
    return h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: this.fill === "currentColor" ? this.color : this.fill }, this.selected ? h("g", null, h("path", { d: "M10.973 3.5a7.698 7.698 0 00-.972 3.75c0 4.273 3.476 7.75 7.75 7.75a7.69 7.69 0 004.498-1.453l.25-.187V16a3 3 0 01-2.823 2.994L19.5 19h-7l-3.512 3.513a1.715 1.715 0 01-1.225.516c-.855 0-1.676-.63-1.756-1.598L6 21.274V19H4.5a3 3 0 01-2.994-2.823L1.5 16V3.5h9.473zM17.75 1a6.25 6.25 0 110 12.499A6.25 6.25 0 0117.75 1zm0 1.5A4.755 4.755 0 0013 7.25 4.756 4.756 0 0017.75 12c2.62 0 4.75-2.131 4.75-4.75 0-2.62-2.13-4.75-4.75-4.75zm.124 1.434c1.208 0 1.997.808 1.997 1.942 0 .798-.356 1.334-.82 1.785l-.118.11-1.469 1.33v.055h2.38v1.125h-3.848V8.943l2.073-1.989c.297-.288.557-.594.557-1.078 0-.4-.297-.79-.752-.79-.406 0-.681.192-.777.59l-.023.126H15.83c.075-1.05.781-1.868 2.045-1.868z", "fill-rule": "evenodd" })) : h("g", null, h("path", { d: "M21 16c0 .827-.673 1.5-1.5 1.5h-7.621l-3.952 3.952a.236.236 0 01-.273.056.26.26 0 01-.154-.233V17.5h-3c-.827 0-1.5-.673-1.5-1.5V5h7.335a7.649 7.649 0 01.634-1.5H1.5V16a3 3 0 003 3H6v2.275c0 1.055.863 1.754 1.763 1.754.43 0 .867-.16 1.225-.517L12.5 19h7a3 3 0 003-3v-2.636a7.735 7.735 0 01-1.5.914V16zm-3.25-2.5a6.25 6.25 0 100-12.5 6.25 6.25 0 000 12.5zm.123-9.566c1.208 0 1.998.808 1.998 1.942 0 .864-.418 1.422-.938 1.896l-1.469 1.329v.055h2.379v1.125h-3.847V8.943l2.072-1.988c.298-.288.558-.595.558-1.079 0-.399-.298-.79-.753-.79-.446 0-.734.233-.799.716h-1.245c.074-1.05.781-1.868 2.044-1.868z", "fill-rule": "evenodd" })))));
  }
  get hostElement() {
    return getElement(this);
  }
};
CommunicationChatBadge.style = iconCss;
export {
  CommunicationChatBadge as scale_icon_communication_chat_badge
};
//# sourceMappingURL=scale-icon-communication-chat-badge.entry-HNUTM7FA.js.map
