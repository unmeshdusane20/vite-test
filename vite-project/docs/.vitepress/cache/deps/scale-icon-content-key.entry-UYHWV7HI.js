import {
  Host,
  getElement,
  h,
  registerInstance
} from "./chunk-3SL7DDGR.js";

// node_modules/@telekom/scale-components/dist/esm/scale-icon-content-key.entry.js
var iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";
var ContentKey = class {
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
    return h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: this.fill === "currentColor" ? this.color : this.fill }, this.selected ? h("g", null, h("path", { d: "M18.4 1.25l2.5 2.45c1.104 1.104 1.148 2.9.132 4.103l-.132.147-.55.55h-1.8v2h-2v1.8l-1.15 1.15c.75 2.5.1 5.2-1.75 7.05a7.006 7.006 0 01-4.95 2.05c-2.3 0-4.65-1.2-6.05-3.5-.35-.55-.6-1.15-.75-1.8-.6-2.5.1-4.95 1.8-6.65 1.784-1.784 4.405-2.452 6.786-1.825l.264.075 7.65-7.6zM7.1 16.1c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z", "fill-rule": "evenodd" })) : h("g", null, h("path", { d: "M18.4 1.25l2.5 2.45c1.104 1.104 1.148 2.9.132 4.103l-.132.147-.55.55h-1.8v2h-2v1.8l-1.15 1.15c.75 2.5.1 5.2-1.75 7.05a7.006 7.006 0 01-4.95 2.05c-2.3 0-4.65-1.2-6.05-3.5-.35-.55-.6-1.15-.75-1.8-.6-2.5.1-4.95 1.8-6.65 1.784-1.784 4.405-2.452 6.786-1.825l.264.075 7.65-7.6zm0 2.1l-7.25 7.3-.45-.2c-.65-.3-1.3-.4-2-.4-1.45 0-2.85.55-3.9 1.6-1.05 1.05-1.6 2.4-1.6 3.9s.55 2.85 1.6 3.9c2.35 2.35 6.3 2.1 8.35-.7 1.05-1.432 1.28-3.365.69-5.06l-.09-.24-.15-.35 1.4-1.4V9h2V7h2.65l.15-.15c.563-.563.598-1.389.105-1.984L19.8 4.75l-1.4-1.4zM7.1 16.1c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z", "fill-rule": "evenodd" })))));
  }
  get hostElement() {
    return getElement(this);
  }
};
ContentKey.style = iconCss;
export {
  ContentKey as scale_icon_content_key
};
//# sourceMappingURL=scale-icon-content-key.entry-UYHWV7HI.js.map
