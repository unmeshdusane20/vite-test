import {
  classnames
} from "./chunk-2EMOA6GN.js";
import {
  Host,
  h,
  registerInstance
} from "./chunk-3SL7DDGR.js";

// node_modules/@telekom/scale-components/dist/esm/scale-icon.entry.js
var iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";
var Icon = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.size = 24;
    this.fill = "var(--icon-color, currentColor)";
    this.stroke = "transparent";
    this.focusable = false;
    this.decorative = false;
  }
  render() {
    const pathAttributes = {
      fill: this.fill,
      stroke: this.stroke
    };
    const ariaHidden = this.decorative ? { "aria-hidden": "true" } : {};
    const focusable = this.focusable ? { tabindex: 0 } : {};
    return h(Host, null, h("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", class: this.getCssClassMap(), part: "base", width: this.size, height: this.size, viewBox: "0 0 24 24", role: "img" }, ariaHidden, focusable), this.accessibilityTitle && h("title", null, this.accessibilityTitle), this.path ? h("path", Object.assign({ d: this.path }, pathAttributes, { part: "path" })) : h("use", Object.assign({ xlinkHref: `#icon-${this.name}` }, pathAttributes))));
  }
  getCssClassMap() {
    return classnames("icon");
  }
};
Icon.style = iconCss;
export {
  Icon as scale_icon
};
//# sourceMappingURL=scale-icon.entry-GIC6HW6V.js.map
