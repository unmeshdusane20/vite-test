import {
  Host,
  getElement,
  h,
  registerInstance
} from "./chunk-3SL7DDGR.js";

// node_modules/@telekom/scale-components/dist/esm/scale-icon-navigation-left-condensed.entry.js
var iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";
var NavigationLeftCondensed = class {
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
    return h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: this.fill === "currentColor" ? this.color : this.fill }, this.selected ? h("g", null, h("path", { d: "M14.797 19.271c-.336 0-.671-.134-.917-.4l-6.368-6.866L13.88 5.14a1.25 1.25 0 111.833 1.7l-4.791 5.166 4.79 5.166a1.252 1.252 0 01-.915 2.1", "fill-rule": "evenodd" })) : h("g", null, h("path", { d: "M10.252 12l5.069-5.491a.75.75 0 10-1.102-1.017L8.211 12l6.008 6.509a.748.748 0 001.06.042.75.75 0 00.043-1.059L10.252 12z", "fill-rule": "evenodd" })))));
  }
  get hostElement() {
    return getElement(this);
  }
};
NavigationLeftCondensed.style = iconCss;
export {
  NavigationLeftCondensed as scale_icon_navigation_left_condensed
};
//# sourceMappingURL=scale-icon-navigation-left-condensed.entry-UML6CKVS.js.map
