import {
  Host,
  getElement,
  h,
  registerInstance
} from "./chunk-3SL7DDGR.js";

// node_modules/@telekom/scale-components/dist/esm/scale-icon-navigation-left.entry.js
var iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";
var NavigationLeft = class {
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
    return h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: this.fill === "currentColor" ? this.color : this.fill }, this.selected ? h("g", null, h("path", { d: "M15.5 18.756c-.27 0-.544-.088-.773-.269l-8.224-6.484 8.224-6.486a1.249 1.249 0 111.549 1.963l-5.734 4.523 5.734 4.522a1.249 1.249 0 01-.775 2.231", "fill-rule": "evenodd" })) : h("g", null, h("path", { d: "M15.949 16.911l-6.222-4.91 6.221-4.913a.75.75 0 10-.929-1.178L7.306 12l7.713 6.088a.746.746 0 001.054-.124.75.75 0 00-.124-1.053", "fill-rule": "evenodd" })))));
  }
  get hostElement() {
    return getElement(this);
  }
};
NavigationLeft.style = iconCss;
export {
  NavigationLeft as scale_icon_navigation_left
};
//# sourceMappingURL=scale-icon-navigation-left.entry-T2MZNH6X.js.map
