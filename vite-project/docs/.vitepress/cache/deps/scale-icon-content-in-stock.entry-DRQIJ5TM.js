import {
  Host,
  getElement,
  h,
  registerInstance
} from "./chunk-3SL7DDGR.js";

// node_modules/@telekom/scale-components/dist/esm/scale-icon-content-in-stock.entry.js
var iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";
var ContentInStock = class {
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
    return h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: this.fill === "currentColor" ? this.color : this.fill }, this.selected ? h("g", null, h("path", { d: "M3.5 20a2 2 0 110 4 2 2 0 010-4zM23.94.456a.75.75 0 01-.304.939l-.09.046-2.271.973a1.5 1.5 0 00-.882 1.092l-.021.147-.62 6.61a7.753 7.753 0 00-9.251 4.741l-5.886-.38a2.986 2.986 0 01-2.77-2.527l-.023-.183-.897-9.412h18.24a2.998 2.998 0 011.32-1.372l.198-.094L22.954.06a.75.75 0 01.985.394zm-6.19 11.046a6.25 6.25 0 110 12.499 6.25 6.25 0 010-12.5zm3.143 4.035a.75.75 0 00-.976-.073l-.085.073-2.819 2.819-1.408-1.409a.75.75 0 00-1.133.976l.072.085 2.47 2.469 3.879-3.88a.75.75 0 000-1.06zM2.75 17.5h7.262l-.007.286.002.226c0 .04.003.083.005.128l.023.295c.01.108.025.227.043.358l.032.207H2.75a.75.75 0 01-.102-1.494l.102-.006z", "fill-rule": "evenodd" })) : h("g", null, h("path", { d: "M3.5 20a2 2 0 110 4 2 2 0 010-4zm14.25-8.5a6.25 6.25 0 110 12.5 6.25 6.25 0 010-12.5zm3.143 4.035a.75.75 0 00-.976-.073l-.085.073-2.819 2.819-1.408-1.409a.75.75 0 00-1.133.977l.072.084 2.47 2.47 3.879-3.88a.75.75 0 000-1.061zM2.75 17.5h7.262l-.007.286.002.226c0 .041.003.084.005.128l.023.296c.01.108.025.226.043.358l.032.206H2.75a.75.75 0 01-.102-1.493l.102-.007zM22.954.06a.75.75 0 01.682 1.333l-.09.046-2.271.973a1.5 1.5 0 00-.882 1.092l-.021.147-.621 6.62a7.679 7.679 0 00-1.104-.21l-.38-.035L18.833 4H2.573l.741 7.77a1.493 1.493 0 001.26 1.34l.136.015 6.534.421a7.73 7.73 0 00-.611 1.152l-.123.304-5.896-.38a2.986 2.986 0 01-2.77-2.527l-.023-.183L.925 2.5h18.24a2.998 2.998 0 011.32-1.372l.198-.094L22.954.06z", "fill-rule": "evenodd" })))));
  }
  get hostElement() {
    return getElement(this);
  }
};
ContentInStock.style = iconCss;
export {
  ContentInStock as scale_icon_content_in_stock
};
//# sourceMappingURL=scale-icon-content-in-stock.entry-DRQIJ5TM.js.map
