import {
  Host,
  getElement,
  h,
  registerInstance
} from "./chunk-3SL7DDGR.js";

// node_modules/@telekom/scale-components/dist/esm/scale-icon-content-heart.entry.js
var iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";
var ContentHeart = class {
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
    return h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: this.fill === "currentColor" ? this.color : this.fill }, this.selected ? h("g", null, h("path", { d: "M21.315 6.07a5.857 5.857 0 00-4.85-2.57 5.85 5.85 0 00-2.265.45c-1 .415-1.69.985-2.2 1.605-.55-.67-1.305-1.28-2.425-1.69a5.864 5.864 0 00-6.89 2.205 5.89 5.89 0 00.39 7.12l6.63 7.755a3.017 3.017 0 004.585 0l6.63-7.755a5.883 5.883 0 00.395-7.12z", "fill-rule": "evenodd" })) : h("g", null, h("path", { d: "M21.315 6.07a5.857 5.857 0 00-4.85-2.57 5.85 5.85 0 00-2.265.45c-1 .415-1.69.985-2.2 1.605-.55-.67-1.305-1.28-2.425-1.69a5.864 5.864 0 00-6.89 2.205 5.89 5.89 0 00.39 7.12l6.63 7.755a3.017 3.017 0 004.585 0l6.63-7.755a5.883 5.883 0 00.395-7.12zm-1.53 6.145L13.15 19.97c-.3.355-.725.53-1.15.53-.425 0-.85-.175-1.15-.53l-6.635-7.755a4.372 4.372 0 01-.29-5.3A4.319 4.319 0 017.535 5c.52 0 1.035.09 1.525.27 1.785.655 2.275 1.915 2.94 3.235.635-1.255 1.105-2.48 2.775-3.17A4.486 4.486 0 0116.465 5c1.365 0 2.735.625 3.61 1.915 1.11 1.63.99 3.8-.29 5.3z", "fill-rule": "evenodd" })))));
  }
  get hostElement() {
    return getElement(this);
  }
};
ContentHeart.style = iconCss;
export {
  ContentHeart as scale_icon_content_heart
};
//# sourceMappingURL=scale-icon-content-heart.entry-3HTOCBB5.js.map
