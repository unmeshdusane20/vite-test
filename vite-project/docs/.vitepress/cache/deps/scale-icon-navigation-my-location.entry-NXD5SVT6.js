import {
  Host,
  getElement,
  h,
  registerInstance
} from "./chunk-3SL7DDGR.js";

// node_modules/@telekom/scale-components/dist/esm/scale-icon-navigation-my-location.entry.js
var iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";
var NavigationMyLocation = class {
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
    return h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: this.fill === "currentColor" ? this.color : this.fill }, this.selected ? h("g", null, h("path", { d: "M12 1a.75.75 0 01.75.75v1.79a8.5 8.5 0 017.71 7.71h1.79a.75.75 0 110 1.5h-1.79a8.5 8.5 0 01-7.71 7.71v1.79a.75.75 0 11-1.5 0v-1.79a8.5 8.5 0 01-7.71-7.71H1.75a.75.75 0 110-1.5h1.79a8.5 8.5 0 017.71-7.71V1.75A.75.75 0 0112 1zm0 9a2 2 0 100 4 2 2 0 000-4z", "fill-rule": "evenodd" })) : h("g", null, h("path", { d: "M12 1c.367 0 .691.294.743.651l.007.099v1.8a8.448 8.448 0 017.674 7.44l.026.26h1.8c.4 0 .75.35.75.75a.772.772 0 01-.651.743l-.099.007h-1.8a8.448 8.448 0 01-7.44 7.674l-.26.026v1.8c0 .4-.35.75-.75.75a.772.772 0 01-.743-.651l-.007-.099v-1.8a8.448 8.448 0 01-7.674-7.44l-.026-.26h-1.8c-.4 0-.75-.35-.75-.75 0-.367.294-.691.651-.743l.099-.007h1.8a8.448 8.448 0 017.44-7.674l.26-.026v-1.8c0-.4.35-.75.75-.75zm0 4c-3.85 0-7 3.15-7 7s3.15 7 7 7 7-3.15 7-7-3.15-7-7-7zm0 5a2 2 0 110 4 2 2 0 010-4z", "fill-rule": "evenodd" })))));
  }
  get hostElement() {
    return getElement(this);
  }
};
NavigationMyLocation.style = iconCss;
export {
  NavigationMyLocation as scale_icon_navigation_my_location
};
//# sourceMappingURL=scale-icon-navigation-my-location.entry-NXD5SVT6.js.map
