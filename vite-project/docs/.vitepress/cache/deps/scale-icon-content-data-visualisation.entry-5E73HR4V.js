import {
  Host,
  getElement,
  h,
  registerInstance
} from "./chunk-3SL7DDGR.js";

// node_modules/@telekom/scale-components/dist/esm/scale-icon-content-data-visualisation.entry.js
var iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";
var ContentDataVisualisation = class {
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
    return h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: this.fill === "currentColor" ? this.color : this.fill }, this.selected ? h("g", null, h("path", { d: "M1 3.5V16a3 3 0 003 3h5.44l-.11.21A1.5 1.5 0 018 20H5.5v1.5h13V20H16a1.5 1.5 0 01-1.325-.79L14.56 19H20a3 3 0 003-3V3.5H1zm10.925 12a3.925 3.925 0 110-7.845v3.92h3.92a3.92 3.92 0 01-3.92 3.925zm1.075-5V6.575a3.925 3.925 0 013.925 3.925H13z", "fill-rule": "evenodd" })) : h("g", null, h("path", { d: "M23 3.5V16a3 3 0 01-2.824 2.995L20 19h-5.441l.113.21a1.5 1.5 0 001.172.783l.149.007H18.5v1.5h-13V20h2.507a1.5 1.5 0 001.244-.662l.077-.129.113-.209H4a3 3 0 01-2.995-2.824L1 16V3.5h22zM21.5 5h-19v11c0 .778.596 1.42 1.356 1.493L4 17.5h16c.778 0 1.42-.596 1.493-1.356L21.5 16V5zm-9.577 2.654v3.923h3.923a3.923 3.923 0 11-4.125-3.918l.202-.005zM13 6.577a3.91 3.91 0 012.774 1.149 3.91 3.91 0 011.142 2.543l.007.231H13V6.577z", "fill-rule": "evenodd" })))));
  }
  get hostElement() {
    return getElement(this);
  }
};
ContentDataVisualisation.style = iconCss;
export {
  ContentDataVisualisation as scale_icon_content_data_visualisation
};
//# sourceMappingURL=scale-icon-content-data-visualisation.entry-5E73HR4V.js.map
