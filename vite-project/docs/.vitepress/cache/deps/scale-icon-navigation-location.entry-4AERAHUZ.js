import {
  Host,
  getElement,
  h,
  registerInstance
} from "./chunk-3SL7DDGR.js";

// node_modules/@telekom/scale-components/dist/esm/scale-icon-navigation-location.entry.js
var iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";
var NavigationLocation = class {
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
    return h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: this.fill === "currentColor" ? this.color : this.fill }, this.selected ? h("g", null, h("path", { d: "M17.76 2.945A8.145 8.145 0 004.955 12.79l5.545 9.54a1.75 1.75 0 003.03 0l5.515-9.54a8.14 8.14 0 00-1.285-9.845zM12 11.5a3 3 0 110-6 3 3 0 010 6z", "fill-rule": "evenodd" })) : h("g", null, h("path", { d: "M12 .55c2.1 0 4.15.8 5.75 2.4a8.171 8.171 0 011.441 9.596l-.141.254-5.55 9.55c-.3.55-.9.85-1.5.85-.504 0-1.05-.21-1.407-.707l-.093-.143-5.55-9.55a8.17 8.17 0 011.3-9.85C7.85 1.35 9.9.55 12 .55zm0 1.5c-1.8 0-3.45.7-4.7 1.95a6.661 6.661 0 00-1.181 7.812l.131.238 5.55 9.55c.05.05.1.1.2.1.08 0 .128 0 .17-.051l.03-.049 5.55-9.55c1.5-2.6 1.1-5.9-1.05-8.05A6.577 6.577 0 0012 2.05zm0 3.45a3 3 0 110 6 3 3 0 010-6z", "fill-rule": "evenodd" })))));
  }
  get hostElement() {
    return getElement(this);
  }
};
NavigationLocation.style = iconCss;
export {
  NavigationLocation as scale_icon_navigation_location
};
//# sourceMappingURL=scale-icon-navigation-location.entry-4AERAHUZ.js.map
