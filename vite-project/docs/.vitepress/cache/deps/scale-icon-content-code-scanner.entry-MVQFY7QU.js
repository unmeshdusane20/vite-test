import {
  Host,
  getElement,
  h,
  registerInstance
} from "./chunk-3SL7DDGR.js";

// node_modules/@telekom/scale-components/dist/esm/scale-icon-content-code-scanner.entry.js
var iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";
var ContentCodeScanner = class {
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
    return h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: this.fill === "currentColor" ? this.color : this.fill }, this.selected ? h("g", null, h("path", { d: "M2 21.5h9v-9H2v9zM3.5 14h6v6h-6v-6zM5 18.5h3v-3H5v3zM2 11h9V2H2v9zm1.5-7.5h6v6h-6v-6zM5 8h3V5H5v3zm12 11.25v2.25h4.5V17h-2.25v2.25H17zM12.5 2v9h9V2h-9zM20 9.5h-6v-6h6v6zM18.5 5h-3v3h3V5zM17 12.5h-2.25v2.25H12.5V17h2.25v2.25H17V17h2.25v-2.25H17V12.5zm-4.5 9h2.25v-2.25H12.5v2.25zm6.75-6.75h2.25V12.5h-2.25v2.25z", "fill-rule": "evenodd" })) : h("g", null, h("path", { d: "M2 21.5h9v-9H2v9zM3.5 14h6v6h-6v-6zM5 18.5h3v-3H5v3zM2 11h9V2H2v9zm1.5-7.5h6v6h-6v-6zM5 8h3V5H5v3zm12 11.25v2.25h4.5V17h-2.25v2.25H17zM12.5 2v9h9V2h-9zM20 9.5h-6v-6h6v6zM18.5 5h-3v3h3V5zM17 12.5h-2.25v2.25H12.5V17h2.25v2.25H17V17h2.25v-2.25H17V12.5zm-4.5 9h2.25v-2.25H12.5v2.25zm6.75-6.75h2.25V12.5h-2.25v2.25z", "fill-rule": "evenodd" })))));
  }
  get hostElement() {
    return getElement(this);
  }
};
ContentCodeScanner.style = iconCss;
export {
  ContentCodeScanner as scale_icon_content_code_scanner
};
//# sourceMappingURL=scale-icon-content-code-scanner.entry-MVQFY7QU.js.map
