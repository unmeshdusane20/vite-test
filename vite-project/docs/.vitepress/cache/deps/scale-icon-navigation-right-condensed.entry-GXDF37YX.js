import {
  Host,
  getElement,
  h,
  registerInstance
} from "./chunk-3SL7DDGR.js";

// node_modules/@telekom/scale-components/dist/esm/scale-icon-navigation-right-condensed.entry.js
var iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";
var NavigationRightCondensed = class {
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
    return h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: this.fill === "currentColor" ? this.color : this.fill }, this.selected ? h("g", null, h("path", { d: "M9.204 19.269a1.252 1.252 0 01-.916-2.1l4.79-5.166-4.79-5.166a1.251 1.251 0 011.833-1.7l6.368 6.866-6.368 6.866c-.246.266-.581.4-.917.4", "fill-rule": "evenodd" })) : h("g", null, h("path", { d: "M9.782 5.491A.75.75 0 008.68 6.509L13.748 12 8.68 17.491a.751.751 0 001.104 1.018L15.79 12 9.782 5.491z", "fill-rule": "evenodd" })))));
  }
  get hostElement() {
    return getElement(this);
  }
};
NavigationRightCondensed.style = iconCss;
export {
  NavigationRightCondensed as scale_icon_navigation_right_condensed
};
//# sourceMappingURL=scale-icon-navigation-right-condensed.entry-GXDF37YX.js.map
