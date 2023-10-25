import {
  Host,
  getElement,
  h,
  registerInstance
} from "./chunk-3SL7DDGR.js";

// node_modules/@telekom/scale-components/dist/esm/scale-icon-alert-help.entry.js
var iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";
var AlertHelp = class {
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
    return h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: this.fill === "currentColor" ? this.color : this.fill }, this.selected ? h("g", null, h("path", { d: "M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11A11 11 0 0012 1zm0 17a1.364 1.364 0 110-2.727A1.364 1.364 0 0112 18zm1.91-6c-.546.47-1.02.91-1.02 1.593v.36h-1.905v-.655c0-1.123.666-1.663 1.315-2.182.545-.43 1.03-.84 1.03-1.521a1.14 1.14 0 00-1.22-1.239 1.25 1.25 0 00-1.272 1.266h-1.98a3.098 3.098 0 013.273-3.055c1.849 0 3.19 1.228 3.19 2.913-.021 1.276-.757 1.936-1.412 2.52z", "fill-rule": "evenodd" })) : h("g", null, h("path", { d: "M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1zm0 1.5c-5.239 0-9.5 4.261-9.5 9.5 0 5.238 4.261 9.5 9.5 9.5 5.238 0 9.5-4.262 9.5-9.5 0-5.239-4.262-9.5-9.5-9.5zM12 15a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zm.101-7.98c1.695 0 2.926 1.123 2.926 2.67 0 .876-.381 1.437-.824 1.89l-.225.217-.462.42c-.346.323-.636.655-.69 1.095l-.01.152v.332H11.07v-.603c0-.89.46-1.383.968-1.811l.475-.391c.388-.33.707-.676.707-1.196 0-.7-.428-1.134-1.118-1.134-.612 0-1.02.366-1.146 1.015l-.022.143H9.12c.085-1.412 1.027-2.799 2.981-2.799z", "fill-rule": "evenodd" })))));
  }
  get hostElement() {
    return getElement(this);
  }
};
AlertHelp.style = iconCss;
export {
  AlertHelp as scale_icon_alert_help
};
//# sourceMappingURL=scale-icon-alert-help.entry-CX6L7Q7J.js.map
