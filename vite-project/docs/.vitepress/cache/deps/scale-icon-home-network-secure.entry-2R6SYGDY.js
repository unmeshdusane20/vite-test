import {
  Host,
  getElement,
  h,
  registerInstance
} from "./chunk-3SL7DDGR.js";

// node_modules/@telekom/scale-components/dist/esm/scale-icon-home-network-secure.entry.js
var iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";
var HomeNetworkSecure = class {
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
    return h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: this.fill === "currentColor" ? this.color : this.fill }, this.selected ? h("g", null, h("path", { d: "M12 .5a4.505 4.505 0 014.495 4.288L16.5 5v1.5H18v6a3 3 0 01-2.824 2.995L15 15.5h-2.25v2H22v3.175A1.745 1.745 0 0121.25 24a1.75 1.75 0 01-1.75-1.75c0-.643.35-1.2.867-1.504l.133-.071V19h-7.75v1.675A1.745 1.745 0 0112 24a1.75 1.75 0 01-1.75-1.75c0-.643.35-1.2.867-1.504l.133-.071V19H3.5v1.675A1.745 1.745 0 012.75 24 1.75 1.75 0 011 22.25c0-.643.35-1.2.867-1.504L2 20.675V17.5h9.25v-2H9a3 3 0 01-2.995-2.824L6 12.5v-6h1.5V5C7.5 2.518 9.52.5 12 .5zm0 8.949a1.13 1.13 0 00-1.13 1.13c0 .286.11.546.286.745l.094.094V12.5h1.5v-1.082A1.125 1.125 0 0012 9.449zM12 2a3.003 3.003 0 00-2.995 2.824L9 5v1.5h6V5c0-1.655-1.346-3-3-3z", "fill-rule": "evenodd" })) : h("g", null, h("path", { d: "M12 .5a4.505 4.505 0 014.495 4.288L16.5 5v1.5H18v6a3 3 0 01-2.824 2.995L15 15.5h-2.25v2H22v3.175A1.745 1.745 0 0121.25 24a1.744 1.744 0 01-.883-3.254l.133-.071V19h-7.75v1.675A1.745 1.745 0 0112 24a1.744 1.744 0 01-.883-3.254l.133-.071V19H3.5v1.675A1.745 1.745 0 012.75 24a1.744 1.744 0 01-.883-3.254L2 20.675V17.5h9.25v-2H9a3 3 0 01-2.995-2.824L6 12.5v-6h1.5V5C7.5 2.518 9.519.5 12 .5zM16.5 8h-9v4.5c0 .778.596 1.42 1.355 1.493L9 14h6c.778 0 1.42-.596 1.493-1.356l.007-.144V8zM12 9.449a1.13 1.13 0 011.13 1.129c0 .287-.109.547-.286.746l-.093.094V12.5h-1.5v-1.082l-.094-.094a1.116 1.116 0 01-.286-.746A1.13 1.13 0 0112 9.449zM12 2a3.004 3.004 0 00-2.995 2.824L9 5v1.5h6V5c0-1.654-1.346-3-3-3z", "fill-rule": "evenodd" })))));
  }
  get hostElement() {
    return getElement(this);
  }
};
HomeNetworkSecure.style = iconCss;
export {
  HomeNetworkSecure as scale_icon_home_network_secure
};
//# sourceMappingURL=scale-icon-home-network-secure.entry-2R6SYGDY.js.map
