import {
  Host,
  getElement,
  h,
  registerInstance
} from "./chunk-3SL7DDGR.js";

// node_modules/@telekom/scale-components/dist/esm/scale-icon-content-unlock.entry.js
var iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";
var ContentUnlock = class {
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
    return h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: this.fill === "currentColor" ? this.color : this.fill }, this.selected ? h("g", null, h("path", { d: "M7 11V7a5 5 0 0110 0h1.5a6.5 6.5 0 10-13 0v4H3v9.5a3 3 0 003 3h12a3 3 0 003-3V11H7zm6 6.61v1.89h-2v-1.89a1.5 1.5 0 112 0z", "fill-rule": "evenodd" })) : h("g", null, h("path", { d: "M12 .5c2.3 0 4.45 1.25 5.6 3.2a6.4 6.4 0 01.893 2.986L18.5 7H17c0-.9-.25-1.8-.7-2.55C15.4 2.95 13.75 2 12 2 9.322 2 7.119 4.133 7.005 6.784L7 7v4h14v9.5a3.01 3.01 0 01-2.824 2.995L18 23.5H6a3.01 3.01 0 01-2.995-2.824L3 20.5V11h2.5V7C5.5 3.4 8.4.5 12 .5zm7.5 12h-15v8c0 .8.576 1.423 1.352 1.493L6 22h12c.8 0 1.423-.576 1.493-1.352l.007-.148v-8zM12 15c.85 0 1.5.65 1.5 1.5 0 .4-.158.76-.404 1.011L13 17.6v1.9h-2v-1.9c-.3-.25-.5-.65-.5-1.1 0-.85.65-1.5 1.5-1.5z", "fill-rule": "evenodd" })))));
  }
  get hostElement() {
    return getElement(this);
  }
};
ContentUnlock.style = iconCss;
export {
  ContentUnlock as scale_icon_content_unlock
};
//# sourceMappingURL=scale-icon-content-unlock.entry-L5KKSIIG.js.map
