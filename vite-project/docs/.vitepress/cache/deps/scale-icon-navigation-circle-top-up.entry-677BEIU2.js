import {
  Host,
  getElement,
  h,
  registerInstance
} from "./chunk-3SL7DDGR.js";

// node_modules/@telekom/scale-components/dist/esm/scale-icon-navigation-circle-top-up.entry.js
var iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";
var NavigationCircleTopUp = class {
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
    return h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: this.fill === "currentColor" ? this.color : this.fill }, this.selected ? h("g", null, h("path", { d: "M4.2 4.2c4.3-4.25 11.3-4.25 15.6 0 4.25 4.3 4.25 11.3 0 15.6-2.15 2.15-5 3.2-7.8 3.2s-5.65-1.1-7.8-3.2C-.05 15.5-.05 8.5 4.2 4.2zM12 8.4l4.05 4.35c.25.3.25.75-.05 1.05a.773.773 0 01-.956.031l-.094-.081L12 10.6l-2.95 3.15c-.25.3-.75.35-1.05.05a.729.729 0 01-.118-.971l.068-.079L12 8.4z", "fill-rule": "evenodd" })) : h("g", null, h("path", { d: "M4.2 4.2c4.3-4.25 11.3-4.25 15.6 0 4.25 4.3 4.25 11.3 0 15.6-2.15 2.15-5 3.2-7.8 3.2s-5.65-1.1-7.8-3.2C-.05 15.5-.05 8.5 4.2 4.2zm14.55 1.1C15.05 1.6 9 1.6 5.3 5.3 1.6 9 1.6 15 5.25 18.7c3.7 3.7 9.75 3.7 13.45 0 3.7-3.7 3.7-9.7.05-13.4zM12 8.4l4.05 4.35c.25.3.25.75-.05 1.05a.773.773 0 01-.956.031l-.094-.081L12 10.6l-2.95 3.15c-.25.3-.75.35-1.05.05a.729.729 0 01-.118-.971l.068-.079L12 8.4z", "fill-rule": "evenodd" })))));
  }
  get hostElement() {
    return getElement(this);
  }
};
NavigationCircleTopUp.style = iconCss;
export {
  NavigationCircleTopUp as scale_icon_navigation_circle_top_up
};
//# sourceMappingURL=scale-icon-navigation-circle-top-up.entry-677BEIU2.js.map
