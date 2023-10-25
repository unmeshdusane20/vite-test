import {
  Host,
  getElement,
  h,
  registerInstance
} from "./chunk-3SL7DDGR.js";

// node_modules/@telekom/scale-components/dist/esm/scale-icon-navigation-top-up.entry.js
var iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";
var NavigationTopUp = class {
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
    return h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: this.fill === "currentColor" ? this.color : this.fill }, this.selected ? h("g", null, h("path", { d: "M18.014 16.046c-.304 0-.61-.11-.85-.333l-5.166-4.792-5.166 4.792a1.25 1.25 0 01-1.7-1.834l6.866-6.368 6.867 6.368a1.252 1.252 0 01-.851 2.167", "fill-rule": "evenodd" })) : h("g", null, h("path", { d: "M18.51 14.218L12 8.21l-6.509 6.008a.75.75 0 101.017 1.102L12 10.251l5.491 5.069a.748.748 0 001.06-.042.75.75 0 00-.042-1.06", "fill-rule": "evenodd" })))));
  }
  get hostElement() {
    return getElement(this);
  }
};
NavigationTopUp.style = iconCss;
export {
  NavigationTopUp as scale_icon_navigation_top_up
};
//# sourceMappingURL=scale-icon-navigation-top-up.entry-WFYQU3JN.js.map
