import {
  Host,
  getElement,
  h,
  registerInstance
} from "./chunk-3SL7DDGR.js";

// node_modules/@telekom/scale-components/dist/esm/scale-icon-content-international.entry.js
var iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";
var ContentInternational = class {
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
    return h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: this.fill === "currentColor" ? this.color : this.fill }, this.selected ? h("g", null, h("path", { d: "M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11A11 11 0 0012 1zm8.4 9.75h-1.445a15.205 15.205 0 00-1.185-4.97 8.465 8.465 0 012.63 4.97zM10.75 3.9v6.85H7.56a11.67 11.67 0 011.6-5.185A5.16 5.16 0 0110.75 3.9zm0 9.35v6.85a5.16 5.16 0 01-1.59-1.665 11.67 11.67 0 01-1.6-5.185h3.19zm2.5 6.85v-6.85h3.19a11.67 11.67 0 01-1.6 5.185 5.16 5.16 0 01-1.59 1.665zm0-9.35V3.9a5.16 5.16 0 011.59 1.665 11.67 11.67 0 011.6 5.185h-3.19zm-7-4.97a15.205 15.205 0 00-1.185 4.97h-1.46A8.43 8.43 0 016.23 5.78h.02zm-2.645 7.47h1.44a15.205 15.205 0 001.185 4.97 8.43 8.43 0 01-2.625-4.97zm14.165 4.97a15.205 15.205 0 001.185-4.97H20.4a8.465 8.465 0 01-2.63 4.97z", "fill-rule": "evenodd" })) : h("g", null, h("defs", null, h("path", { d: "M12 1C5.95 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1zm9.45 10.25h-2.5c-.15-3-1.05-5.7-2.4-7.55 2.75 1.5 4.65 4.3 4.9 7.55zM11.25 2.6v8.65H6.5c.25-4.4 2.25-8.05 4.75-8.65zm0 10.15v8.65c-2.5-.6-4.5-4.25-4.75-8.65h4.75zm1.5 8.65v-8.65h4.75c-.25 4.4-2.25 8.05-4.75 8.65zm0-10.15V2.6c2.5.6 4.5 4.25 4.75 8.65h-4.75zM7.45 3.7c-1.35 1.85-2.3 4.55-2.4 7.55h-2.5a9.426 9.426 0 014.9-7.55zm-4.9 9.05h2.5c.15 3 1.05 5.7 2.4 7.55a9.426 9.426 0 01-4.9-7.55zM16.6 20.3c1.35-1.85 2.3-4.55 2.4-7.55h2.5a9.66 9.66 0 01-4.9 7.55z", id: "a" })), h("use", { xlinkHref: "#a", "fill-rule": "evenodd" })))));
  }
  get hostElement() {
    return getElement(this);
  }
};
ContentInternational.style = iconCss;
export {
  ContentInternational as scale_icon_content_international
};
//# sourceMappingURL=scale-icon-content-international.entry-5IUE6COG.js.map
